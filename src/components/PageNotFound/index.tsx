import { useNavigate } from "react-router-dom";
import { Card } from "../Card";
import { Button, Flex, Typography } from "antd";

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Card title="404">
      <Flex vertical align="center" gap="large">
        <Typography.Text>Page not found</Typography.Text>
        <Button onClick={() => navigate("/")}>Return to home</Button>
        <Button onClick={() => navigate(-1)}>Return back</Button>
      </Flex>
    </Card>
  );
};
