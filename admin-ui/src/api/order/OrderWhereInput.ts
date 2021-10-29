import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OrderWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
};
