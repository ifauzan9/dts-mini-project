import { AppBar, Box, Button, Container, IconButton } from "@mui/material";
import React, { useState } from "react";

// import css
import styles from "./HomePage.module.css";

// logo netflix
import logoNetflix from "../assets/icons/logo-netflix.svg";
import fontNetflix from "../assets/icons/font-netflix.svg";

// import icon navbar kanan
import iconSearch from "../assets/icons/icon-search.svg";
import iconGift from "../assets/icons/icon-gift.svg";
import iconBell from "../assets/icons/icon-bell.svg";
import profileImg from "../assets/icons/ProfileIMG.svg";
import dropDown from "../assets/icons/segitiga-bawah.svg";

const HomePage = () => {
  const [menuNavbar, setMenuNavbar] = useState([
    "home",
    "series",
    "movies",
    "new and popular",
    "my list",
  ]);

  return (
    <>
      {/* NAVBAR */}
      <AppBar sx={{ backgroundColor: "#141414", p: 2 }} position="fixed">
        <Box
          sx={{
            marginLeft: 2,
            marginRight: 2,
            display: "flex",
            alignItems: "center",
            // backgroundColor: "#555555",
            justifyContent: "space-between",
            height: "50px",
            overflow: "hidden",
          }}
        >
          {/* Navbar kiri */}
          <Box
            sx={{
              // backgroundColor: "green",
              display: "flex",
              flex: "1",
              alignItems: "center",
            }}
          >
            {/* logo */}
            <Box component="img" src={logoNetflix} sx={{ width: "50px" }}></Box>
            <Box
              component="img"
              src={fontNetflix}
              sx={{
                width: { xs: "140px", sm: "15%" },
                height: "35px",
                // backgroundColor: "green",
              }}
            ></Box>

            {/* menu */}
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                // backgroundColor: "gray",
              }}
            >
              {menuNavbar.map((nav) => {
                return (
                  <Button
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  >
                    {nav}
                  </Button>
                );
              })}
            </Box>
          </Box>

          {/* Navbar Kanan */}
          <Box sx={{ textAlign: "end" }}>
            <IconButton>
              <Box component="img" src={iconSearch} />
            </IconButton>
            <IconButton sx={{ display: { xs: "none", sm: "initial" } }}>
              <Box component="img" src={iconGift} />
            </IconButton>
            <IconButton sx={{ display: { xs: "none", sm: "initial" } }}>
              <Box component="img" src={iconBell} />
            </IconButton>
            <IconButton sx={{ width: "50px" }}>
              <Box component="img" src={profileImg} />
              <Box component="img" src={dropDown} />
            </IconButton>
          </Box>
        </Box>
      </AppBar>
    </>
  );
};

export default HomePage;
