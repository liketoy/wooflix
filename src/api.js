const BASE_PATH = "https://api.themoviedb.org/3";

export function getMovies() {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=1&region=kr`
  ).then((response) => response.json());
}

export function getPopularMovies() {
  return fetch(
    `${BASE_PATH}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=1&region=kr`
  ).then((response) => response.json());
}

export function getUpcomingMovies() {
  return fetch(
    `${BASE_PATH}/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=1&region=kr`
  ).then((response) => response.json());
}

export function getTopRatedMovies() {
  return fetch(
    `${BASE_PATH}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&page=1&region=kr`
  ).then((response) => response.json());
}

export function getMovie(id) {
  return fetch(
    `${BASE_PATH}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=ko-KR&region=kr`
  ).then((response) => response.json());
}
