import "./App.css";
// import Index from "./components/Carinfo";
import CarList from "./components/Carinfo/CarList";
import Community from "./components/Footer/components/community";
import Navbar from "./components/Navbar/Navbar";
import RentalInfo from "./components/carRentalBooking/RentalInfo";
import RentalInfo1 from "./components/carRentalBooking/RentalInfo1";

import Box from "@mui/material/Box";
function App() {
  return (
    <>
      <Box sx={{ background: " rgba(246, 247, 249, 1)" }}>
        <div>
          <Navbar />
        </div>
        <div style={{ marginTop: "7.75rem", padding: "0 24px" }}>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <RentalInfo />

            <RentalInfo1 />
          </div>
          <div>r</div>
          <div style={{ padding: "0 0 24px 0" }}>
            {/* <Index /> */}

            <CarList />
          </div>
          <Community />
          {/* <PopularCar /> */}
        </div>
      </Box>
    </>
  );
}

export default App;
