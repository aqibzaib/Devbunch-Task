import React from "react";
import CarInfo from "./components/CarInfo";
import { carData } from "../../data.js";
import { Box, Button, Grid, Typography } from "@mui/material";

export default function CarList() {
  return (
    <div>
      {carData.map((category, index) => (
        <div key={index}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              alignContent: "center",
              height: "44px",

              padding: "1.5rem 0 1rem 0",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "20.16px",
                  color: "rgba(144, 163, 191, 1)",
                }}
              >
                {category.category}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "20.16px",
                  color: "rgba(53, 99, 233, 1)",
                }}
              >
                View All
              </Typography>
            </Box>
          </Box>

          <Grid
            container
            spacing={2}
            gap={0}
            // gap={14}
            // flexBasis={1}
            // flexWrap={"wrap"}
          >
            {category.items.map((car, carIndex) => (
              <Grid item key={carIndex} xs={12} sm={6} md={4} lg={3}>
                <CarInfo
                  name={car.name}
                  type={car.type}
                  fuelCapacity={car.fuelCapacity}
                  transmission={car.transmission}
                  passengerCapacity={car.passengerCapacity}
                  pricePerDay={car.pricePerDay}
                  rentNow={car.rentNow}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      ))}

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          height: "44px",
          marginTop: "1.5rem",
          padding: "0 0.5rem",
        }}
      >
        <Box></Box>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "156px",
            height: "44px",
            padding: "0px 20px",
            borderRadius: "4px",
            gap: "8px",
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "-2%",
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          Show more car
        </Button>
        <Typography
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "21px",
            letterSpacing: "-2%",
            textAlign: "right",
            color: "rgba(144, 163, 191, 1)",
          }}
        >
          120 Car
        </Typography>
      </Box>
    </div>
  );
}
