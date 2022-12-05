import { Box } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  getMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../api";
import Section from "../components/Section";

export default function Home() {
  // useQuery를 쓸때 중요한 점
  // 1. [key]값을 설정해준다. (key값은 중복되선 안된다.)
  // 2. 두번째 인수 자리에 api를 호출하는 함수를 쓴다.(함수에()를 붙이진 않는다.)
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
