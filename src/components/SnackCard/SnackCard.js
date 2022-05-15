import React from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SnackCard = (props) => {
  return (
    <Box
      backgroundColor="gray.500"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"
      borderRadius="md"
      as={Link}
      to={`/snack/${props.id}`}
    >
      <Box>
        <Image
          src={
            props.picture !== null
              ? props.picture
              : "https://awsimages.detik.net.id/community/media/visual/2021/12/25/snack-jadul_43.jpeg?w=700&q=90"
          }
          borderRadius="md"
        />
      </Box>
      <Box p="2">
        <Heading size="sm">{props.name}</Heading>
        <Text fontSize="sm">Rp.{props.price}</Text>
        <Text fontSize="sm">{props.stock !== 0 ? props.stock : "habis"}</Text>
      </Box>
    </Box>
  );
};

export default SnackCard;
