import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import heartIcon from "../../../assets/svg-icons/heart-icon.svg";
import favoriteHeart from "../../../assets/svg-icons/favorite-heart.svg";
import vehicleOne from "../../../assets/svg-icons/vehicle-01.svg";
import { Box, Button } from "@mui/material";
import gasStation from "../../../assets/svg-icons/gas-station.svg";
import car from "../../../assets/svg-icons/Car.svg";
import profileIcon from "../../../assets/svg-icons/profile-2user.svg";
import { useState } from "react";

export default function CarInfo(props) {
  const {
    name,
    type,
    fuelCapacity,
    transmission,
    passengerCapacity,
    pricePerDay,
  } = props;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Paper
      elevation={10}
      sx={{
        p: 1.75,
        // margin: "auto",
        width: "280px", // Set the width to be the same as the outer Grid
        height: 388,
        borderRadius: "10px",
      }}
    >
      <Grid
        container
        spacing={5}
        sx={{
          width: "280px", // Set the width to be the same as the Paper
          height: 388,
          margin: 0,
          padding: 0,
        }}
        // justifyContent={"stretch"}
        alignContent={"flex-start"}
        alignItems={"flex-start"}
      >
        <Grid
          // item
          container
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={"0px !important"}
        >
          <Grid item>
            <Typography
              sx={{
                fontFamily: "Plus Jakarta Sans",
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "30px",
                letterSpacing: "-0.03em",
                textAlign: "left",
                color: "rgba(26, 32, 44, 1)",
                padding: 0,
              }}
            >
              {name}
            </Typography>
          </Grid>
          <Grid item>
            {/* <img src={heartIcon} /> */}

            <img
              src={isFavorite ? favoriteHeart : heartIcon}
              onClick={toggleFavorite}
              style={{ cursor: "pointer" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                font: "Plus Jakarta Sans",
                weight: 700,
                size: "14px",
                lineHeight: "21px !important",
                letter: "-2% !important",
                color: "rgba(144, 163, 191, 1)",
              }}
            >
              {/* Sport */}
              {type}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          xs
          container
          direction="column"
          padding={"0 !important"}
          sx={{ border: "2px solid yellow" }}
        >
          <Grid item xs alignSelf={"center"} sx={{ margin: "32px 0" }}>
            <img src={vehicleOne} style={{ width: "224px", height: "133px" }} />
          </Grid>
          <Grid item container spacing={2}>
            <Grid
              item
              container
              flexDirection={"row"}
              justifyContent={"space-between"}
              spacing={-3}
            >
              <Grid
                item
                container
                xs={3}
                flexDirection={"row"}
                alignItems={"center"}
                gap={1}
                flexWrap={"nowrap"}
                margin={"16px 0"}
              >
                <Box>
                  <img src={gasStation} alt="gat station" />
                </Box>

                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif !important",
                    fontWeight: "500 !important",
                    fontSize: "14px !important",
                    lineHeight: "17.64px !important",
                    color: "rgba(144, 163, 191, 1) !important",
                  }}
                >
                  {fuelCapacity}
                </Typography>
              </Grid>

              <Grid
                item
                container
                xs={3}
                flexDirection={"row"}
                alignItems={"center"}
                gap={1}
                flexWrap={"nowrap"}
              >
                <Box>
                  <img src={car} alt="gat station" />
                </Box>

                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif !important",
                    fontWeight: "500 !important",
                    fontSize: "14px !important",
                    lineHeight: "17.64px !important",
                    color: "rgba(144, 163, 191, 1) !important",
                  }}
                >
                  {transmission}
                </Typography>
              </Grid>

              <Grid
                item
                container
                xs={3}
                flexDirection={"row"}
                alignItems={"center"}
                gap={1}
                flexWrap={"nowrap"}
              >
                <Box>
                  <img src={profileIcon} alt="Profile Icon" />
                </Box>

                <Typography
                  sx={{
                    fontFamily: "Plus Jakarta Sans, sans-serif !important",
                    fontWeight: "500 !important",
                    fontSize: "14px !important",
                    lineHeight: "17.64px !important",
                    color: "rgba(144, 163, 191, 1) !important",
                  }}
                >
                  {passengerCapacity}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box>
                <span
                  style={{
                    cursor: "pointer",
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: "700 ",
                    fontSize: "20px ",
                    lineHeight: "25.2px ",
                    color: "rgba(26, 32, 44, 1)",
                  }}
                >
                  {pricePerDay}
                </span>

                <span
                  style={{
                    fontFamily: "Plus Jakarta Sans, sans-serif ",
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "17.64px ",
                    color: "rgba(144, 163, 191, 1)",
                  }}
                >
                  day
                </span>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: "116px",
                    height: "44px",
                    padding: "0 20px",
                    gap: "8px",
                    textTransform: "capitalize",
                  }}
                >
                  Rent Now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
