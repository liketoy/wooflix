import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NavItem({ text, pathname }) {
  return (
    <Link to={{ pathname }}>
      <Text color={"whiteAlpha.800"}>{text}</Text>
    </Link>
  );
}
