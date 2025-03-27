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
        {({ value, onChange, hasError, errors, touched, onBlur, onFocus }) => (
          <Flex vertical>
            <Typography.Title>{id}</Typography.Title>
            <WrappedComponent
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              {...(restProps as T)}
            />
            {hasError && errors && touched && (
              <Typography.Text style={{ color: "red" }}>
                {errors[0]}
              </Typography.Text>
            )}
          </Flex>
        )}
      </FlowerValue>
    );
  };
};
