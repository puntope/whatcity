import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import React from "react";
import Box from "@material-ui/core/Box";


const Hero = ({title, body}) => (
    <Container maxWidth="sm" component="section">
        <Box py={5}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
            {title}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
            {body}
        </Typography>
        </Box>
    </Container>
);


export default Hero