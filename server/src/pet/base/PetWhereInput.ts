import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, IsEnum } from "class-validator";
import { EnumPetStatus } from "./EnumPetStatus";
import { JsonNullableFilter } from "../../util/JsonNullableFilter";
@InputType()
class PetWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  name?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumPetStatus,
  })
  @IsEnum(EnumPetStatus)
  @IsOptional()
  @Field(() => EnumPetStatus, {
    nullable: true,
  })
  status?: "Available" | "Pending" | "Sold";

  @ApiProperty({
    required: false,
    type: JsonNullableFilter,
  })
  @Type(() => JsonNullableFilter)
  @IsOptional()
  @Field(() => JsonNullableFilter, {
    nullable: true,
  })
  tags?: JsonNullableFilter;
}
export { PetWhereInput };
