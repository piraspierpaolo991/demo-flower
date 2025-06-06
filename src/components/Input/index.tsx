import { Input as AntInput, InputProps } from "antd";

export const Input = (
  props: Omit<InputProps, "onChange"> & { onChange?: (e: string) => void },
) => {
  return (
    <AntInput {...props} onChange={(e) => props?.onChange?.(e.target.value)} />
  );
};
