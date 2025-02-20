import { Flex, Card, Typography, Divider } from "antd";
import { ButtonNext } from "../../FlowerComponents/NavigationButtons";

export const Node_2_Success = () => {
  return (
    <Flex vertical gap="middle">
      <Card title="Success">
        <Flex vertical gap="small" align="center">
          <Typography.Text>
            Good, lets see another functionality!
          </Typography.Text>
          <Typography.Text>
            Flower React provides a bunch of different components that could
            wrap your styled components
          </Typography.Text>
          <Typography.Text>
            But provides also a FlowerAction component that could be used as a
            single node that fires a callback (such as an api call) and goes on
            error or success with rules
          </Typography.Text>
          <Divider />
          <Typography.Text>
            In the next node there's a action node that calls an api mock, lets
            try
          </Typography.Text>
          <ButtonNext />
        </Flex>
      </Card>
    </Flex>
  );
};
