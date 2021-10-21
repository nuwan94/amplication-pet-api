import { PetWhereInput } from "./PetWhereInput";
import { PetOrderByInput } from "./PetOrderByInput";

export type PetFindManyArgs = {
  where?: PetWhereInput;
  orderBy?: PetOrderByInput;
  skip?: number;
  take?: number;
};
