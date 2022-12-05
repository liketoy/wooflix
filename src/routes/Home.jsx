import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import KoreanSeries from "../components/Korean";
import List from "../components/List";

export default function Home(){
    return (
        <Box backgroundColor={"blackAlpha.900"} color={"white"}>
            <Header />
            <KoreanSeries />
            <List typeapi="popular" title="오늘 대한민국의 TOP 6 시리즈" />
            <List typeapi="upcoming" title="개봉 예정 영화" />
            <List typeapi="top_rated" title="평점 높은 영화" />
        </Box>
    )
}