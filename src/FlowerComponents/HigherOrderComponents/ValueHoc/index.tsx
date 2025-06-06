import {
  FlowerValue,
  FlowerValueProps,
} from "@flowerforce/flower-react-shared";
import { Flex, Typography } from "antd";
import { ComponentType } from "react";

export type WithFlowerValueProps = Pick<FlowerValueProps, "id">;

// HOC function
export const withFlowerValue = <T extends object>(
  WrappedComponent: ComponentType<T>,
) => {
  return (props: T & WithFlowerValueProps) => {
    const { id, ...restProps } = props;

    return (
      <FlowerValue id={id}>
        {({ value, hidden, id }) => {
          if (hidden) return null;
          return (
            <Flex vertical>
              <Typography.Title>{id}</Typography.Title>
              <WrappedComponent value={value} {...(restProps as T)} />
            </Flex>
          );
        }}
      </FlowerValue>
    );
  };
};
