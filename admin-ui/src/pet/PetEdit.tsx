import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const PetEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
