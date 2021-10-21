import { SortOrder } from "../../util/SortOrder";

export type PetOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  photos?: SortOrder;
  status?: SortOrder;
  tags?: SortOrder;
  updatedAt?: SortOrder;
};
