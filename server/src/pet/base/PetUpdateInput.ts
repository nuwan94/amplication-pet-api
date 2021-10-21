import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsJSON, IsEnum } from "class-validator";
import { GraphQLJSONObject } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { EnumPetStatus } from "./EnumPetStatus";
@InputType()
class PetUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

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
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSONObject, {
    nullable: true,
  })
  tags?: JsonValue | null;
}
export { PetUpdateInput };
