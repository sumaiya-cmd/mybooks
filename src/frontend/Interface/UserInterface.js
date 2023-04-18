import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Slide from "./Slides";
import Card from "./Cards";
import Image from "material-ui-image";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
// import SideBar from './Sidebar';
// import Addmin from "../Admincrud/Category"
// import ListAdmin from "../Admincrud/DisplayAllCategory"
// import Book from "../Admincrud/Bookadd"
// import ListBook from "../Admincrud/Booklist"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#000000",
    // '&:hover': {
    //     backgroundColor: "transparent",
    // },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'white',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '18ch',
            '&:focus': {
                width: '25ch',
            },
        },
    },
}));
export default function Dashboard() {
    return (
        <Box>
            <AppBar position="static" sx={{ backgroundImage: `url("https://68.media.tumblr.com/00017a0fa421177a169f926b7bda9cfb/tumblr_njq93rYxyQ1u17yx1o1_500.gif")`, backgroundSize: "cover" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ color: "#fff", marginLeft: "2%", background: "#6A4D3A", padding: "0.3%" }}
                    >
                        <Avatar alt="Bookflix" src="/images/B2.png" />
                    </IconButton>

                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, color: "#6A4D3A", fontWeight: "bolder", paddingLeft: "2%" }}>
                        Bookflix
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search Genre…"
                        //   inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ color: "#fff", marginLeft: "2%", background: "#6A4D3A" }}
                    >
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>

            <Grid variant="secondary" container>
                <Grid item xs={12} sx={{margin:"0.5% 0%"}}>
                    <Slide/>
                </Grid>
                <Grid item xs={12} sx={{margin:"0.5% 0%"}}>
                    <Card/>
                </Grid>
            </Grid>
        </Box>
    );
}