import { JsonValue } from "type-fest";

export type PetCreateInput = {
  name: string;
  photos?: JsonValue | null;
  status: "Available" | "Pending" | "Sold";
  tags?: JsonValue | null;
};
