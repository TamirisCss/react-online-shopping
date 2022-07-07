import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import ariAvatar from "../images/ari-avatar.jpeg";
import tamiAvatar from "../images/tami-avatar.jpg";
import { height } from "@mui/system";

const Footer = () => {
  return (
    <div >
      <Box
        sx={{
          display: 'flex',
          justifyContent:'center',
          bgcolor: "#651fff",
          width: "100%",
          position: "absolute",
          bottom: "0",

          width: "100%",
          minHeight: '10vh',
         
        }}
      >
        <Stack
        
          direction="row"
          spacing={10}
        >
          <Avatar  alt="Ariane Cretani" src={ariAvatar} />
          <Avatar alt="Ariane Cretani" src={tamiAvatar} />
        </Stack>
      </Box>
    </div>
  );
};

export default Footer;
