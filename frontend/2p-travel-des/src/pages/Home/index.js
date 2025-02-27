// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultFooter from "examples/Footers/CenteredFooter";

// Home page sections
import Information from "pages/Home/sections/Information";
//import AdvanceSearch from "pages/Home/sections/AdvanceSearch";
import PanelSearch from "pages/Home/sections/PanelSearch";
import NavBar from "pages/Home/sections/NavBar";
import Recommend from "pages/Home/sections/Recommend";
import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";
import ColoredBackgroundCard from "examples/Cards/BlogCards/BackgroundBlogCard";
// Routes
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";
import bgConsultoriaPersonalizada from "assets/images/bg/bg_consultoria_personalizada.jpg";

function Presentation() {
  return (
    <>
      <NavBar />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={8} lg={15} justifyContent="left" mx="auto">
            <MKTypography
              variant="h3"
              color="white"
              mt={0}
              mb={1}
              textAlign="right"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Recomendações Inteligentes para sua viagem!{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="right"
              px={{ xs: 0, lg: 0 }}
              mt={1}
            >
              Sem destino em mente? Responda algumas perguntas e nós encontramos a viagem perfeita
              para você!
            </MKTypography>
          </Grid>
          <PanelSearch />
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -2,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Recommend />
        <Information />
        <MKBox sx={{ width: "100%", my: 3 }}>
          <ColoredBackgroundCard
            image={bgConsultoriaPersonalizada}
            label="landscape"
            title="Consultoria de Roteiro"
            description="Você pode optar por contar com nossa equipe de consultores especializados prontos para fazer seu roteiro a mão"
            action={{
              type: "internal",
              route: "/somewhere",
              label: "Entre em contato",
            }}
            sx={{
              width: "100%",
              minHeight: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          />
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <Newsletter />
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
