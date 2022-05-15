import React from "react";
import {
  Box,
  Container,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  return (
    <Box mt="5vh">
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem w="100%" h="10">
          <b>BALI MARKETPLACE</b> <CopyrightIcon />
        </GridItem>
        <GridItem w="100%" h="10">
          <h5>Follow Us</h5>
          <h6>
            <WhatsAppIcon /> +6281234567
          </h6>
          <h6>
            <InstagramIcon /> @balimarketplace_offcl
          </h6>
          <h6>
            <EmailIcon /> balimarketplace@gmail.com
          </h6>
        </GridItem>
        <GridItem w="100%" h="10">
          <h2>Dukungan</h2>
          <h6>Pusat Bantuan</h6>
          <h6>Kebijakan dan Privasi</h6>
          <h6>Syarat dan Ketentuan</h6>
        </GridItem>
        <GridItem w="100%" h="10" />
        <GridItem w="100%" h="10" />
      </Grid>
    </Box>
  );
}
