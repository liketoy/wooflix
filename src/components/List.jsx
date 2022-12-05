import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Grid } from '@chakra-ui/react'
import { makeImagePath } from "../utils";
import { Link } from "react-router-dom";
import { makeApiPath } from "../utils";
import { Text } from "@chakra-ui/react";

export default function List({typeapi , title}){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        fetch(makeApiPath(typeapi))
        .then((response)=>response.json())
        .then((json)=>{setMovies(json.results);setLoading(false);})
},[]);

    return <Box w={"95%"} 
    marginLeft={"auto"}
    marginRight={"auto"}
    marginTop={"20px"}>
        <Text marginTop={"20px"} marginBottom={"10px"} fontSize={"18px"} fontWeight={"bold"}>{title}</Text>
        {loading ? <strong>Loading...</strong> : <Grid templateColumns='repeat(6, 1fr)' gap={"2"}>
            {movies && movies
            .map((movie, index)=>( index < 6 &&
                    <Link to={{pathname: `${movie.id}`}}> 
                        <Box 
                            id={index}
                            key={movie.id} 
                            backgroundImage={makeImagePath(movie.poster_path
                                )} 
                            h={'310px'}
                            backgroundSize={'cover'}
                            backgroundPosition={'center'} 
                            backgroundRepeat={"no-repeat"}
                            borderRadius={"md"}
                        >
                        </Box>
                    </Link>
                ))
                }
            </Grid>}
            
    </Box>
}