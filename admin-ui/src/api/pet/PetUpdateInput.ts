import { JsonValue } from "type-fest";

export type PetUpdateInput = {
  name?: string;
  photos?: JsonValue | null;
  status?: "Available" | "Pending" | "Sold";
  tags?: JsonValue | null;
};
