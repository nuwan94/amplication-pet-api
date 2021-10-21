import { ArgsType, Field } from "@nestjs/graphql";
import { PetWhereUniqueInput } from "./PetWhereUniqueInput";

@ArgsType()
class PetFindUniqueArgs {
  @Field(() => PetWhereUniqueInput, { nullable: false })
  where!: PetWhereUniqueInput;
}

export { PetFindUniqueArgs };
