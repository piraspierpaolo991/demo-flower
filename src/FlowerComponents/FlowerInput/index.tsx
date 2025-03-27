import { InputProps } from "antd";
import { Input } from "../../components/Input";
import {
  withFlowerField,
  WithFlowerFieldProps,
} from "../HigherOrderComponents";

type FlowerInputProps = Omit<InputProps, "onChange"> & WithFlowerFieldProps;

const WrappedInput = ({ ...props }: FlowerInputProps) => {
  return <Input {...props} />;
};

export const FlowerInput = withFlowerField(WrappedInput);
