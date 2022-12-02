import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  getMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../api";
import Section from "../components/Section";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPopularLoading, setIsPopularLoading] = useState(true);
  const [isUpcomingLoading, setIsUpcomingLoading] = useState(true);
  const [isTopRatedLoading, setIsTopRatedLoading] = useState(true);
  const [data, setData] = useState([]);
  const [popularData, setPopularData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);
  const [topRatedData, setTopRatedData] = useState([]);
  useEffect(() => {
    getMovies().then((json) => {
      setData(json.results);
      setIsLoading(false);
    });
    getPopularMovies().then((json) => {
      setPopularData(json.results);
      setIsPopularLoading(false);
    });
    getUpcomingMovies().then((json) => {
      setUpcomingData(json.results);
      setIsUpcomingLoading(false);
    });
    getTopRatedMovies().then((json) => {
      setTopRatedData(json.results);
      setIsTopRatedLoading(false);
    });
  }, []);
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
