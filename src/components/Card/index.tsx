import { CSSProperties, PropsWithChildren } from "react";
import { StyledCard } from "./styled";

type CardProps = PropsWithChildren<{
  title?: string;
  variant?: "borderless" | "outlined";
  color?: CSSProperties;
  wide?: boolean;
}>;

export const Card = ({
  title,
  variant = "borderless",
  children,
  wide,
}: CardProps) => {
  return (
    <StyledCard wide={wide} title={title} variant={variant}>
      {children}
    </StyledCard>
  );
};
