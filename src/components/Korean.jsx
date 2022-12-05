import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Grid, GridItem } from '@chakra-ui/react'
import { makeImagePath } from "../utils";
import { Text } from "@chakra-ui/react";

function KoreanSeries(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const grid = (condition1, condition2, height) => {
        return movies && movies
        .map((movie,index)=>( index >= condition1  && index < condition2 &&
            <Link to={{pathname: `${movie.id}`}}>
                <GridItem 
                key={movie.id} 
                backgroundImage={makeImagePath(movie.backdrop_path)} 
                h={height}
                display={"flex"}
                alignItems={"end"}
                backgroundSize={'cover'}
                backgroundPosition={'center'} 
                backgroundRepeat={"no-repeat"}
                paddingLeft={"20px"}
                paddingBottom={"70px"}
                fontSize={"20px"}
                fontWeight={"bold"}
                borderRadius={"md"}
                >
                {movie.title}</GridItem>
            </Link> 
        ))
    }

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=69dc528378613ffdddf3bf5f1b554971&language=ko-KR&page=1&region=kr")
        .then((response)=>response.json())
        .then((json)=>{setMovies(json.results);setLoading(false)})
},[]);
    return (
        <Box 
        w={"95%"} 
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={"20px"}
        >
            <Text marginTop={"20px"} marginBottom={"10px"} fontSize={"18px"} fontWeight={"bold"}>한국어 시리즈 & 영화</Text>
            {loading ? <strong>Loading...</strong> : 
            <Grid gap={"2"}>
                <Grid templateColumns='2fr 1fr 1fr' gap={"2"}>
                {grid(0,3,"270px")}
                </Grid>
                <Grid templateColumns='repeat(4,1fr)' gap={"2"}>
                {grid(3,7,"200px")}
                </Grid>
            </Grid>}
        </Box>
    )
}

export default KoreanSeries;