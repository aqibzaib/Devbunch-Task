import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import heartIcon from "../../../assets/svg-icons/heart-icon.svg";
import favoriteHeart from "../../../assets/svg-icons/favorite-heart.svg";
import vehicleOne from "../../../assets/svg-icons/vehicle-01.svg";
import { Box, Button, styled } from "@mui/material";
import gasStation from "../../../assets/svg-icons/gas-station.svg";
import car from "../../../assets/svg-icons/Car.svg";
import profileIcon from "../../../assets/svg-icons/profile-2user.svg";
import { useState } from "react";
const MyImage = styled("img")(({ theme }) => ({
  width: "221px", // Default width
  height: "44px", // Default height

  [theme.breakpoints.only("sm")]: {
    width: "224px", // Width on 'sm' and larger screens
    height: "133px", // Height on 'sm' and larger screens
  },
}));

export default function CarInfo(props) {
  const {
    name,
    type,
    fuelCapacity,
    transmission,
    passengerCapacity,
    pricePerDay,
    rentNow,
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
        width: { xs: "100%", sm: "280px" }, // Set the width to be the same as the outer Grid
        height: 355,
        borderRadius: "10px",
      }}
    >
      <Grid
        container
        spacing={5}
        sx={{
          width: { xs: "100%", sm: "255px" }, // Set the width to be the same as the Paper
          height: 388,
          margin: 0,
          padding: 0,
        }}
        // justifyContent={"stretch"}

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
          container
          direction={{ xs: "row", sm: "column" }}
          padding={"0 !important"}
          xs={2}
          sm={12}
          flexWrap={{ xs: "nowrap", sm: "wrap" }}
          alignItems={{ xs: "flex-start" }}
          // flexGrow={1}
        >
          <Grid
            item
            alignSelf={{ xs: "center", sm: "center" }}
            sx={{ margin: "32px 0" }}
          >
            <MyImage src={vehicleOne} alt="Vehicle One" />
          </Grid>
          {/* 2nd last row start */}
          <Grid
            item
            container
            spacing={2}
            justifyContent={{ xs: "flex-start", sm: "space-between" }}
          >
            <Grid
              item
              container
              xs={1}
              sm={11}
              flexDirection={{ xs: "column", sm: "row" }}
              // flexDirection={"row"}
              justifyContent={"space-between"}
              flexWrap={{ xs: "nowrap", sm: "wrap" }}
              gap={1}
              spacing={-3}
              justifySelf={"flex-end"}
              alignSelf={"flex-end"}
              // width={"100%"}
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

            {/* 2nd last row end */}

            {/* Last row of div */}
            <Grid
              item
              container
              // justifyContent={"space-between"}
              justifyContent={{ xs: "flex-end", sm: "space-between" }}
              alignItems={"center"}
              // xs={12}
              flexWrap={{ xs: "nowrap", sm: "wrap" }}
              spacing={{ xs: 8, sm: 0 }}
              paddingTop={{
                sm: "0px !important",
                md: "16px !important",
              }}
            >
              <Grid item>
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
              </Grid>
              <Grid item>
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
