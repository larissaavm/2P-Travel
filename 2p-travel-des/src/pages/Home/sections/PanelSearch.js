import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { isWithinInterval } from "date-fns";
import Switch from "@mui/material/Switch";
import MKTypography from "components/MKTypography";
import { useNavigate } from "react-router-dom";

function PanelSearch() {
  const [dropdown, setDropdown] = useState(null);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState(false);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const openDropdown = (event) => setDropdown(event.currentTarget);
  const closeDropdown = () => setDropdown(null);

  const handleDepartureChange = (date) => {
    if (returnDate && date > returnDate) {
      alert("A data de ida não pode ser maior que a data de volta.");
    } else {
      setDepartureDate(date);
    }
  };

  const handleReturnChange = (date) => {
    if (departureDate && date < departureDate) {
      alert("A data de volta não pode ser anterior à data de ida.");
    } else {
      setReturnDate(date);
    }
  };

  const renderHighlightedDays = (date) => {
    if (!departureDate || !returnDate) return false;
    return isWithinInterval(date, { start: departureDate, end: returnDate });
  };

  const [hasDestiny, setHasDestiny] = useState(true);

  const handleHasDestiny = () => setHasDestiny(!hasDestiny);

  const navigate = useNavigate();

  const [estiloViagem, setEstiloViagem] = useState("");

  const [atmosferaViagem, setAtmosferaViagem] = useState("");

  const [mobilidadeViagem, setMobilidadeViagem] = useState("");

  const [limiteKM, setLimiteKM] = useState("");

  const [opcaoHospedagem, setOpcaoHospedagem] = useState("");

  return (
    <MKBox component="section" py={3}>
      <Container>
        <Grid container item xs={12} justifyContent="left">
          <MKBox width="100%" component="form" method="post" autoComplete="off">
            <MKBox p={2} sx={{ backgroundColor: "#fff", borderRadius: 2, boxShadow: 3 }}>
              <Grid display="flex" alignItems="center" ml={-1}>
                <Switch checked={hasDestiny} onChange={handleHasDestiny} />
                <MKTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  onClick={handleHasDestiny}
                  sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                >
                  &nbsp;&nbsp;Já tem destino?
                </MKTypography>
              </Grid>
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={2}>
                  <MKInput variant="standard" label="Origem" fullWidth />
                </Grid>
                <Grid item xs={2}>
                  <MKInput variant="standard" label="Destino" fullWidth />
                </Grid>

                <Grid item xs={2}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Ida"
                      value={departureDate}
                      onChange={handleDepartureChange}
                      renderInput={(params) => <MKInput {...params} />}
                    />
                  </LocalizationProvider>
                </Grid>

                <Grid item xs={2}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Volta"
                      value={returnDate}
                      onChange={handleReturnChange}
                      renderInput={(params) => <MKInput {...params} />}
                      renderDay={(day, selectedDate, dayInCurrentMonth, dayComponent) => {
                        const isDepartureDay =
                          departureDate && day.toDateString() === departureDate.toDateString();
                        const isHighlighted = renderHighlightedDays(day);

                        return React.cloneElement(dayComponent, {
                          style: {
                            backgroundColor: isDepartureDay
                              ? "#FFDD57"
                              : isHighlighted
                              ? "#FFDD57"
                              : "transparent",
                          },
                        });
                      }}
                      shouldDisableDate={(date) => departureDate && date < departureDate}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={2}>
                  <MKButton
                    variant="standard"
                    color="info"
                    fullWidth
                    onClick={openDropdown}
                    sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                  >
                    {`${adults} Adulto${adults > 1 ? "s" : ""}, ${children} Criança${
                      children > 1 ? "s" : ""
                    }, ${pets ? "Com Pets" : "Sem Pets"}`}
                    <Icon>expand_more</Icon>
                  </MKButton>
                  <Menu anchorEl={dropdown} open={Boolean(dropdown)} onClose={closeDropdown}>
                    <MenuItem>
                      <Grid container alignItems="center" spacing={1}>
                        <Grid item xs={6}>
                          <Typography variant="body2">Adultos</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <MKInput
                            type="number"
                            value={adults}
                            onChange={(e) =>
                              setAdults(Math.max(1, parseInt(e.target.value, 10) || 1))
                            }
                            fullWidth
                            inputProps={{ min: 1 }}
                          />
                        </Grid>
                      </Grid>
                    </MenuItem>
                    <MenuItem>
                      <Grid container alignItems="center" spacing={1}>
                        <Grid item xs={6}>
                          <Typography variant="body2">Crianças</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <MKInput
                            type="number"
                            value={children}
                            onChange={(e) =>
                              setChildren(Math.max(0, parseInt(e.target.value, 10) || 0))
                            }
                            fullWidth
                            inputProps={{ min: 0 }}
                          />
                        </Grid>
                      </Grid>
                    </MenuItem>
                    <MenuItem>
                      <Grid container alignItems="center" spacing={1}>
                        <Grid item xs={6}>
                          <Typography variant="body2">Pets</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <MKInput
                            type="checkbox"
                            checked={pets}
                            onChange={(e) => setPets(e.target.checked)}
                          />
                        </Grid>
                      </Grid>
                    </MenuItem>
                  </Menu>
                </Grid>
                <Grid item xs={2}>
                  <MKButton
                    type="submit"
                    variant="gradient"
                    color="dark"
                    fullWidth
                    sx={{ height: "100%" }}
                    onClick={() => navigate("/resultadoBusca")}
                  >
                    Pesquisar
                  </MKButton>
                </Grid>
              </Grid>
              {hasDestiny === false && (
                <Grid container alignItems="center" spacing={2}>
                  {/* Linha 1 */}
                  <Grid container item spacing={2}>
                    <Grid item xs={12} md={6}>
                      <MKInput
                        select
                        label="Qual é o seu estilo de viagem?"
                        value={estiloViagem}
                        onChange={(e) => setEstiloViagem(e.target.value)}
                        variant="standard"
                        fullWidth
                      >
                        <MenuItem value="">Selecione</MenuItem>
                        <MenuItem value="praia">Praia</MenuItem>
                        <MenuItem value="montanha">Montanha</MenuItem>
                        <MenuItem value="cidade">Cidade</MenuItem>
                        <MenuItem value="campo">Campo</MenuItem>
                      </MKInput>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <MKInput
                        select
                        label="Qual a atmosfera que você busca?"
                        value={atmosferaViagem}
                        onChange={(e) => setAtmosferaViagem(e.target.value)}
                        variant="standard"
                        fullWidth
                      >
                        <MenuItem value="">Selecione</MenuItem>
                        <MenuItem value="sofisticado">Sofisticado</MenuItem>
                        <MenuItem value="medio">Médio</MenuItem>
                        <MenuItem value="simples">Simples</MenuItem>
                      </MKInput>
                    </Grid>
                  </Grid>

                  {/* Linha 2 */}
                  <Grid container item spacing={2}>
                    <Grid item xs={12} md={6}>
                      <MKInput
                        select
                        label="Como prefere viajar?"
                        value={mobilidadeViagem}
                        onChange={(e) => setMobilidadeViagem(e.target.value)}
                        variant="standard"
                        fullWidth
                      >
                        <MenuItem value="">Selecione</MenuItem>
                        <MenuItem value="carro">De carro</MenuItem>
                        <MenuItem value="aviao">De avião</MenuItem>
                        <MenuItem value="indiferente">Indiferente</MenuItem>
                      </MKInput>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <MKInput
                        select
                        label="Qual o tipo de hospedagem que você prefere?"
                        value={opcaoHospedagem}
                        onChange={(e) => setOpcaoHospedagem(e.target.value)}
                        variant="standard"
                        fullWidth
                      >
                        <MenuItem value="">Selecione</MenuItem>
                        <MenuItem value="hotel">Hotel</MenuItem>
                        <MenuItem value="resort">Resort</MenuItem>
                        <MenuItem value="pousada">Pousada</MenuItem>
                        <MenuItem value="airbnb">Airbnb</MenuItem>
                        <MenuItem value="camping">Camping</MenuItem>
                      </MKInput>
                    </Grid>
                  </Grid>

                  {/* Linha 3 */}
                  {mobilidadeViagem === "carro" && (
                    <Grid container item spacing={2}>
                      <Grid item xs={12} md={6}>
                        <MKInput
                          select
                          label="Se for de carro, qual o limite de distância?"
                          value={limiteKM}
                          onChange={(e) => setLimiteKM(e.target.value)}
                          variant="standard"
                          fullWidth
                        >
                          <MenuItem value="">Selecione</MenuItem>
                          <MenuItem value="100">Até 100Km</MenuItem>
                          <MenuItem value="200">Até 200Km</MenuItem>
                          <MenuItem value="500">Até 500Km</MenuItem>
                        </MKInput>
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              )}
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default PanelSearch;
