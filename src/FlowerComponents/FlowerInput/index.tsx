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

// export const FlowerInput = ({ id, ...restProps }: FlowerInputProps) => {
//   return (
//     <FlowerField id={id}>
//       {({ value, onChange }) => (
//         <Input {...restProps} value={value} onChange={onChange} />
//       )}
//     </FlowerField>
//   );
// };
