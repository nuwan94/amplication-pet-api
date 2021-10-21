import { Module } from "@nestjs/common";
import { PetModuleBase } from "./base/pet.module.base";
import { PetService } from "./pet.service";
import { PetController } from "./pet.controller";
import { PetResolver } from "./pet.resolver";

@Module({
  imports: [PetModuleBase],
  controllers: [PetController],
  providers: [PetService, PetResolver],
  exports: [PetService],
})
export class PetModule {}
