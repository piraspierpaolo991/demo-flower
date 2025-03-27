import { Flex, Typography } from "antd";
import { FlowerInput } from "../../../FlowerComponents/FlowerInput";
import { ButtonNext } from "../../../FlowerComponents/NavigationButtons";
import { Card } from "../../../components/Card";

export const PasswordNode = () => {
  return (
    <Flex vertical gap="middle">
      <Card title="Welcome">
        <Flex vertical gap="small" align="center">
          <Typography.Text>Login Form</Typography.Text>
          <FlowerInput
            id="password"
            validate={[
              {
                message: "* Must contain at least 6 characters",
                rules: { $and: [{ password: { $regex: /(?=.*[A-Z])/ } }] },
              },
            ]}
          />
          <FlowerInput
            id="repeat-password"
            validate={[
              {
                message: "* Must be equal",
                rules: {
                  $and: [
                    {
                      "repeat-password": {
                        $eq: "$ref:password",
                      },
                    },
                  ],
                },
              },
            ]}
          />
          <ButtonNext />
        </Flex>
      </Card>
    </Flex>
  );
};
