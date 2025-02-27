import React, { useState } from "react";
// @mui material components
import {
  Container,
  Grid,
  Card,
  MenuItem,
  Menu,
  Button,
  Checkbox,
  ListItemText,
} from "@mui/material";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Slider from "@mui/material/Slider";
import Popover from "@mui/material/Popover";
import MKBadge from "components/MKBadge";
import Icon from "@mui/material/Icon";

import Destination1 from "assets/images/destinations/destination1.png";

function SearchWithFilters() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("");
  const [preco, setPreco] = useState([100, 1000]);
  const [appliedFilters, setAppliedFilters] = useState({
    hospedagem: [],
    preco: [100, 1000],
    avaliacao: [],
    data: "",
    tipoVoo: [],
    classe: [],
  });

  const handlePrecoChange = (_, newValue) => {
    setPreco(newValue);
  };

  const handleClick = (event, filter) => {
    setSelectedFilter(filter);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterSelect = (filter, value) => {
    if (filter === "hospedagem") {
      // Lógica para selecionar ou desmarcar múltiplos filtros de hospedagem
      setAppliedFilters((prevState) => {
        const hospedagem = prevState.hospedagem.includes(value)
          ? prevState.hospedagem.filter((item) => item !== value) // Remove se já estiver selecionado
          : [...prevState.hospedagem, value]; // Adiciona se não estiver selecionado

        return { ...prevState, hospedagem };
      });
    } else if (filter === "avaliacao") {
      // Lógica para selecionar ou desmarcar múltiplos filtros de avaliação
      setAppliedFilters((prevState) => {
        const avaliacao = prevState.avaliacao.includes(value)
          ? prevState.avaliacao.filter((item) => item !== value) // Remove se já estiver selecionado
          : [...prevState.avaliacao, value]; // Adiciona se não estiver selecionado

        return { ...prevState, avaliacao };
      });
    } else if (filter === "tipoVoo") {
      // Lógica para selecionar ou desmarcar múltiplos filtros de tipoVoo
      setAppliedFilters((prevState) => {
        const tipoVoo = prevState.tipoVoo.includes(value)
          ? prevState.tipoVoo.filter((item) => item !== value) // Remove se já estiver selecionado
          : [...prevState.tipoVoo, value]; // Adiciona se não estiver selecionado

        return { ...prevState, tipoVoo };
      });
    } else if (filter === "classe") {
      // Lógica para selecionar ou desmarcar múltiplos filtros de hospedagem
      setAppliedFilters((prevState) => {
        const classe = prevState.classe.includes(value)
          ? prevState.classe.filter((item) => item !== value) // Remove se já estiver selecionado
          : [...prevState.classe, value]; // Adiciona se não estiver selecionado

        return { ...prevState, classe };
      });
    } else {
      // Lógica para outros filtros (preço, avaliação, etc.)
      setAppliedFilters((prevState) => ({
        ...prevState,
        [filter]: value,
      }));
    }
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "preco-popover" : undefined;

  return (
    <MKBox component="section" py={{ xs: 0, sm: 12 }}>
      <Container>
        <Grid container spacing={4}>
          {/* Filtros à Esquerda */}
          <Grid item xs={12} md={3}>
            <Grid item xs={20} mb={3}>
              <MKBox
                sx={{
                  p: 3,
                  borderRadius: "16px", // Bordas arredondadas
                  boxShadow: 3, // Sombra para dar um efeito de profundidade
                  bgcolor: "rgba(14, 102, 190, 0.15)", // Cor de fundo
                }}
              >
                <MKTypography variant="h6">Filtros de Hospedagem</MKTypography>

                {/* FIltro HOSPEDAGEM*/}
                <Grid item>
                  <Button variant="text" onClick={(e) => handleClick(e, "hospedagem")}>
                    <Icon sx={{ mr: 1 }}>hotel</Icon>&nbsp; Hospedagem
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl && selectedFilter === "hospedagem")}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => handleFilterSelect("hospedagem", "Hotel")}>
                      <Checkbox
                        checked={appliedFilters.hospedagem.includes("Hotel")}
                        sx={{ transform: "scale(0.8)" }} // Ajusta o tamanho diretamente
                        size="small" // Ajusta o tamanho para 'small'
                      />
                      <ListItemText
                        secondary="Hotel"
                        sx={{ fontSize: "0.75rem" }} // Ajusta o tamanho da fonte
                      />
                    </MenuItem>
                    <MenuItem onClick={() => handleFilterSelect("hospedagem", "Resort")}>
                      <Checkbox
                        checked={appliedFilters.hospedagem.includes("Resort")}
                        sx={{ transform: "scale(0.8)" }} // Ajusta o tamanho diretamente
                        size="small" // Ajusta o tamanho para 'small'
                      />
                      <ListItemText secondary="Resort" sx={{ fontSize: "0.75rem" }} />
                    </MenuItem>
                    <MenuItem onClick={() => handleFilterSelect("hospedagem", "Pousada")}>
                      <Checkbox
                        checked={appliedFilters.hospedagem.includes("Pousada")}
                        sx={{ transform: "scale(0.8)" }} // Ajusta o tamanho diretamente
                        size="small" // Ajusta o tamanho para 'small'
                      />
                      <ListItemText secondary="Pousada" sx={{ fontSize: "0.75rem" }} />
                    </MenuItem>
                    <MenuItem onClick={() => handleFilterSelect("hospedagem", "Airbnb")}>
                      <Checkbox
                        checked={appliedFilters.hospedagem.includes("Airbnb")}
                        sx={{ transform: "scale(0.8)" }} // Ajusta o tamanho diretamente
                        size="small" // Ajusta o tamanho para 'small'
                      />
                      <ListItemText secondary="Airbnb" sx={{ fontSize: "0.75rem" }} />
                    </MenuItem>
                    <MenuItem onClick={() => handleFilterSelect("hospedagem", "Camping")}>
                      <Checkbox
                        checked={appliedFilters.hospedagem.includes("Camping")}
                        sx={{ transform: "scale(0.8)" }} // Ajusta o tamanho diretamente
                        size="small" // Ajusta o tamanho para 'small'
                      />
                      <ListItemText secondary="Camping" sx={{ fontSize: "0.75rem" }} />
                    </MenuItem>
                  </Menu>
                  {appliedFilters.hospedagem.length > 0 && (
                    <Grid>
                      {appliedFilters.hospedagem.map((item) => (
                        <MKBadge
                          key={item}
                          badgeContent={item}
                          variant="contained"
                          color="dark"
                          container
                          circular
                        />
                      ))}
                    </Grid>
                  )}
                </Grid>

                {/* Filtro PREÇO */}
                <Grid item>
                  <MKButton variant="text" color="info" onClick={handleClick}>
                    <Icon sx={{ mr: 1 }}>attach_money</Icon>Preço
                  </MKButton>

                  <Popover
                    id={id}
                    open={open && selectedFilter === "preco"}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MKBox
                      p={2}
                      width={250}
                      sx={{ bgcolor: "white", borderRadius: 2, boxShadow: 3 }}
                    >
                      <MKTypography variant="h6">Faixa de Preço</MKTypography>
                      <MKTypography variant="body2">
                        R$ {preco[0]} - R$ {preco[1]}
                      </MKTypography>
                      <Slider
                        value={preco}
                        onChange={handlePrecoChange}
                        valueLabelDisplay="auto"
                        min={50}
                        max={5000}
                        step={50}
                      />
                      <MKButton
                        fullWidth
                        variant="gradient"
                        color="info"
                        onClick={() => {
                          setAppliedFilters((prevState) => ({
                            ...prevState,
                            preco,
                          }));
                          handleClose();
                        }}
                      >
                        Aplicar
                      </MKButton>
                    </MKBox>
                  </Popover>
                  {/* 
                  {appliedFilters.preco && (
                    <Grid>
                      <MKBadge
                        badgeContent={appliedFilters.preco[1]}
                        variant="contained"
                        color="dark"
                        container
                        circular
                      />
                    </Grid>
                  )}
                  */}
                </Grid>

                {/* Filtro AVALIAÇÃO */}
                <Grid item>
                  <Button variant="text" onClick={(e) => handleClick(e, "avaliacao")}>
                    <Icon sx={{ mr: 1 }}>star</Icon>Avaliação
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl && selectedFilter === "avaliacao")}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => handleFilterSelect("avaliacao", "5 Estrelas")}>
                      <Checkbox
                        checked={appliedFilters.avaliacao.includes("5 Estrelas")}
                        sx={{ transform: "scale(0.8)" }} // Ajusta o tamanho diretamente
                        size="small" // Ajusta o tamanho para 'small'
                      />
                      <ListItemText
                        secondary="5 Estrelas"
                        sx={{ fontSize: "0.75rem" }} // Ajusta o tamanho da fonte
                      />
                    </MenuItem>
                    <MenuItem onClick={() => handleFilterSelect("avaliacao", "4 Estrelas")}>
                      <Checkbox
                        checked={appliedFilters.avaliacao.includes("4 Estrelas")}
                        sx={{ transform: "scale(0.8)" }} // Ajusta o tamanho diretamente
                        size="small" // Ajusta o tamanho para 'small'
                      />
                      <ListItemText
                        secondary="4 Estrelas"
                        sx={{ fontSize: "0.75rem" }} // Ajusta o tamanho da fonte
                      />
                    </MenuItem>
                    <MenuItem onClick={() => handleFilterSelect("avaliacao", "3 Estrelas")}>
                      <Checkbox
                        checked={appliedFilters.avaliacao.includes("3 Estrelas")}
                        sx={{ transform: "scale(0.8)" }} // Ajusta o tamanho diretamente
                        size="small" // Ajusta o tamanho para 'small'
                      />
                      <ListItemText
                        secondary="3 Estrelas"
                        sx={{ fontSize: "0.75rem" }} // Ajusta o tamanho da fonte
                      />
                    </MenuItem>
                    <MenuItem onClick={() => handleFilterSelect("avaliacao", "2 Estrelas")}>
                      <Checkbox
                        checked={appliedFilters.avaliacao.includes("2 Estrelas")}
                        sx={{ transform: "scale(0.8)" }} // Ajusta o tamanho diretamente
                        size="small" // Ajusta o tamanho para 'small'
                      />
                      <ListItemText
                        secondary="2 Estrelas"
                        sx={{ fontSize: "0.75rem" }} // Ajusta o tamanho da fonte
                      />
                    </MenuItem>
                    <MenuItem onClick={() => handleFilterSelect("avaliacao", "1 Estrelas")}>
                      <Checkbox
                        checked={appliedFilters.avaliacao.includes("1 Estrelas")}
                        sx={{ transform: "scale(0.8)" }} // Ajusta o tamanho diretamente
                        size="small" // Ajusta o tamanho para 'small'
                      />
                      <ListItemText
                        secondary="1 Estrelas"
                        sx={{ fontSize: "0.75rem" }} // Ajusta o tamanho da fonte
                      />
                    </MenuItem>
                  </Menu>
                  {appliedFilters.avaliacao && (
                    <Grid>
                      {appliedFilters.avaliacao.map((item) => (
                        <MKBadge
                          key={item}
                          badgeContent={item}
                          variant="contained"
                          color="dark"
                          container
                          circular
                        />
                      ))}
                    </Grid>
                  )}
                </Grid>
              </MKBox>
            </Grid>
            <Grid item xs={12} mb={3}>
              <MKBox
                sx={{
                  p: 3,
                  borderRadius: "16px", // Bordas arredondadas
                  boxShadow: 3, // Sombra para dar um efeito de profundidade
                  bgcolor: "rgba(14, 102, 190, 0.15)", // Cor de fundo
                  mb: 20,
                }}
              >
                <MKTypography variant="h6">Filtros de Voo</MKTypography>

                {/* Filtro DATA */}
                <Grid item>
                  <Button variant="text" onClick={(e) => handleClick(e, "data")}>
                    <Icon sx={{ mr: 1 }}>calendar_today</Icon>Data
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl && selectedFilter === "data")}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => handleFilterSelect("data", "Escolher Data")}>
                      Escolher Data
                    </MenuItem>
                    <MenuItem onClick={() => handleFilterSelect("data", "Período Específico")}>
                      Período Específico
                    </MenuItem>
                  </Menu>
                  {appliedFilters.data && (
                    <Grid>
                      <MKBadge
                        badgeContent={appliedFilters.data}
                        variant="contained"
                        color="dark"
                        container
                        circular
                      />
                    </Grid>
                  )}
                </Grid>

                {/* Filtro TIPO */}
                <Grid item>
                  <Button variant="text" onClick={(e) => handleClick(e, "tipoVoo")}>
                    <Icon sx={{ mr: 1 }}>flight_takeoff</Icon>Tipo de Voo
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl && selectedFilter === "tipoVoo")}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => handleFilterSelect("tipoVoo", "Direto")}>
                      <Checkbox
                        checked={appliedFilters.tipoVoo.includes("Direto")}
                        sx={{ transform: "scale(0.8)" }} // Ajusta o tamanho diretamente
                        size="small" // Ajusta o tamanho para 'small'
                      />
                      <ListItemText
                        secondary="Direto"
                        sx={{ fontSize: "0.75rem" }} // Ajusta o tamanho da fonte
                      />
                    </MenuItem>
                    <MenuItem onClick={() => handleFilterSelect("tipoVoo", "Com Escala")}>
                      <Checkbox
                        checked={appliedFilters.tipoVoo.includes("Com Escala")}
                        sx={{ transform: "scale(0.8)" }} // Ajusta o tamanho diretamente
                        size="small" // Ajusta o tamanho para 'small'
                      />
                      <ListItemText
                        secondary="Com Escala"
                        sx={{ fontSize: "0.75rem" }} // Ajusta o tamanho da fonte
                      />
                    </MenuItem>
                  </Menu>
                  {appliedFilters.tipoVoo && (
                    <Grid>
                      {appliedFilters.tipoVoo.map((item) => (
                        <MKBadge
                          key={item}
                          badgeContent={item}
                          variant="contained"
                          color="dark"
                          container
                          circular
                        />
                      ))}
                    </Grid>
                  )}
                </Grid>

                {/* Filtro CLASSE */}
                <Grid item>
                  <Button variant="text" onClick={(e) => handleClick(e, "classe")}>
                    <Icon sx={{ mr: 1 }}>class</Icon>Classe
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl && selectedFilter === "classe")}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => handleFilterSelect("classe", "Primeira")}>
                      <Checkbox
                        checked={appliedFilters.classe.includes("Primeira")}
                        sx={{ transform: "scale(0.8)" }} // Ajusta o tamanho diretamente
                        size="small" // Ajusta o tamanho para 'small'
                      />
                      <ListItemText
                        secondary="Primeira"
                        sx={{ fontSize: "0.75rem" }} // Ajusta o tamanho da fonte
                      />
                    </MenuItem>
                    <MenuItem onClick={() => handleFilterSelect("classe", "Executiva")}>
                      <Checkbox
                        checked={appliedFilters.classe.includes("Executiva")}
                        sx={{ transform: "scale(0.8)" }} // Ajusta o tamanho diretamente
                        size="small" // Ajusta o tamanho para 'small'
                      />
                      <ListItemText
                        secondary="Executiva"
                        sx={{ fontSize: "0.75rem" }} // Ajusta o tamanho da fonte
                      />
                    </MenuItem>
                    <MenuItem onClick={() => handleFilterSelect("classe", "Econômica")}>
                      <Checkbox
                        checked={appliedFilters.classe.includes("Econômica")}
                        sx={{ transform: "scale(0.8)" }} // Ajusta o tamanho diretamente
                        size="small" // Ajusta o tamanho para 'small'
                      />
                      <ListItemText
                        secondary="Econômica"
                        sx={{ fontSize: "0.75rem" }} // Ajusta o tamanho da fonte
                      />
                    </MenuItem>
                  </Menu>
                  {appliedFilters.classe && (
                    <Grid>
                      {appliedFilters.classe.map((item) => (
                        <MKBadge
                          key={item}
                          badgeContent={item}
                          variant="contained"
                          color="dark"
                          container
                          circular
                        />
                      ))}
                    </Grid>
                  )}
                </Grid>
              </MKBox>
            </Grid>
          </Grid>

          {/* Resultados à Direita */}
          <Grid item xs={9}>
            <Grid container spacing={2}>
              {[1, 2, 3, 4].map((result, index) => (
                <Grid item xs={12} key={index}>
                  <Card
                    sx={{
                      p: 3,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    {/* Layout da Imagem, Resultado e Botão */}
                    <Grid container spacing={2} alignItems="center">
                      {/* Imagem */}
                      <Grid item xs={4}>
                        <MKBox position="relative" borderRadius="lg">
                          <MKBox
                            component="img"
                            src={Destination1}
                            alt="Resultado"
                            borderRadius="lg"
                            width="100%"
                            position="relative"
                            zIndex={1}
                          />
                          <MKBox
                            borderRadius="lg"
                            shadow="md"
                            width="100%"
                            height="100%"
                            position="absolute"
                            left={0}
                            top={0}
                            sx={{
                              backgroundImage: `url(${Destination1})`,
                              transform: "scale(0.94)",
                              filter: "blur(12px)",
                              backgroundSize: "cover",
                            }}
                          />
                        </MKBox>
                      </Grid>

                      {/* Descrição e Preço */}
                      <Grid item xs={5}>
                        <MKBox>
                          <MKTypography variant="h6" color="textPrimary">
                            Resultado #{result}
                          </MKTypography>
                          <MKTypography variant="body2" color="textSecondary">
                            Descrição do resultado #{result}
                          </MKTypography>
                        </MKBox>
                        <MKTypography variant="h6" color="primary">
                          R$ 999,00
                        </MKTypography>
                      </Grid>

                      {/* Botão Selecionar */}
                      <Grid item xs={3}>
                        <MKButton variant="gradient" color="info" fullWidth>
                          Selecionar
                        </MKButton>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SearchWithFilters;
