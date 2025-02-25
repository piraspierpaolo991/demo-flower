import { Flex, Typography } from "antd";
import { ButtonPrev } from "../../FlowerComponents/NavigationButtons";
import { Card } from "../../../components/Card";

export const Node_2_Error = () => {
  return (
    <Flex vertical gap="middle">
      <Card title="Error">
        <Flex vertical gap="small" align="center">
          <Typography.Text>
            Oops, did you digit a different name
          </Typography.Text>
          <Typography.Text>Go back and try again!</Typography.Text>
          <ButtonPrev />
        </Flex>
      </Card>
    </Flex>
  );
};
