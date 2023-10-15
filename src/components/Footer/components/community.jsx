import { Box, Grid, Hidden, Link, Typography } from "@mui/material";
import React from "react";

const linkStyle = {
  fontFamily: "Plus Jakarta Sans, sans-serif",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "-2%",
  color: "rgb(113, 113, 113) !important",
  textDecoration: "none",
  // Remove underline
};
const textStyle = {
  fontFamily: "Plus Jakarta Sans, sans-serif",
  fontWeight: 600,
  fontSize: "20px",
  lineHeight: "30px",
  letterSpacing: "-2%",

  color: "rgba(26, 32, 44, 1)",
};
const headingStyle = {
  fontFamily: "Plus Jakarta Sans, sans-serif",
  fontWeight: 700,
  fontSize: "32px",
  lineHeight: "48px",
  letterSpacing: "-3%",
  color: "rgba(53, 99, 233, 1)",
};

const Community = () => {
  return (
    <Box sx={{ backgroundColor: "white", padding: "2rem 1rem" }}>
      <Grid
        container
        // display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="start"
        // padding={1}
        rowGap={{ xs: 4, sm: 0 }}
        xs={12}
      >
        <Grid
          item
          md={3}
          sm={5}
          xs={12}
          // xs={5}
          href="#"
          sx={{
            width: { xs: "80%", sm: "152px" },
          }}
        >
          <Typography sx={headingStyle}>Morent</Typography>
          <Typography sx={linkStyle}>
            Our vision is to provide convenience and help increase your sales
            business.
          </Typography>
        </Grid>

        <Grid
          container
          item
          // md={6}
          sm={6}
          // spacing={4}
          // spacing={{ sm: 0, md: 3 }}
          flexDirection={"row"}
          // sx={{ border: "3px solid purple" }}
          sx={{ marginTop: "0px !important" }}
        >
          <Grid
            item
            container
            xs={4}
            sm={6}
            md={4}
            flexDirection={"column"}
            alignContent={{ xs: "flex-start", md: "center" }}
          >
            <Typography sx={textStyle}>About</Typography>

            <Link href="#" sx={linkStyle}>
              How it works
            </Link>
            <Link href="#" sx={linkStyle}>
              Featured
            </Link>
            <Link href="#" sx={linkStyle}>
              Partnership
            </Link>
            <Link href="#" sx={linkStyle}>
              Business
            </Link>
            <Link href="#" sx={linkStyle}>
              Relation
            </Link>
          </Grid>
          <Grid
            item
            container
            xs={6}
            md={4}
            flexDirection={"column"}
            alignContent={"center"}
          >
            <Typography sx={textStyle}>Community</Typography>

            <Link href="#" sx={linkStyle}>
              Events
            </Link>
            <Link href="#" sx={linkStyle}>
              Blog
            </Link>
            <Link href="#" sx={linkStyle}>
              Podcast
            </Link>
            <Link href="#" sx={linkStyle}>
              Invite a friend
            </Link>
          </Grid>
          <Grid
            item
            container
            xs={4}
            sm={5}
            md={4}
            flexDirection={"column"}
            alignContent={{ xs: "flex-start", md: "center" }}
            // alignContent={{ sm: "flex-start", md: "center" }}
          >
            <Typography sx={textStyle}>Social</Typography>
            <Link href="#" sx={linkStyle}>
              Discord
            </Link>
            <Link href="#" sx={linkStyle}>
              Instagram
            </Link>
            <Link href="#" sx={linkStyle}>
              Twitter
            </Link>
            <Link href="#" sx={linkStyle}>
              Facebook
            </Link>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        flexDirection={{ xs: "reverse", md: "row" }}
        justifyContent={{ xs: "space-between", md: "none" }}
        gap={1}
        sx={{ padding: "1rem 0 0 0" }}
      >
        <Grid xs={4} md={8} sx={linkStyle}>
          <Hidden mdDown>©2022 MORENT. All rights reserved</Hidden>
          <Hidden mdUp> Privacy & Policy</Hidden>
        </Grid>
        <Grid xs={4} md={2} sx={linkStyle}>
          <Hidden mdDown> Privacy & Policy</Hidden>
          <Hidden mdUp> Terms & Condition</Hidden>
        </Grid>
        <Grid xs={12} md={2} sx={linkStyle}>
          <Hidden mdDown> Terms & Condition</Hidden>
          <Hidden mdUp>©2022 MORENT. All rights reserved</Hidden>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Community;
