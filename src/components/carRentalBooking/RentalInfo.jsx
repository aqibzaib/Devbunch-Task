import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import vehicleOne from "../../assets/svg-icons/vehicle-01.svg";

export default function RentalInfo() {
  return (
    <Grid
      container
      direction={"column"}
      alignItems={"flex-start"}
      width={"640px"}
      minheight={"360px"}
      flexGrow={1}
      style={{
        border: "1px solid #54A6FF", // Inline style
        borderRadius: "10px",
        padding: "24px",
        background:
          "repeating-radial-gradient(circle farthest-corner at 32% 80%, #54a6ff 0%, #5eabff 10%)",
      }}
    >
      <Box width={"272px"}>
        <Typography
          sx={{
            width: "100%",
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 600,
            fontSize: " 2rem",
            lineHeight: "48px",
            color: "#FFFFFF",
          }}
          color="text.secondary"
          gutterBottom
        >
          The Best Platform for Car Rental
        </Typography>
      </Box>

      <Box sx={{ width: "284px" }}>
        <Typography
          gutterBottom
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 500,
            fontSize: "1rem",
            lineHeight: "24px",
            letterSpacing: "-2%",
            color: "rgba(255, 255, 255,1)",
          }}
        >
          Ease of doing a car rental safely and reliably. Of course at a low
          price.
        </Typography>
      </Box>
      <br />
      <Button
        variant="contained"
        sx={{
          width: "120px",
          height: "44px",
          borderRadius: "4px",
          padding: "0 20px", // Top, Right, Bottom, Left
          display: "flex",
          gap: "8px",
          backgroundColor: "yourColorHere",
          textTransform: "capitalize",
          fontFamily: "Plus Jakarta Sans",
          fontSize: "16px",
          fontWeight: "300",
          lineHeight: "24px",
          //   letterSpacing: "-0.02em",
          textAlign: "center",
        }}
      >
        Rental Car
      </Button>

      <Grid
        item
        alignSelf={{ xs: "start", md: "center" }}
        sx={{ sm: { width: "10%" } }}
      >
        <img src={vehicleOne} style={{ width: "100%" }} />
      </Grid>
    </Grid>
  );
}
