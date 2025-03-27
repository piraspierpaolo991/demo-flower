import { Flex, Typography } from "antd";
import { ButtonPrev } from "../../../FlowerComponents/NavigationButtons";
import { Card } from "../../../components/Card";

export const Node_3_Error = () => {
  return (
    <Flex vertical gap="middle">
      <Card title="Action">
        <Flex vertical gap="small" align="center">
          <Typography.Text>Something went wrong...</Typography.Text>
          <ButtonPrev />
        </Flex>
      </Card>
    </Flex>
  );
};
