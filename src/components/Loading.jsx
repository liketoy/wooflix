import { Spinner, Stack } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Stack direction={"row"} justifyContent="center" alignItems={"center"}>
      <Spinner color={"white"} />
    </Stack>
  );
}
