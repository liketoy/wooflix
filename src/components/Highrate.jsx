import { Box, Image, Text, Skeleton, Flex} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Highrate() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=69dc528378613ffdddf3bf5f1b554971&language=ko-KR&page=1&region=kr")
            .then(response => response.json())
            .then((json) => {
                setMovies(json);
                setLoading(false);
            })
    }, [])
    return (
        <Box marginBottom="2rem" marginLeft="4rem" marginRight="4rem" paddingTop="2rem" color="white">
            <Box fontWeight="700" fontSize="1.2rem"
            >평점 높은 명작 영화</Box>
            <Flex gap="2">
                { !loading? movies.results.map((movie, idx)=> {
                    if (idx<6){
                    return (
                        <Link to={{pathname: `${movie.id}`}}>
                            <Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.original_title} objectFit={"cover"} height="100%" width="100%" />
                        </Link>
                    )}
                }) : ''}
            </Flex>
        </Box>
    )
}

export default Highrate;