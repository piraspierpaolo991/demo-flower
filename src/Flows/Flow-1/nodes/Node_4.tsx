import { Flex, Typography } from "antd";
import { ButtonReset } from "../../../FlowerComponents/NavigationButtons";
import { Card } from "../../../components/Card";

export const Node_4 = () => {
  return (
    <Flex vertical gap="middle">
      <Card title="End">
        <Flex vertical gap="small" align="center">
          <Typography.Text>Thanks a lot</Typography.Text>
          <ButtonReset />
        </Flex>
      </Card>
    </Flex>
  );
};
