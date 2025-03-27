import { Flex, Card } from "antd";
import { FlowerValue } from "@flowerforce/flower-react-shared";
import { ButtonPrev } from "../../../FlowerComponents/NavigationButtons";

export const EndNode = () => {
  return (
    <Flex vertical gap="middle">
      <Card title="Welcome">
        <Flex vertical gap="small" align="center">
          <FlowerValue id="username">
            {({ value }) => <span>Bentornato, {value}</span>}
          </FlowerValue>
          <ButtonPrev />
        </Flex>
      </Card>
    </Flex>
  );
};
