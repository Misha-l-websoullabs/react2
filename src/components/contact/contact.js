import React from 'react'
import {  Card, CardActions, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import "./contact.css"

function Contact() {
  return (
    <div className='conthight'>
    <Box className='contact1'>
    <Card className='contcard' sx={{backgroundColor:'#ffffff', borderColor:'#dfdfe3'}} >
        <CardContent className=''>
            <Typography  ><h4 className='cont_head'>GET IN TOUCH</h4></Typography>
            <Typography  ><form className='form1' action="">
                <input className='input1' type="text" placeholder='NAME*'/><br />
                <input className='input1' type="text" placeholder='EMAIL ADDRESS*'/>
                <br />
                <input className='input1' type="text" placeholder='PHONE NUMBER*'/><br />
                <textarea className='message1' placeholder='MESSAGE*' name="message" id="" cols="30" rows="10"></textarea>
                <br />
                </form></Typography>
        </CardContent>
        <CardActions>
            <button className='cont_button1'>SEND</button>
        </CardActions>
    </Card>
   </Box>
   <div>
     <Box>
    <Card className='contact2' sx={{backgroundColor:'#3d3d3d'}}>
        <CardContent className=''>
            <Typography  ><h4 className='cont_text1'>1ST FLOOR</h4></Typography>
            <Typography  ><h4 className='cont_text2'>NORTH WESTGATE HOUSE</h4></Typography>
            <Typography  ><h4 className='cont_text2'>HARLOW, ESSEX</h4></Typography>
            <Typography  ><h4 className='cont_text2'>ENGLEND,CM20 1YS</h4></Typography>
            <Typography  ><h4 className='cont_text3'>PHONE</h4></Typography>
            <Typography  ><h4 className='cont_text2'>+44 (0)330 223 6762</h4></Typography>
            <Typography  ><h4 className='cont_text3'>EMAIL</h4></Typography>
            <Typography  ><h4 className='cont_text4'>INFO@OMNITELCONSONSULTANCY. COM</h4></Typography>
        </CardContent>
        
    </Card>
   </Box>
   </div>
   </div>
   
  )
}

export default Contact
