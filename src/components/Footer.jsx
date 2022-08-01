import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import ariAvatar from "../images/ari-avatar.jpeg";
import tamiAvatar from "../images/tami-avatar.jpg";
import { height } from "@mui/system";

const Footer = () => {
  return (
    <div className="footer">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          background: "#b388ff",
       
          bottom: "0",
          position:'relative',
          padding:'80px'
        }}
      >
        <Stack
          direction="column"
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar alt="Ariane Cretani" src={ariAvatar} />
          <h6>Ariane Crestani</h6>
        </Stack>
        <Stack
          direction="column"
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar alt="Ariane Cretani" src={tamiAvatar} />
          <h6>Tamiris Cristine</h6>
        </Stack>
      </Box>
    </div>
  );
};

export default Footer;
