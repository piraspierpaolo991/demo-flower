import { SelectProps, Select } from "antd";
import {
  withFlowerField,
  WithFlowerFieldProps,
} from "../HigherOrderComponents";

type FlowerSelectProps = SelectProps & WithFlowerFieldProps;

const WrappedInput = ({ ...props }: FlowerSelectProps) => {
  return <Select {...props} />;
};

export const FlowerSelect = withFlowerField(WrappedInput);
