import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import vehicleTwo from "../../assets/svg-icons/vehicle-02.svg";
import background from "../../assets/svg-icons/backgroundd.png";
export default function RentalInfo1() {
  return (
    <Grid
      container
      display={{ xs: "none", md: "flex" }}
      direction={"column"}
      alignItems={"flex-start"}
      width={"640px"}
      minHeight={"360px"}
      flexGrow={1}
      style={{
        border: "1px solid #54A6FF", // Inline style
        borderRadius: "10px",
        padding: "24px",
        // background:
        //   "repeating-radial-gradient(circle farthest-corner at 32% 80%, #54a6ff 0%, #5eabff 10%)",
        // backgroundColor: "#5d6eff",
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundRadius: "10px",
        overflow: "hidden",
        // backgroundSize: "20px",
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
          Easy way to rent a car at a low price
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
          Providing cheap car rental services and safe and comfortable
          facilities.
        </Typography>
      </Box>
      <br />
      <Button
        variant="contained"
        // color="#54A6FF"
        sx={{
          backgroundColor: "#54A6FF",
          width: "120px",
          height: "44px",
          borderRadius: "4px",
          padding: "0 20px", // Top, Right, Bottom, Left
          display: "flex",
          gap: "8px",

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
      <Grid item alignSelf={"center"}>
        <img src={vehicleTwo} />
      </Grid>
    </Grid>
  );
}
