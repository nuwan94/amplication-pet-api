import { PrismaService } from "nestjs-prisma";
import { Prisma, Pet } from "@prisma/client";

export class PetServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PetFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PetFindManyArgs>
  ): Promise<number> {
    return this.prisma.pet.count(args);
  }

  async findMany<T extends Prisma.PetFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PetFindManyArgs>
  ): Promise<Pet[]> {
    return this.prisma.pet.findMany(args);
  }
  async findOne<T extends Prisma.PetFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PetFindUniqueArgs>
  ): Promise<Pet | null> {
    return this.prisma.pet.findUnique(args);
  }
  async create<T extends Prisma.PetCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PetCreateArgs>
  ): Promise<Pet> {
    return this.prisma.pet.create<T>(args);
  }
  async update<T extends Prisma.PetUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PetUpdateArgs>
  ): Promise<Pet> {
    return this.prisma.pet.update<T>(args);
  }
  async delete<T extends Prisma.PetDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PetDeleteArgs>
  ): Promise<Pet> {
    return this.prisma.pet.delete(args);
  }
}
