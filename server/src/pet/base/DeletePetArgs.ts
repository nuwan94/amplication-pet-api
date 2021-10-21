import { ArgsType, Field } from "@nestjs/graphql";
import { PetWhereUniqueInput } from "./PetWhereUniqueInput";

@ArgsType()
class DeletePetArgs {
  @Field(() => PetWhereUniqueInput, { nullable: false })
  where!: PetWhereUniqueInput;
}

export { DeletePetArgs };
