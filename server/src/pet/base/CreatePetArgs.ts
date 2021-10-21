import { ArgsType, Field } from "@nestjs/graphql";
import { PetCreateInput } from "./PetCreateInput";

@ArgsType()
class CreatePetArgs {
  @Field(() => PetCreateInput, { nullable: false })
  data!: PetCreateInput;
}

export { CreatePetArgs };
