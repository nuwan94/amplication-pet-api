import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PetService } from "./pet.service";
import { PetControllerBase } from "./base/pet.controller.base";

@swagger.ApiTags("pets")
@common.Controller("pets")
export class PetController extends PetControllerBase {
  constructor(
    protected readonly service: PetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
