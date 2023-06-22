import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        // pocisiona al footer al final de la pagina
        position: "sticky",
        bottom: "0",

        width: "100%",
        // height: "60px",
        backgroundColor: "#116009",
        // color: "white",
        // textAlign: "center",
        // padding: "20px",
        // boxShadow: "0px 100px 50px 0px rgba(0,0,0,0.25)",
        // borderRadius: "15px",


      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center" paddingTop={1}>
          <Grid item xs={12}>
            <Typography color="white" variant="h5" style={{fontWeight:"bolder"}}>
              Guatemala
            </Typography>
          </Grid>
          <Grid item xs={12} >
            <Typography color="white" variant="subtitle1" style={{fontWeight:"bolder"}}>
              {`Copyright © ${new Date().getFullYear()} | All Right Reserved Quetzal Shuttle`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;