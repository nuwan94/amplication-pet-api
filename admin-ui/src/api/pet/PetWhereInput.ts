import { StringFilter } from "../../util/StringFilter";
import { JsonNullableFilter } from "../../util/JsonNullableFilter";

export type PetWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  status?: "Available" | "Pending" | "Sold";
  tags?: JsonNullableFilter;
};
