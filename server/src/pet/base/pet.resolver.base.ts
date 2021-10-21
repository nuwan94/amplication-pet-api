import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreatePetArgs } from "./CreatePetArgs";
import { UpdatePetArgs } from "./UpdatePetArgs";
import { DeletePetArgs } from "./DeletePetArgs";
import { PetFindManyArgs } from "./PetFindManyArgs";
import { PetFindUniqueArgs } from "./PetFindUniqueArgs";
import { Pet } from "./Pet";
import { PetService } from "../pet.service";

@graphql.Resolver(() => Pet)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PetResolverBase {
  constructor(
    protected readonly service: PetService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Pet",
    action: "read",
    possession: "any",
  })
  async _petsMeta(
    @graphql.Args() args: PetFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Pet])
  @nestAccessControl.UseRoles({
    resource: "Pet",
    action: "read",
    possession: "any",
  })
  async pets(
    @graphql.Args() args: PetFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Pet[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Pet",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Pet, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Pet",
    action: "read",
    possession: "own",
  })
  async pet(
    @graphql.Args() args: PetFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Pet | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Pet",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Pet)
  @nestAccessControl.UseRoles({
    resource: "Pet",
    action: "create",
    possession: "any",
  })
  async createPet(
    @graphql.Args() args: CreatePetArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Pet> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Pet",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Pet"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Pet)
  @nestAccessControl.UseRoles({
    resource: "Pet",
    action: "update",
    possession: "any",
  })
  async updatePet(
    @graphql.Args() args: UpdatePetArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Pet | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Pet",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Pet"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Pet)
  @nestAccessControl.UseRoles({
    resource: "Pet",
    action: "delete",
    possession: "any",
  })
  async deletePet(@graphql.Args() args: DeletePetArgs): Promise<Pet | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
