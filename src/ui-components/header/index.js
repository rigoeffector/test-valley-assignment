import { useMemo } from "react";
import {
  styled,
  alpha,
  InputBase,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Stack,
  CssBaseline,
  Grid,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: "1px solid",
  margin: "0px 40px",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
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
    color: "rgb(51, 51, 51)",
    borderRadius: "4px",
    border: "1px solid rgb(221, 221, 221)",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "30ch",
        border: "1px solid #02d095",
      },
    },
  },
}));

export default function HeaderBarMenu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar
        position="sticky"
        sx={{
          background: "white",
        }}
      >
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Stack direction="row" alignItems="center">
              <Box
                sx={{
                  height: "100%",
                  width: "140px",
                }}
                component="img"
                src={"/assets/logo.svg"}
              />
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 1, ml: 1, color: "#02d095", fontSize: 12 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                sx={{
                  fontSize: 15,
                  color: "rgb(51, 51, 51)",
                  mr: 10,
                  ml: 1,
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                }}
              >
                카테고리
              </Typography>
            </Stack>
            <Search>
              <SearchIconWrapper>
                <SearchIcon
                  sx={{
                    color: "rgb(51, 51, 51)",
                  }}
                />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="살까말까 고민된다면 검색해보세요!"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="open drawer"
              sx={{ ml: 10 }}
            >
              <Box
                sx={{
                  height: "25px",
                }}
                component="img"
                src={"/assets/home-event.svg"}
              />
            </IconButton>
            <Box
              sx={{
                height: "22px",
                background: "#dddddd",
                width: "1px",
                margin: '0px 10px'
              }}
            ></Box>
            <Typography
              sx={{
                color: "rgb(51, 51, 51)",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              로그인 / 회원가입
            </Typography>
          </Toolbar>
        </Grid>
      </AppBar>
    </Box>
  );
}
