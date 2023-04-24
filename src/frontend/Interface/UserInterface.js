import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Slide from "./Slides";
import Card from "./Cards";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useState, useEffect } from 'react';
import BookDetails from './BookDetails';
import AddToCart from './AddCart';
import { useNavigate } from 'react-router-dom';
// import SideBar from './Sidebar';
// import Addmin from "../Admincrud/Category"
// import ListAdmin from "../Admincrud/DisplayAllCategory"
// import Book from "../Admincrud/Bookadd"
// import ListBook from "../Admincrud/Booklist"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#fff",
    '&:hover': {
        backgroundColor: "#fff",
    },
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
    color: "#000000",
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'black',
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
export function CardBody() {

    const [data, setdata] = useState(null);

    useEffect(() => {
        if (!data) fetchdata()
    }, []);

    const fetchdata = () => {
        fetch(`/Data/book.txt`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setdata(data)
            }
            );
    }
    return (
        <div>
            <div class="row">
                {
                    (!data) ? <h1>LOADING...</h1 > :
                        data.map((e) => {
                            return <div class="col-lg-4">
                                <Card item={e} />
                            </div>
                        })
                }

            </div>
        </div>
    )
}
export function Body() {
    return (
        <div>
            <Grid item xs={12}>
                <Slide />
            </Grid>
            <Grid item xs={12} sx={{ fontSize: "30pt", textAlign: "center", color: "white", fontWeight: "bold", paddingTop: "3vw" }}>
                OUR COLLECTION
            </Grid>
            <Grid item xs={12}>
                <div class="container p-3">
                <CardBody/>
                </div>
            </Grid>
        </div>
    )
}

export default function Dashboard() {
    var navigate = useNavigate()
    return (
        <Box style={{ backgroundColor: "black", }}>
            <AppBar
                sx={{
                    backgroundColor: "black",
                    // backgroundSize: "cover", 
                    borderBottom: 1,
                    borderColor: "black",
                    zIndex: "999"
                }}>
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
                        onClick={()=>navigate('/userinterface/mycart')}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Grid item xs={12} class="bg-dark">
                <Grid variant="secondary" class="container" container>
                    <Routes>
                        <Route element={<Body />} path="/" />
                        <Route element={<BookDetails />} path="/bookdetails" />
                        <Route element={<AddToCart />} path="/mycart" />
                    </Routes>
                </Grid>
            </Grid>
        </Box>
    );
}