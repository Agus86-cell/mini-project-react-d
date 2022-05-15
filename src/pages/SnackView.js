import { gql, useQuery } from "@apollo/client";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useParams, Link } from "react-router-dom";

const SnackView = () => {
  const params = useParams();
  const { loading, error, data } = useQuery(
    gql`
      query MyQuery($id: Int!) {
        snack(where: { id: { _eq: $id } }) {
          id
          name
          price
          stock
          description
          picture
        }
      }
    `,
    {
      variables: {
        id: params.id,
      },
    }
  );

  if (loading) return <p>loading</p>;
  if (error) return <p>error</p>;

  return (
    <Container maxW="container.xl">
      {data.snack.map((snack, i) => (
        <Box
          boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px;"
          borderRadius="md"
          mt="12rem"
        >
          <SimpleGrid columns={2} spacing={10}>
            <Box>
              <Image
                src={
                  snack.picture !== null
                    ? snack.picture
                    : "https://awsimages.detik.net.id/community/media/visual/2021/12/25/snack-jadul_43.jpeg?w=700&q=90"
                }
                borderStartEndRadius="md"
              />
            </Box>
            <Box paddingY="3rem">
              <Button variant="link" colorScheme="cyan" as={Link} to="/">
                kembali
              </Button>
              <Heading>{snack.name}</Heading>
              <Text>Rp. {snack.price}</Text>
              <Text>Stok: {snack.stock}</Text>
              <Text>{snack.stock > 0 ? "Tersedia" : "Habis"}</Text>
              <Text mt="2rem">{snack.description}</Text>
            </Box>
          </SimpleGrid>
        </Box>
      ))}
    </Container>
  );
};

export default SnackView;
