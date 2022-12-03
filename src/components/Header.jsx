import { HStack, Box, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <HStack backgroundColor={"black"} padding="1rem" zIndex="1" position="fixed" top="0" width="100%">
            <Link to={{pathname: '/'}}>
                <Box w="8rem" marginLeft="3rem">
                    <Image src="Netflix_logo.png" alt="Netflix_logo" />
                </Box>
            </Link>
            <Box marginLeft="60rem" display={"flex"}>
                <Link to={{pathname: '/'}}>
                    <Box color="grey" marginLeft="2rem">
                        홈
                    </Box>
                </Link>
                <Link to={{pathname: '/'}}>
                    <Box color="grey" marginLeft="1rem">
                        시리즈
                    </Box>
                </Link>
                <Link to={{pathname: '/'}}>
                    <Box color="grey" marginLeft="1rem">
                        영화
                    </Box>
                </Link>
            </Box>
        </HStack>
    )
}