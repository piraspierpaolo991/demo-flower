import { Flex, Typography, Divider, Input } from "antd";
import {
  ButtonNext,
  ButtonPrev,
} from "../../FlowerComponents/NavigationButtons";

import { Card } from "../../../components/Card";
import { FlowerField } from "@flowerforce/flower-react";

export const Node_2 = () => {
  return (
    <Flex vertical gap="middle">
      <Card title="Flowcharts">
        <Flex vertical gap="small" align="center">
          <Typography.Text>
            Flower already worked to pass between nodes, simply as that
          </Typography.Text>
          <Typography.Text>
            But Flower is more than that, lets see a little bit more
          </Typography.Text>
          <Typography.Text>
            For example, lets pretend that we have a flowchart that has a
            success node and a error node based on a condition for example, if
            the name is "john" we go to the success node
          </Typography.Text>
          <Divider />
          <FlowerField id="name">
            {({ onChange, value, id }) => (
              <Flex vertical gap="small">
                <Typography.Text>{id}</Typography.Text>
                <Input
                  type="text"
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                />
              </Flex>
            )}
          </FlowerField>
          <Flex gap="small">
            <ButtonPrev />
            <ButtonNext />
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};
