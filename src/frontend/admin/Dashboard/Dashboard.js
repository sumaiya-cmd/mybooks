import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Avatar,Grid} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/MenuBook';
import SideBar from './Sidebar';
import Addmin from "../Admincrud/Category"
import ListAdmin from "../Admincrud/DisplayAllCategory"
import Book from "../Admincrud/Bookadd"
import ListBook from "../Admincrud/Booklist"
import { BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
// import SubCategory from "../SubCategory/SubCategory";
// import DisplayAllSubCategory from "../SubCategory/DisplayAllSubCategory";
// import Company from "../Company/Company";
// import DisplayAllCompany from "../Company/DisplayAllCompany";
// import Model from "../Model/Model";
// import DisplayAllModel from "../Model/DisplayAllModel";
// import Vehicle from "../Vehicle/Vehicle"
// import DisplayAllVehicle from "../Vehicle/DisplayAllVehicle"
// import FeatureInterface from '../Featured/FeatureInterface';
// import Offer from "../Offer/Offer"
// import DisplayAllOffer from "../Offer/DisplayAllOffer"
// import WhypnpInterface from "../WhyPnp/WhypnpInterface"

export default function Dashboard() {
  return (
    <Box>
      <AppBar position="static" sx={{ background:"rgba(0,0,0,0.8)"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{color:"#6A4D3A" }}
          >
            <MenuIcon />

          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 2,color:"#6A4D3A",fontWeight:"bolder",paddingLeft:"1%" }}>
            Bookflix
          </Typography>

          <Avatar alt="Bookflix" src="/images/b.png" />
        </Toolbar>
      </AppBar>
      <Grid variant="secondary" container spacing={2}>
        <Grid item xs={12} >
        <div style={{paddingTop:10,paddingLeft:15,display:'flex',width:200,justifyContent:'center',alignItems:'center'}}>
          <img src='' style={{width:100}}/>
        </div>
        </Grid>
        <Grid item xs={2}>
         <SideBar/>
        </Grid>
        <Grid item xs={10}>
        <Routes>
        <Route element={<Addmin/>} path="/add_admin" />
        <Route element={<ListAdmin/>} path="/listadmin" />
        <Route element={<Book/>} path="/add_book" />
        <Route element={<ListBook/>} path="/listbook" />
        </Routes>
        </Grid>

      </Grid>
    </Box>
  );
}