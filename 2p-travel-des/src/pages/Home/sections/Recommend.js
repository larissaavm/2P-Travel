import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import destination1 from "assets/images/destinations/destination1.png";
import destination2 from "assets/images/destinations/destination2.png";
import destination3 from "assets/images/destinations/destination3.png";
import destination4 from "assets/images/destinations/destination4.png";

function Recommend() {
  const data = [
    {
      image: destination1,
      title: "Singapura",
      subTitle: "Singapura, oficialmente a República de Singapura.",
      cost: "R$38.800",
      duration: "Aprox. 2 noites",
    },
    {
      image: destination2,
      title: "Tailândia",
      subTitle: "A Tailândia é um país do Sudeste Asiático.",
      cost: "R$54.200",
      duration: "Aprox. 2 noites",
    },
    {
      image: destination3,
      title: "Paris",
      subTitle: "Paris, a capital da França, é uma grande cidade europeia.",
      cost: "R$45.500",
      duration: "Aprox. 2 noites",
    },
    {
      image: destination4,
      title: "Bora Bora",
      subTitle: "Bora Bora é uma pequena ilha no Pacífico Sul.",
      cost: "R$95.400",
      duration: "Aprox. 2 noites e 2 dias",
    },
  ];

  const packages = ["Nacional", "Internacional"];
  const [active, setActive] = useState(1);

  return (
    <MKBox component="section" py={2} alignItems="center">
      <Container>
        <MKTypography variant="h4" fontWeight="bold" mb={2} textAlign="center" alignItems="center">
          Destinos mais visitados
        </MKTypography>
        <Grid container justifyContent="center" alignItems="center">
          <ToggleButtonGroup
            value={active}
            exclusive
            onChange={(event, newValue) => setActive(newValue)}
          >
            {packages.map((pkg, index) => (
              <ToggleButton key={index} value={index + 1}>
                {pkg}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Grid>
        <Grid container spacing={3} mt={2}>
          {data.map((destination, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={destination.image}
                  alt={destination.title}
                />
                <CardContent>
                  <MKTypography variant="h6" fontWeight="bold">
                    {destination.title}
                  </MKTypography>
                  <MKTypography variant="body2" color="textSecondary">
                    {destination.subTitle}
                  </MKTypography>
                  <MKTypography variant="body1" fontWeight="bold" mt={1}>
                    {destination.cost}
                  </MKTypography>
                  <MKTypography variant="body2" color="textSecondary">
                    {destination.duration}
                  </MKTypography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <MKButton variant="gradient" color="info" fullWidth mt={2}>
          Ver Mais
        </MKButton>
      </Container>
    </MKBox>
  );
}

export default Recommend;
