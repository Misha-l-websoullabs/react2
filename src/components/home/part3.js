import React from 'react';
import { Box } from '@mui/system'
import "./part3.css"
import {  Card, CardActions, CardContent, Typography } from '@mui/material'


function Part3() {
  return (
    <div className='main3'>
        <div className='div1_part3'>
        <Box>
    <Card className='card1_part3  reveal' style={{backgroundColor:'#f2993f'}}>
        <CardContent className='part3_card2'>
            <Typography  ><h4 className='part3_text1'>OUR SERVICES</h4></Typography>
            <Typography  ><h4 className='part3_text2'>Omnitel Consultancy offers a variety of project management consulting and recruiting services within the Telecommunication and IT industries</h4></Typography>
        </CardContent>
        <CardActions>
            <button className='part3_button1'>GET STARTED</button>
        </CardActions>
    </Card>
   </Box>
        </div>
        <div className='div2_part3'>
            <Box>
                <Card className='card2_part3  reveal' style={{backgroundColor:'#3d3d3d'}}>
                    <CardContent>
                        <Typography><h4 className='div2_text1'>Our Services Include:</h4></Typography>
                        <Typography><ul className='items'>
                            <li className='item'>Process Streamlining and Implementation</li>
                            <li className='item'>End-to-end Project Management services using industry best practices</li>
                            <li className='item'>Creation and Maintenance of key Project Management Artefacts</li>
                            <li className='item'>Implement Effective Stakeholder Engagement Strategy
</li>
                            <li className='item'>3rd Party Supplier and Vendor Management</li>
                            <li className='item'>Quality Assurance of Project Deliverables</li>
                            <li className='item'>And much more….</li>
                            </ul></Typography>
                    </CardContent>
                </Card>
            </Box>
        </div>
        <div className='line_part3'><hr></hr></div>

       
    </div>

  )
}

export default Part3