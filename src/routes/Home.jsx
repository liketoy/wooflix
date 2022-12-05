import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import {
  getMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../api";
import Section from "../components/Section";

export default function Home() {
  const { isLoading, data } = useQuery(["nowPlayingMovies"], getMovies);
  const { isLoading: isPopularLoading, data: popularData } = useQuery(
    ["popularMovies"],
    getPopularMovies
  );
  const { isLoading: isUpcomingLoading, data: upcomingData } = useQuery(
    ["upcomingMovies"],
    getUpcomingMovies
  );
  const { isLoading: isTopRatedLoading, data: topRatedData } = useQuery(
    ["topRatedMovies"],
    getTopRatedMovies
  );
  return (
    <Box>
      <Section
        title="한국어 시리즈 & 영화"
        data={data}
        isLoading={isLoading}
        main
      />
      <Section
        title="오늘 대한민국의 TOP 6 시리즈"
        data={popularData}
        isLoading={isPopularLoading}
      />
      <Section
        title="개봉 예정 영화"
        data={upcomingData}
        isLoading={isUpcomingLoading}
      />
      <Section
        title="평점 높은 명작 영화"
        data={topRatedData}
        isLoading={isTopRatedLoading}
      />
    </Box>
  );
}
