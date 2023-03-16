import React,{useState} from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import "./drawer.css"
const page = ["HOME","ABOUT US","OUR SERVICES","LATEST NEWS","CONTACT"]
function Drawerapp() {
    
   const [openDrawer, setOpenDrawer] = useState(false)
  return (
    
    <React.Fragment >
        <Drawer open={openDrawer}
            onClose={()=>setOpenDrawer(false)}>
            <List  className='toggle2'>
                {
                    page.map((page,index)=>(
                        <ListItemButton key={index}>
                    <ListItemIcon>
                        <ListItemText>
                            <Link className='toggle1' to={`/${page}`}>
                                {page}
                            </Link>

                        </ListItemText>
                    </ListItemIcon>
                </ListItemButton>

                    ))
                }
                
            </List>
        </Drawer>
        <IconButton sx={{color: "white",marginLeft:"auto"}} onClick={()=>setOpenDrawer(!openDrawer)}>
            <MenuIcon/>
        </IconButton>
    </React.Fragment>
  )
}

export default Drawerapp;
