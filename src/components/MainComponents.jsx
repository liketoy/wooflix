import { Box, Image, Text, Skeleton, Flex, Grid, GridItem, Spinner} from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const repeat = [1,2,3,4,5,6]

function MainComponents(){
    const [movies, setMovies] = useState({
        now_playing: undefined,
        popular: undefined,
        upcoming: undefined,
        top_rated: undefined
    })
    const {now_playing, popular, upcoming, top_rated} = movies;

    const [loadings, setLoadings] = useState({
        loading1: true,
        loading2: true,
        loading3: true,
        loading4: true
    })

    const {loading1, loading2, loading3, loading4 } = loadings;

    useEffect(() => {
        axios.all([
            axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=69dc528378613ffdddf3bf5f1b554971&language=ko-KR&page=1&region=kr'),
            axios.get('https://api.themoviedb.org/3/movie/popular?api_key=69dc528378613ffdddf3bf5f1b554971&language=ko-KR&page=1&region=kr'),
            axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=69dc528378613ffdddf3bf5f1b554971&language=ko-KR&page=1&region=kr'),
            axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=69dc528378613ffdddf3bf5f1b554971&language=ko-KR&page=1&region=kr')
        ]).then(
            axios.spread((res1, res2, res3, res4) => {
                setMovies({
                    now_playing: res1.data,
                    popular: res2.data,
                    upcoming: res3.data,
                    top_rated: res4.data
                })
                setLoadings({
                    loading1: false,
                    loading2: false,
                    loading3: false,
                    loading4: false
                })
            })
        );

    }, []);


    return (
        <Box marginTop="6rem" marginLeft="4rem" marginBottom="2rem" marginRight="4rem">
            <Text fontWeight="400" color="white" fontSize="1.5rem" marginBottom="1rem">한국어 시리즈 & 영화</Text>
            <Grid
            templateRows="22rem 13rem"
            templateColumns="25% 25% 25% 25%"
            gap="1"
            >
                {loading1
                ? 
                <>
                    <GridItem rowSpan={1} colSpan={2} position="relative">
                        <Skeleton height="100%" width="100%" />
                        <Spinner position="absolute" left="50%" top="50%"/>
                    </GridItem>
                    {repeat.map(()=> {
                        return(
                        <GridItem colSpan={1} position="relative">
                            <Skeleton height="100%" width="100%" />
                            <Spinner position="absolute" left="50%" top="50%"/>
                        </GridItem>
                    )})}
                </>
                :
                now_playing.results.map( (movie, idx) => {
                    if( idx === 0) {
                        return (
                            <GridItem rowSpan={1} colSpan={2} position="relative">
                                <Link to={{pathname: `${movie.id}`}}>
                                    <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.original_title} objectFit={"cover"} height="100%" width="100%" />
                                    <Text position="absolute" left="4rem" bottom="3rem" color="white" fontWeight="bold" fontSize="1.25rem">{movie.title}</Text>
                                </Link>
                            </GridItem>
                        )
                    }
                    else if(idx < 7) {
                        return (
                        <GridItem colSpan={1} position="relative">
                            <Link to={{pathname: `${movie.id}`}}>
                                <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.original_title} objectFit={"cover"} height="100%" width="100%" />
                                <Text position="absolute" left="4rem" bottom="5rem" color="white" fontWeight="bold" fontSize="1.25rem">{movie.title}</Text>
                            </Link>
                        </GridItem>
                        )
                    }
                })}
            </Grid>
        </Box>
    )
};

export default MainComponents;