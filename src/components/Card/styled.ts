import styled from "@emotion/styled";
import { Card } from "antd";

export const StyledCard = styled(Card)<{ wide?: boolean }>`
  background-color: ${({ theme }) => theme.colors.primary.light};
  width: ${({ wide }) => (wide ? "100%" : "auto")};
`;
