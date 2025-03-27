import { useStore } from "react-redux";
import { Flex, Typography } from "antd";
import { FlowerInput } from "../../../FlowerComponents/FlowerInput";
import { FlowerSelect } from "../../../FlowerComponents/FlowerSelect";
import { ButtonNext } from "../../../FlowerComponents/NavigationButtons";
import { Card } from "../../../components/Card";

const GENDER_OPTIONS = [
  {
    value: "male",
    label: "M",
  },
  {
    value: "female",
    label: "F",
  },
  {
    value: "other",
    label: "other",
  },
];

export const StartNode = () => {
  const store = useStore();
  console.log(store.getState());
  return (
    <Flex vertical gap="middle">
      <Card title="Welcome">
        <Flex vertical gap="small" align="center">
          <Typography.Text>Login Form</Typography.Text>
          <FlowerInput
            id="username"
            validate={[
              {
                message: "* Required",
                rules: { $and: [{ username: { $exists: true } }] },
              },
            ]}
          />
          <FlowerInput
            id="password"
            validate={[
              {
                message: "* Must contain at least 6 characters",
                rules: { $and: [{ password: { $strGte: 6 } }] },
              },
            ]}
          />
          <FlowerInput
            id="email"
            validate={[
              {
                message: '* Must contain "@"',
                rules: {
                  $and: [
                    {
                      email: {
                        $regex:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      },
                    },
                  ],
                },
              },
            ]}
          />
          <FlowerSelect
            id="gender"
            validate={[
              {
                message: "* Required",
                rules: { $and: [{ gender: { $exists: true } }] },
              },
            ]}
            options={GENDER_OPTIONS}
          />
          <ButtonNext />
        </Flex>
      </Card>
    </Flex>
  );
};
