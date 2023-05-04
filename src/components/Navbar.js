import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import AppBar from "@mui/material/AppBar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  FormControl,
  InputLabel,
  Select,
  Toolbar,
  Stack,
  MenuItem,
  ImageListItem,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function ButtonAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", color: "black" }}>
      <Toolbar>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-standard-label">Select</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={"age"}
            onChange={() => alert("dashboard")}
            label="Age"
          >
            <MenuItem value="Select">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search anything…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Stack
          sx={{
            marginLeft: "700px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          direction="row"
          spacing={2}
        >
          <ChatIcon style={{ margin: "0px 5px" }} />
          <NotificationsIcon style={{ margin: "0px 5px" }} />

          <ImageListItem>
            <img
              src={`https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`}
              alt={"Loading"}
              loading="lazy"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginLeft: "20px",
              }}
            />
          </ImageListItem>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
