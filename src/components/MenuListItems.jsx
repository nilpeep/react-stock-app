import React, { useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import InventoryIcon from "@mui/icons-material/Inventory"
import StoreIcon from "@mui/icons-material/Store"
import StarsIcon from "@mui/icons-material/Stars"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import {  useNavigate } from 'react-router-dom';


const icons = [
    {
      icon: <SpaceDashboardIcon />,
      title: "Dashboard",
      url: "/stock/",
    },
    {
      title: "Purchase",
      icon: <ShoppingCartIcon />,
      url: "/stock/purchases/",
    },
    {
      title: "Sales",
      icon: <AttachMoneyIcon />,
      url: "/stock/sales/",
    },
    {
      title: "Firms",
      icon: <StoreIcon />,
      url: "/stock/firms/",
    },
    {
      title: "Brands",
      icon: <StarsIcon />,
      url: "/stock/brands/",
    },
    {
      title: "Products",
      icon: <InventoryIcon />,
      url: "/stock/products/",
    },
  ]

export const MenuListItems = () => {
  const [hovered, setHovered] = useState(null)
    const navigate = useNavigate()

    const handleClick = (url,index) =>{
      navigate(url)
      setActive(index)
    }

    const [active, setActive] = useState(null)
  return (
    <List>
        {icons.map((item, index) => (
   

          <ListItem 
          sx={{
            color:active == index ? 'red' : 'white', 
            "&:hover":{color:'red'},
            "&:hover .MuiSvgIcon-root":{color:'red'},
            "& .MuiSvgIcon-root":{color:'white'},
            
            
          }} 
          key={index} disablePadding onClick={()=>handleClick(item.url,index)}>
            <ListItemButton >
              <ListItemIcon sx={{color:'white'}} >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
          
        ))}
      </List>
  )
}
