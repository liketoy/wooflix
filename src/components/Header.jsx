import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header(){
    return <Box 
    display={"flex"} 
    w={"97%"} 
    marginRight={"auto"} 
    marginLeft={"auto"} 
    gap={9} 
    padding={"20px 0px"} 
    position={"sticky"} 
    top={"0"}
    backgroundColor={"blackAlpha.900"}>
            <Link to="/">
                <Box
                    h={"30px"}
                    w={"120px"}
                    backgroundImage="url('Netflix_logo.png')"
                    backgroundPosition={"center"}
                    backgroundSize={"cover"}
                    backgroundRepeat={"no-repeat"}
                />
            </Link>  
            <Box 
                color={"white"} 
                display={"flex"} 
                gap={4} 
                fontSize={"13px"} 
                paddingTop={"5px"}>
                    <p>홈</p>
                    <p>시리즈</p>
                    <p>영화</p>
            </Box>
    </Box>
}