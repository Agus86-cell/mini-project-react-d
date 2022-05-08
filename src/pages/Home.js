import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SnackCard from "../components/SnackCard/SnackCard";

const Home = () => {
  return (
    <Container maxW="container.xl">
      <Box>
        <Heading size="md">Snacks</Heading>
        <Box>
          <SimpleGrid columns={5} gap="4">
            <SnackCard name="Snack 1" price="Rp. 10.000,00" available={false} />
          </SimpleGrid>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
