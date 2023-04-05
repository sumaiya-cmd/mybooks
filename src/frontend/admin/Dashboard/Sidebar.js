import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';
export default function SideBar() {
  var navigate=useNavigate()
    return(
  <div>
    <div>
  <React.Fragment >
    <ListItemButton sx={{color:"white"}} onClick={()=>navigate('/dashboard/add_admin')}>
      <ListItemIcon>
        <ShoppingCartIcon sx={{color:"white"}} />
      </ListItemIcon>
      <ListItemText primary="Admin" />
    </ListItemButton>
    <ListItemButton sx={{color:"white"}} onClick={()=>navigate('/dashboard/listadmin')}>
      <ListItemIcon>
        <PeopleIcon sx={{color:"white"}} />
      </ListItemIcon>
      <ListItemText primary="Admin List" />
    </ListItemButton>
    <ListItemButton sx={{color:"white"}} onClick={()=>navigate('/dashboard/add_book')}>
      <ListItemIcon>
        <PeopleIcon sx={{color:"white"}} />
      </ListItemIcon>
      <ListItemText primary="Book" />
    </ListItemButton>
    <ListItemButton sx={{color:"white"}}  onClick={()=>navigate('/dashboard/listbook')}>
      <ListItemIcon>
        <BarChartIcon sx={{color:"white"}} />
      </ListItemIcon>
      <ListItemText primary="Book List" />
    </ListItemButton>
    {/* <ListItemButton  onClick={()=>navigate('/dashboard/displayallmodel')}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Model" />
    </ListItemButton>
    <ListItemButton  onClick={()=>navigate('/dashboard/displayallvehicle')}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Vehicle" />
    </ListItemButton>
 
    <ListItemButton  onClick={()=>navigate('/dashboard/featureinterface')}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Features" />
    </ListItemButton>
    <ListItemButton  onClick={()=>navigate('/dashboard/offer')}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Offers" />
    </ListItemButton>

    <ListItemButton  onClick={()=>navigate('/dashboard/whypnpinterface')}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="WhyPNP" />
    </ListItemButton> */}

    <ListItemButton sx={{color:"white"}}>
      <ListItemIcon>
        <LayersIcon sx={{color:"white"}} />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>



  {/* <React.Fragment>
    <ListSubheader component="div" inset>
      User Report
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
        </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
    <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment> */}
  </div>
    </div>
    )
}
