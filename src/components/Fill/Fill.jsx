import React, { useState } from "react";

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
      <div xs={{ display: "flex", flexDirection: "row" }}>
        <div elevation={0} square>
          <div py={2} px={2}>
            <div variant="h6">Billing Address</div>
            <div div spacing={1}>
              <div item xs={12}>
                <h2
                  label="Full Name"
                  name="name"
                  variant="outlined"
                  required
                  autoFocus
                  fullWidth
                  value={user.name}
                  margin="normal"
                />
              </div>
              <div item xs={12}>
                <h2
                  label="Email Address"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  value={user.email}
                  margin="normal"
                />
              </div>
              <div item xs={12}>
                <h2
                  label="Phone Number"
                  name="phone"
                  variant="outlined"
                  required
                  fullWidth
                  value={user.phone}
                  // onChange={updateUser}
                  margin="normal"
                />
              </div>
              <div item xs={12}>
                <h2
                  label="Address"
                  name="address"
                  variant="outlined"
                  required
                  fullWidth
                  value={user.address}
                  margin="normal"
                />
              </div>
              <div item xs={12}>
                <h2
                  label="City"
                  name="city"
                  variant="outlined"
                  required
                  fullWidth
                  value={user.city}
                  margin="normal"
                />
              </div>
              <div item xs={12}>
                <h2
                  label="State"
                  name="state"
                  variant="outlined"
                  required
                  fullWidth
                  value={user.state}
                  margin="normal"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div py={2} px={2}>
        <div variant="h6">Payment Card</div>
        <div container spacing={1}>
          <div item xs={12}>
            <h2
              label="Card Holder"
              name="holder"
              variant="outlined"
              required
              fullWidth
              value={card.holder}
              margin="normal"
            />
          </div>
          <div item xs={12}>
            <h2
              label="Card Number"
              name="number"
              variant="outlined"
              required
              fullWidth
              value={card.number}
              margin="normal"
            />
          </div>
          <div item xs={12} sm={6}>
            <h2
              label="Expiry Date"
              name="exp"
              variant="outlined"
              required
              fullWidth
              value={card.exp}
              margin="normal"
            />
          </div>
          <div item xs={12} sm={6}>
            <h2
              label="CVV"
              name="cvv"
              variant="outlined"
              required
              fullWidth
              value={card.cvv}
              margin="normal"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Fill;
