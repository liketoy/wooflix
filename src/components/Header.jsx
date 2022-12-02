import { Box, Image, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

export default function Header() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      h={"70px"}
      spacing={12}
      position="sticky"
      top={0}
      backgroundColor="black"
    >
      <Link to={{ pathname: "/" }}>
        <Box w="92.5px">
          <Image src="./Netflix_logo.png" w="100%" />
        </Box>
      </Link>
      <Stack direction={"row"} spacing={4} alignItems="center">
        <NavItem text={"홈"} pathname="/" />
        <NavItem text={"시리즈"} pathname="/" />
        <NavItem text={"영화"} pathname="/" />
      </Stack>
    </Stack>
  );
}
