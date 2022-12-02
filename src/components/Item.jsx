import { Stack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeImagePath } from "../utils";

export default function Item({
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
        bgImage={`linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4) ), url('${makeImagePath(
          backdrop_path
        )}')`}
        backgroundSize="cover"
        backgroundRepeat={"no-repeat"}
        rounded="md"
        w="100%"
        h="100%"
        p={"16"}
      >
        <Text
          color={"whiteAlpha.900"}
          fontWeight="extrabold"
          fontSize={"3xl"}
          wordBreak={"keep-all"}
        >
          {title}
        </Text>
      </Stack>
    </Link>
  );
}

Item.propTypes = {
  id: PropTypes.number,
  adult: PropTypes.bool,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  genre_ids: PropTypes.arrayOf(PropTypes.number),
  original_title: PropTypes.string,
  original_language: PropTypes.string,
  title: PropTypes.string,
  backdrop_path: PropTypes.string,
};
