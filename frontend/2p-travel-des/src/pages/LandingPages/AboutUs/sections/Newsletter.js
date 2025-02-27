/* eslint-disable react/jsx-no-duplicate-props */
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

function Newsletter() {
  return (
    <MKBox component="section" pt={0} my={0}>
      <Container maxWidth="md">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={8} lg={6}>
            <MKTypography variant="h6" textAlign="center" gutterBottom>
              Receba recomendações em seu e-mail
            </MKTypography>
            <MKTypography variant="body2" color="text" textAlign="center" mb={3}>
              Você receberá e-mails de recomendações. Para mais informações, consulte as políticas
              de privacidade.
            </MKTypography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={8}>
                <MKInput type="email" label="Digite seu e-mail..." fullWidth />
              </Grid>
              <Grid item xs={12} sm={4}>
                <MKButton variant="gradient" color="info" fullWidth>
                  Inscreva-se!
                </MKButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Newsletter;
