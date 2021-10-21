import { ArgsType, Field } from "@nestjs/graphql";
import { PetWhereUniqueInput } from "./PetWhereUniqueInput";
import { PetUpdateInput } from "./PetUpdateInput";

@ArgsType()
class UpdatePetArgs {
  @Field(() => PetWhereUniqueInput, { nullable: false })
  where!: PetWhereUniqueInput;
  @Field(() => PetUpdateInput, { nullable: false })
  data!: PetUpdateInput;
}

export { UpdatePetArgs };
