import { Flex, Card } from "antd";
import { ButtonPrev } from "../../../FlowerComponents/NavigationButtons";
import { FlowerField } from "@flowerforce/flower-react-form";
import { ValueFlower } from "../../../FlowerComponents/FlowerValue";

export const EndNode = () => {
  return (
    <Flex vertical gap="middle">
      <Card title="Welcome">
        <Flex vertical gap="small" align="center">
          <ValueFlower id="username" rules={[{ ciao: { $eq: true } }]} />
          <FlowerField id="aaaa" rules={[{ a: { $eq: "t" } }]}>
            {({ value }) => <span>{value}</span>}
          </FlowerField>
          <ButtonPrev />
        </Flex>
      </Card>
    </Flex>
  );
};
