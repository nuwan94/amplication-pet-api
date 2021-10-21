import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PetWhereInput } from "./PetWhereInput";
import { Type } from "class-transformer";
import { PetOrderByInput } from "./PetOrderByInput";

@ArgsType()
class PetFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PetWhereInput,
  })
  @Field(() => PetWhereInput, { nullable: true })
  @Type(() => PetWhereInput)
  where?: PetWhereInput;

  @ApiProperty({
    required: false,
    type: PetOrderByInput,
  })
  @Field(() => PetOrderByInput, { nullable: true })
  @Type(() => PetOrderByInput)
  orderBy?: PetOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PetFindManyArgs };
