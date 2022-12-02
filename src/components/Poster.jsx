import { Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { makeImagePath } from "../utils";

export default function Poster({
  id,
  poster_path,
  backdrop_path,
  release_date,
  title,
}) {
  return (
    <Link to={{ pathname: `/${id}` }}>
      <Stack
        direction={"row"}
        alignItems="flex-end"
        bgImage={`url('${makeImagePath(poster_path)}')`}
        backgroundSize="cover"
        backgroundPosition={"center"}
        backgroundRepeat={"no-repeat"}
        rounded="md"
        w="100%"
        h="100%"
        py="48"
      />
    </Link>
  );
}
