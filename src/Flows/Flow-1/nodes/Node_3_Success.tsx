import { Flex, Typography, Divider } from "antd";
import {
  ButtonNext,
  ButtonPrev,
} from "../../FlowerComponents/NavigationButtons";

import { ListItem } from "../../../components/ListItem";
import { Card } from "../../../components/Card";
import { FlowerValue } from "@flowerforce/flower-react";

export const Node_3_Success = () => {
  return (
    <Flex vertical gap="middle">
      <Card title="Action Result Api" variant="outlined">
        <Flex vertical gap="middle" align="center">
          <Typography.Text>Great! Lets look at datas</Typography.Text>
          <FlowerValue id="apiCall">
            {({ value }) => value.map(ListItem)}
          </FlowerValue>
        </Flex>
        <Divider />
        <Flex gap="middle" justify="center">
          <ButtonPrev />
          <ButtonNext />
        </Flex>
      </Card>
    </Flex>
  );
};
