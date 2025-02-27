import React from "react";
//import { AppBar, Toolbar, IconButton, Button, Box } from "@mui/material";
import { AppBar, Toolbar, IconButton } from "@mui/material";

import bgLogo from "assets/images/logos/2P-travel-blue-horizontal.png";

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: 1, padding: "5px 20px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <IconButton edge="start" aria-label="logo">
          <img src={bgLogo} alt="2P Travel Logo" style={{ width: 120, height: "auto" }} />
        </IconButton>

        {/* Botões à direita 
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: 2,
              backgroundColor: "#0D589B",
              color: "white", // Define a cor do texto como branco
              "&:hover": {
                backgroundColor: "#0A4A81", // Tom mais escuro no hover
              },
            }}
          >
            Login
          </Button>
        </Box>
        */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
