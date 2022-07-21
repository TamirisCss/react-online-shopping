import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Box, TextField, Paper } from "@mui/material";
import { useState } from "react";
import { Card, Container } from "@mui/material";

const Fill = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
  });
  const [card, setCard] = useState({
    holder: "",
    number: "",
    exp: "",
    cvv: "",
  });

  return (
    <>
      <Box mr={0} xs={{ display: "flex" }}>
        <Paper elevation={0} square>
          <Box py={2} px={2}>
            <Typography variant="h6">Billing Address</Typography>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  label="Full Name"
                  name="name"
                  variant="outlined"
                  required
                  autoFocus
                  fullWidth
                  value={user.name}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  value={user.email}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Phone Number"
                  name="phone"
                  variant="outlined"
                  required
                  fullWidth
                  value={user.phone}
                  // onChange={updateUser}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  name="address"
                  variant="outlined"
                  required
                  fullWidth
                  value={user.address}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="City"
                  name="city"
                  variant="outlined"
                  required
                  fullWidth
                  value={user.city}
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="State"
                  name="state"
                  variant="outlined"
                  required
                  fullWidth
                  value={user.state}
                  margin="normal"
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>

      <Box py={2} px={2}>
        <Typography variant="h6">Payment Card</Typography>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              label="Card Holder"
              name="holder"
              variant="outlined"
              required
              fullWidth
              value={card.holder}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Card Number"
              name="number"
              variant="outlined"
              required
              fullWidth
              value={card.number}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Expiry Date"
              name="exp"
              variant="outlined"
              required
              fullWidth
              value={card.exp}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="CVV"
              name="cvv"
              variant="outlined"
              required
              fullWidth
              value={card.cvv}
              margin="normal"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Fill;
