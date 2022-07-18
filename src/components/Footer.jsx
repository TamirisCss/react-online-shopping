import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import ariAvatar from "../images/ari-avatar.jpeg";
import tamiAvatar from "../images/tami-avatar.jpg";
import { height } from "@mui/system";

const Footer = () => {
  return (
    <div className="footer" >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#6200ea",
          width: "100%",
          position: "static",
          bottom: "0",
          minHeight: "10vh",
          marginTop: "2rem",
        }}
      >
        <Stack direction="row" spacing={10}>
          <Avatar alt="Ariane Cretani" src={ariAvatar} />
          <Avatar alt="Ariane Cretani" src={tamiAvatar} />
        </Stack>
      </Box>
    </div>
  );
};

export default Footer;
