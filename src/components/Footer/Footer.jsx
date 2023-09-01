import React from "react";

import ariAvatar from "../../images/ari-avatar.jpeg";
import tamiAvatar from "../../images/tami-avatar.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          background: "#b388ff",

          bottom: "0",
          position: "relative",
          padding: "80px",
        }}
      >
        <div
          direction="column"
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img alt="Ariane Cretani" src={ariAvatar} />
          <h6>Ariane Crestani</h6>
        </div>
        <div
          direction="column"
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img alt="Ariane Cretani" src={tamiAvatar} />
          <h6>Tamiris Cristine</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
