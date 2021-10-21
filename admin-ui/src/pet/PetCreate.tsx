import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const PetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <div />
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "Available", value: "Available" },
            { label: "Pending", value: "Pending" },
            { label: "Sold ", value: "Sold" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <div />
      </SimpleForm>
    </Create>
  );
};
