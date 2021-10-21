import { registerEnumType } from "@nestjs/graphql";

export enum EnumPetStatus {
  Available = "Available",
  Pending = "Pending",
  Sold = "Sold",
}

registerEnumType(EnumPetStatus, {
  name: "EnumPetStatus",
});
