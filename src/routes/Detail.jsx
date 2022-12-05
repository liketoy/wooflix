import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@chakra-ui/react"
import Header from "../components/Header"
import { makeImagePath } from "../utils"
import { Text } from "@chakra-ui/react"
import { Divider } from '@chakra-ui/react'
import { Stack } from "@chakra-ui/react"

export default function Detail(){

    const {pk} = useParams()
    console.log(pk)
    const [loading, setLoading] = useState(true)
    const [movie,setMovies]=useState({})
    
    useEffect(()=>{fetch(`https://api.themoviedb.org/3/movie/${pk}?api_key=69dc528378613ffdddf3bf5f1b554971&language=ko-KR&region=kr`)
    .then((response)=>response.json())
    .then((json)=>{
        setMovies(json);
        setLoading(false);
        console.log(json)});},[pk]);

    const year = movie.release_date +""
    const star = movie.vote_average +""

    return <Box 
        h={"100vh"}
        backgroundColor={"blackAlpha.900"}
        color={"white"}>
        
        <Header />

        {loading ? <strong>Loading...</strong>:null}
        
        <Box
        w={"95%"}
        h={"500px"}
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={"20px"}
        backgroundImage={makeImagePath(movie.backdrop_path)}
        backgroundSize={'cover'}
        backgroundPosition={'center'} 
        backgroundRepeat={"no-repeat"}
        position={"relative"}>

            <Box position={"absolute"} bottom={"0px"}>
                
                <Box display={"flex"} gap={2} paddingLeft={"20px"}>
                    {movie.genres && movie.genres.map((genre)=>{
                        return <Box backgroundColor={"whiteAlpha.500"} padding={"2px"}>{genre.name}</Box>
                    })}
                </Box>
                
                <Box paddingLeft={"20px"}>
                    <Text fontSize={"3xl"} fontWeight={"bold"}>{movie.title}</Text>
                    <Text fontSize={"14px"} color={"whiteAlpha.700"}>{movie.original_title}-{year.slice(0,4)}</Text>
                    <Text>⭐{star.slice(0,3)}</Text>
                </Box>
                
                
                <Box backgroundColor={"blackAlpha.800"} marginTop={"20px"}>
                    <Stack direction='row' h='100px' p={4} paddingLeft={"20px"}>
                        <Divider orientation='vertical' borderColor={"red"} marginRight={"30px"}/>
                        <Text 
                            fontStyle={"italic"} 
                            fontSize={"1xs"} 
                            lineHeight={"70px"}
                            >{movie.tagline}</Text>
                    </Stack>
                    <Box paddingLeft={"20px"}>
                        <Text>줄거리</Text>
                        <Text fontSize={"13px"} marginTop={"20px"} paddingBottom={"20px"}>{movie.overview}</Text>
                    </Box>
                    
                </Box>
            
            </Box>            
        </Box>
    </Box>
}