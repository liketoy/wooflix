import PropTypes from "prop-types";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Poster from "./Poster";
import Title from "./Title";
import Item from "./Item";
import Loading from "./Loading";

export default function Section({ data, isLoading, main = false, title }) {
  return (
    <Box as="section" py={10}>
      <Title text={title} />
      {isLoading ? (
        <Loading />
      ) : main ? (
        <Grid
          templateRows={"repeat(3, 1fr)"}
          templateColumns={"repeat(4, 1fr)"}
          gap={2}
        >
          {data.slice(0, 3).map((movie, i) => (
            <GridItem key={movie.id} rowSpan={2} colSpan={i === 0 ? 2 : 1}>
              <Item {...movie} />
            </GridItem>
          ))}
          {data.slice(3, 7).map((movie) => (
            <GridItem key={movie.id}>
              <Item {...movie} />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Grid templateColumns={"repeat(6, 1fr)"} gap="2">
          {data.slice(0, 6).map((movie) => (
            <GridItem key={movie.id}>
              <Poster {...movie} />
            </GridItem>
          ))}
        </Grid>
      )}
    </Box>
  );
}

Section.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  main: PropTypes.bool,
  title: PropTypes.string.isRequired,
};
