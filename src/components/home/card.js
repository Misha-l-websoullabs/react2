import React from 'react'
import { Box } from '@mui/system'
import "./card.css"
import {  Card, CardActions, CardContent, Typography } from '@mui/material'
function Card1() {
  return (
   <Box>
    <Card className='card1'>
        <CardContent className='card2'>
            <Typography  ><h4 className='text1'>GIVE YOUR PROJECTS THE BEST CHANCE OF SUCCESS!</h4></Typography>
            <Typography  ><h4 className='text2'>GET A FREE CONSULTATION</h4></Typography>
        </CardContent>
        <CardActions>
            <button className='button1'>GET STARTED</button>
        </CardActions>
    </Card>
   </Box>
  )
}

export default Card1
