import { Card } from "../Card";
import { Flex, Typography } from "antd";

type Geo = { lat: string; lng: string };

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type ListItemProps = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: Company;
  address: Address;
};

export const ListItem = ({
  name,
  email,
  phone,
  website,
  address,
  company,
}: ListItemProps) => {
  return (
    <Card
      wide
      variant="outlined"
      title={`${name} - ${address.city} (${address.street})`}
    >
      <Flex gap="middle" justify="space-between">
        Phone Number:
        <Typography.Paragraph>{phone}</Typography.Paragraph>
      </Flex>
      <Flex gap="middle" justify="space-between">
        Email:
        <Typography.Paragraph>{email}</Typography.Paragraph>
      </Flex>
      <Flex gap="middle" justify="space-between">
        Website:
        <Typography.Paragraph>{website}</Typography.Paragraph>
      </Flex>
      <Flex gap="middle" justify="space-between">
        Company:
        <Typography.Paragraph>{company.name}</Typography.Paragraph>
      </Flex>
    </Card>
  );
};
