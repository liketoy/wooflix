import { Box, Image, Text, Skeleton} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GridBox = styled.div`
    display: grid;
    grid-template-rows: 15rem 10rem;
    grid-template-columns: 25% 25% 25% 25%;
    row-gap: 0.2rem;
    column-gap: 0.2rem
`
const MovieItem = styled.div`
    grid-column: ${props => props.big && '1 / 3'}
`



function KoreaSeries() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=69dc528378613ffdddf3bf5f1b554971&language=ko-KR&page=1&region=kr")
            .then(response => response.json())
            .then((json) => {
                setMovies(json);
                setLoading(false);
            })
    }, [])

    // 이미지 url https://image.tmdb.org/t/p/w500/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg
    return (
        <Box marginBottom="2rem" marginLeft="4rem" marginRight="4rem" paddingTop="5rem" color="white">
            <Box
                fontWeight="700" fontSize="1.2rem"
            >한국어 시리즈 & 영화</Box>
            <GridBox>
                { !loading ? movies.results.map((movie, idx) => {
                    const big = idx === 0 ? true : false;
                    if (idx < 7) {
                        return (
                            <MovieItem big={big}>
                                <Link to={{pathname: `${movie.id}`}}>
                                    <Image src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.original_title} objectFit={"cover"} height="100%" width="100%" />
                                    <Text position="relative" bottom="4rem" left="2rem" fontWeight="bolder">{movie.title}</Text>
                                </Link>
                            </MovieItem>
                        )
                    }
                }) : <Skeleton/>}
            </GridBox>
        </Box>
    )
}

export default KoreaSeries;