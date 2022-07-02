import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import ariAvatar from "../images/ari-avatar.jpeg";
import tamiAvatar from "../images/tami-avatar.jpg";

const Footer = () => {
  return (
    <div>
      <Box
        sx={{
          bgcolor: "#651fff",
          height: "20vh",
          width: "100%",
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
