import { Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Title({ text }) {
  return (
    <Heading size={"lg"} color="whiteAlpha.900" mb={4}>
      {text}
    </Heading>
  );
}

Title.propTypes = {
  text: PropTypes.string,
};
