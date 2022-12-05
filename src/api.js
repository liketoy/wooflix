import axios from "axios";

const BASE_PATH = "https://api.themoviedb.org/3/";

const instance = axios.create({
  baseURL: BASE_PATH,
});

export async function getMovies() {
  const response = await fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=1&region=kr`
  );
  const json = await response.json();
  return json;
}

export async function getPopularMovies() {
  const response = await instance.get(
    `movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=1&region=kr`
  );
  return response.data;
}

export const getUpcomingMovies = () =>
  instance
    .get(
      `movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=1&region=kr`
    )
    .then((response) => response.data);

export const getTopRatedMovies = () =>
  instance
    .get(
      `movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=1&region=kr`
    )
    .then((response) => response.data);

export const getMoive = ({ queryKey }) => {
  const [_, id] = queryKey;
  return instance
    .get(
      `movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&region=kr`
    )
    .then((response) => response.data);
};
