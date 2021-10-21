import { JsonValue } from "type-fest";

export type Pet = {
  createdAt: Date;
  id: string;
  name: string;
  photos: JsonValue | null;
  status?: "Available" | "Pending" | "Sold";
  tags: JsonValue | null;
  updatedAt: Date;
};
