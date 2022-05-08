import React from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const SnackCard = (props) => {
  return (
    <Box
      backgroundColor="white"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
      borderRadius="md"
    >
      <Box>
        <Image
          src="https://awsimages.detik.net.id/community/media/visual/2021/12/25/snack-jadul_43.jpeg?w=700&q=90"
          borderRadius="md"
        />
      </Box>
      <Box p="2">
        <Heading size="sm">{props.name}</Heading>
        <Text fontSize="sm">Rp. {props.price}</Text>
        <Text fontSize="sm">{props.available ? "tersedia" : "habis"}</Text>
      </Box>
    </Box>
  );
};

export default SnackCard;
