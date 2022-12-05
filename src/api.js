import axios from 'axios';


// axios 사용x async 사용

// const BASE_URL = "https://api.themoviedb.org/3/";

// export async function getNowPlayingMovies() {
//     const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`);
//     const json = await response.json();
//     return json
// }


// axios 사용

// 밑 3개는 다 같은 의미들

const BASE_URL = "https://api.themoviedb.org/3/";

const instance = axios.create({
    baseURL: BASE_URL
})

export async function getNowPlayingMovies() {
    const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`);
    const json = await response.json();
    return json
}

export async function getPopularMovies(){
    const response = await instance.get(`movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`)

    return response.data
}

export const getUpcomingMovies = () => instance.get(`movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`).then(response => response.data);