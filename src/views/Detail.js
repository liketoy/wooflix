import { Box, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { makeImagePath } from '../utils';
import { StarIcon } from '@chakra-ui/icons';


const MovieImage = styled.div`
    width: 100%;
    height: 55vh;
`
const IamgeInner = styled.div`
    position: relative;
    bottom: 10rem;
    left: 2rem;
`

const Flex = styled.div`
    display: flex;
`

const GenreBox = styled.div`
    margin-right: 0.5rem;
    border-radius: 0.2rem;
    color: white;
    font-weight: bold;
    background: grey;
    padding-right: 2px;
    padding-left: 2px;
`

function Detail(){
    const { pk } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState({});

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${pk}?api_key=69dc528378613ffdddf3bf5f1b554971&language=ko-KR&region=kr`).then(response => response.json()).then(json => {
            setMovie(json);
            setLoading(false);
        })
    }, [])



    return (
        <Box marginBottom="2rem" marginLeft="4rem" marginRight="4rem" marginTop="5rem" color="white" height="88.4vh">
            <MovieImage>
                <Image src={movie.backdrop_path?  makeImagePath(movie.backdrop_path): makeImagePath(movie.poster_path)} alt={movie.original_title} objectFit={"cover"} height="55vh" width="100%" opacity="0.7" />
                <IamgeInner>
                    <Flex>
                    {movie.genres ? movie.genres.map(genre => {
                        return (
                            <GenreBox>{genre.name}</GenreBox>
                            )
                        }): ''}
                    </Flex>
                    <Text fontSize="2rem" fontWeight="bold">{movie.title}</Text>
                    <Text>{movie.original_title} - {movie.release_date && movie.release_date.slice(0, 4)}</Text>
                    <Text display="flex" alignItems={"center"}><StarIcon color="yellow" marginRight="2" />{Math.ceil(movie.vote_average * 10) / 10} </Text>
                </IamgeInner>
            </MovieImage>
            <Box height="auto" backgroundColor="#121212">
                <Box marginLeft="2rem">
                    <Box paddingTop="2rem" visibility="hidden">for hidden</Box>
                    <Box display="flex" height="3rem">
                        <Box borderLeft="1px solid red" ></Box>
                        <Text marginLeft="2rem" alignSelf="center" fontStyle="italic" color="gray.300">{movie.tagline}</Text>
                    </Box>
                    <Text marginTop="1rem">줄거리</Text>
                    <Text marginTop="1rem" paddingBottom="2rem" marginRight="2rem">{movie.overview}</Text>
                </Box>
            </Box>
        </Box>

    )
}

export default Detail;