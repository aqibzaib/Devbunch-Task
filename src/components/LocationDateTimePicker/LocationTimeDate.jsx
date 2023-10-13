import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

export default function LocationTimeDate() {
  return (
    <div>
      <InputLabel id="label">Age</InputLabel>
      <Select labelId="label" id="select" value="20">
        <MenuItem value="10">Ten</MenuItem>
        <MenuItem value="20">Twenty</MenuItem>
      </Select>
      <TextField id="select" label="Age" value="20" select>
        <MenuItem value="10">Ten</MenuItem>
        <MenuItem value="20">Twenty</MenuItem>
      </TextField>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          // value={age}
          // onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
