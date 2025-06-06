import { FlowerFieldProps } from "@flowerforce/flower-react-form";
import { FlowerValue } from "@flowerforce/flower-react-shared";
// import { ReactNode } from "react";

export const ValueFlower = ({
  id,
  rules,
}: Pick<FlowerFieldProps, "id" | "rules">) => {
  return (
    <FlowerValue id={id} rules={rules}>
      {({ value }) => <span>{value}</span>}
    </FlowerValue>
  );
};
