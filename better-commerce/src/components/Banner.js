import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <Box sx={{ maxWidth: "100%", margin: "0 auto", display: "flex", justifyContent: 'center' }}>
        <Box
        sx={{
            backgroundImage: "url(https://cdn.pixabay.com/photo/2013/10/29/18/20/flower-202483__340.jpg)",
            width: "90%",
            height: 250,
            display: 'flex',
            gap: 3,
            alignItems: 'center'
        }}
        >
        <Container>
            <Typography variant="h4" sx={{ display: 'flex', justifyContent: "center"}}>Best Seller Items</Typography>
            <Carousel />
        </Container>
        </Box>
    </Box>
  );
};

export default Banner;
