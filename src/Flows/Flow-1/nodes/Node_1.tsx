import { Flex, Typography } from "antd";
import { ButtonNext } from "../../FlowerComponents/NavigationButtons";
import { Card } from "../../../components/Card";

export const Node_1 = () => {
  return (
    <Flex vertical gap="middle">
      <Card title="Welcome">
        <Flex vertical gap="small" align="center">
          <Typography.Text>Welcome to this flower react demo!</Typography.Text>
          <Typography.Text>
            Flower React is a library that allows both developers and project
            managers to have a simple and complete perspective over a project
          </Typography.Text>
          <Typography.Text>
            Thanks to a easy-to-use interface, you can create a flowchart
            quickly readable and editable from everyone!
          </Typography.Text>
          <Typography.Text>Click the next button to continue</Typography.Text>
          <ButtonNext />
        </Flex>
      </Card>
    </Flex>
  );
};
