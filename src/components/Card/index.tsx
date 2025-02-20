import { PropsWithChildren } from "react";
import { Card as AntdCard } from "antd";

type CardProps = PropsWithChildren<{
  title?: string;
  variant?: "borderless" | "outlined";
}>;

export const Card = ({
  title,
  variant = "borderless",
  children,
}: CardProps) => {
  return (
    <AntdCard title={title} variant={variant}>
      {children}
    </AntdCard>
  );
};
