import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import searchIcon from "../../../assets/svg-icons/search-icon.svg";
import secondIcon from "../../../assets/svg-icons/second-icon.svg";

const IconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "inline-flex", // Change to "inline-flex"
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  input: {
    "&::placeholder": {
      fontFamily: "Plus Jakarta Sans",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "21px",
      letterSpacing: "-0.02em",
      textAlign: "left",
      color: "black",
      opacity: "1",
    },
  },
  "& .MuiInputBase-input": {
    fontFamily: "Plus Jakarta Sans",
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Search = styled("div")(({ theme, width }) => ({
  position: "relative",
  borderRadius: "0.75rem",

  marginRight: theme.spacing(2),
  border: "1px solid #E1E1E1",
  // width: width || "22%",
  width: "245px",
  height: "40px",
  borderColor: "rgb(224, 233, 244)",
}));

const SearchBar = ({ width }) => {
  return (
    <Search width={width}>
      <IconWrapper>
        <img
          src={searchIcon}
          alt="Search icon"
          style={{ height: 24, width: 24 }}
        />
      </IconWrapper>
      <StyledInputBase
        placeholder="Search something here"
        inputProps={{ "aria-label": "search" }}
      />
      <IconWrapper>
        <img
          src={secondIcon}
          alt="Search icon"
          style={{ height: 24, width: 24 }}
        />
      </IconWrapper>
    </Search>
  );
};

export default SearchBar;
