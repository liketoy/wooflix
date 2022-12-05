import { Badge, Box, Divider, Stack, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getMoive } from "../api";
import Loading from "../components/Loading";
import { makeImagePath } from "../utils";

export default function Detail() {
  const { id } = useParams();
  // useQuery에서 변수를 api함수에 가져오는 방법
  // key값이 담긴 array에 다음자리에 변수를 넣어준다.
  const { isLoading, data } = useQuery(["movie", id], getMoive);
  return (
    <Box py={10}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Stack
            direction={"column"}
            h="50vh"
            backgroundImage={`linear-gradient( rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) ),url('${makeImagePath(
              data.backdrop_path
            )}')`}
            backgroundSize="cover"
            backgroundRepeat={"no-repeat"}
            backgroundPosition="top center"
            alignItems={"flex-start"}
            justifyContent="flex-end"
            px={10}
            py={8}
          >
            <Stack direction={"row"} spacing={2}>
              {data.genres.map((genre) => (
                <Badge
                  key={genre.id}
                  fontSize="lg"
                  variant={"solid"}
                  colorScheme="whiteAlpha"
                >
                  {genre.name}
                </Badge>
              ))}
            </Stack>
            <Text color={"white"} fontSize="4xl" fontWeight={"bold"}>
              {data.title}
            </Text>
            <Text color={"white"} fontSize="lg" fontWeight={"light"}>
              {data.original_title} - {data.release_date.split("-")[0]}
            </Text>
            {data.vote_average ? (
              <Text color={"white"} fontSize="lg" fontWeight={"normal"}>
                ⭐️ {data.vote_average.toFixed(1)}
              </Text>
            ) : null}
          </Stack>
          <Stack
            direction={"column"}
            backgroundColor={"#181818"}
            px={10}
            py={8}
            spacing={6}
          >
            <Stack direction="row" h="80px" spacing={8} alignItems={"center"}>
              <Divider orientation="vertical" borderColor={"red.500"} />
              <Text
                color={"white"}
                fontSize="xl"
                fontStyle={"italic"}
                wordBreak="keep-all"
              >
                {data.tagline}
              </Text>
            </Stack>
            <Text color={"white"} fontSize="xl">
              줄거리
            </Text>
            <Text color={"white"} wordBreak="keep-all" fontSize="lg">
              {data.overview}
            </Text>
          </Stack>
        </>
      )}
    </Box>
  );
}
