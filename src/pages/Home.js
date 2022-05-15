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
import Navbarr from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";
import SnackCard from "../components/SnackCard/SnackCard";

const Home = () => {
  const { loading, error, data } = useQuery(gql`
    query MyQuery {
      snack {
        id
        name
        price
        stock
        picture
      }
    }
  `);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (loading) return <p>loading</p>;
  if (error) return <p>error: {error}</p>;

  return (
    //panjang dari page-nya itu kebawah minimal 1 layar = 100vh
    <Box bg="#A69999">
      <Container maxW="container.xl" minHeight="100vh">
        <Navbarr />
        <Box p="50px">
          <Heading size="md">Snacks</Heading>
          <Box>
            <SimpleGrid columns={5} gap="4">
              {data.snack.map((snack, index) => (
                <SnackCard
                  id={snack.id}
                  key={index}
                  name={snack.name}
                  price={snack.price}
                  stock={snack.stock}
                  picture={snack.picture}
                />
              ))}
            </SimpleGrid>
          </Box>
        </Box>
      </Container>
      <Container maxW="container.xl">
        <Footer />
      </Container>
    </Box>
  );
};

export default Home;
