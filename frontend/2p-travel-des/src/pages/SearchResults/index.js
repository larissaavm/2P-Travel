import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
//import MKButton from "components/MKButton";
import NavBar from "pages/Home/sections/NavBar";
import DefaultFooter from "examples/Footers/CenteredFooter";
import footerRoutes from "footer.routes";
import PanelSearch from "pages/Home/sections/PanelSearch";
import SearchWithFilters from "./sections/searchWithFilters";

function SearchResults() {
  return (
    <>
      <NavBar />
      <MKBox
        minHeight="20vh"
        width="100%"
        sx={{
          backgroundColor: "#f5f5f5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MKTypography variant="h4" color="primary">
          <PanelSearch />
        </MKTypography>
      </MKBox>
      <Container>
        <Grid container spacing={0} mt={-10}>
          {/* Filtros em linha acima dos resultados */}
          <Grid item xs={12}>
            <SearchWithFilters />
          </Grid>
        </Grid>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default SearchResults;
