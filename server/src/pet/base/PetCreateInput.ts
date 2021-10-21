import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsJSON, IsOptional, IsEnum } from "class-validator";
import { GraphQLJSONObject } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { EnumPetStatus } from "./EnumPetStatus";
@InputType()
class PetCreateInput {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  photos?: JsonValue | null;

  @ApiProperty({
    required: true,
    enum: EnumPetStatus,
  })
  @IsEnum(EnumPetStatus)
  @Field(() => EnumPetStatus)
  status!: "Available" | "Pending" | "Sold";

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  tags?: JsonValue | null;
}
export { PetCreateInput };
