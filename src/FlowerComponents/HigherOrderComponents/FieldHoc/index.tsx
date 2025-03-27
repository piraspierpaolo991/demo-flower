import { FlowerField, FlowerFieldProps } from "@flowerforce/flower-react-form";
import { Flex, Typography } from "antd";
import { ComponentType } from "react";

export type WithFlowerFieldProps = Pick<
  FlowerFieldProps,
  "id" | "validate" | "defaultValue"
>;

// HOC function
export const withFlowerField = <T extends object>(
  WrappedComponent: ComponentType<T>,
) => {
  return (props: T & WithFlowerFieldProps) => {
    const { id, validate, defaultValue, ...restProps } = props;

    return (
      <FlowerField id={id} validate={validate} defaultValue={defaultValue}>
        {({
          value,
          onChange,
          hasError,
          errors,
          touched,
          onBlur,
          onFocus,
          // isSubmitted,
        }) => (
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
      </FlowerField>
    );
  };
};
