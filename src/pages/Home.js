import { gql, useQuery } from "@apollo/client";
import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import SnackCard from "../components/SnackCard/SnackCard";

const Home = () => {
  const { loading, error, data } = useQuery(gql`
    query MyQuery {
      snack {
        id
        name
        price
        stock
      }
    }
  `);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <p>loading</p>;
  if (error) return <p>error: {error}</p>;

  return (
    <Container maxW="container.xl">
      <Box>
        <Heading size="md">Snacks</Heading>
        <Box>
          <SimpleGrid columns={5} gap="4">
            {data.snack.map((snack, index) => (
              <SnackCard key={index} name={snack.name} price={snack.price} />
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
