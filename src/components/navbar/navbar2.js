import React from 'react'
import "./navbar2.css";
import { AppBar, Tabs, Toolbar ,useMediaQuery,useTheme, Typography} from '@mui/material';
import Drawerapp from './Drawer';
import { Link } from 'react-router-dom';
const page = ["HOME","ABOUT US","OUR SERVICES","LATEST NEWS","CONTACT"]


function Navbar2() {
  const theme=useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  console.log(isMatch)
 
 
  return (
    <React.Fragment>
        <AppBar className="appbar" sx={{backgroundColor:"#f89a42"}}>
            <Toolbar>
                <img className='logo1' src="https://www.omnitelconsultancy.com/wp-content/uploads/2020/03/Logo.png" alt="" srcset="" />
                {
                  isMatch ? (
                    <>
                    <Typography>

                    </Typography>
                    <Drawerapp />
                    </>
                  ) : (
                    <Tabs  className="tab1"  >
                      {
                        page.map((page,index)=>(
                          <Link className='tab2' to={`/${page}`}>
                                {page}
                            </Link>
                        ))
                      }
                    
                    
                </Tabs>

                  )
                }
                
            </Toolbar>
            
        </AppBar>
    </React.Fragment>
  )
}

export default Navbar2
