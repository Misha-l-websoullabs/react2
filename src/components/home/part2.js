import React from 'react'
import "./part2.css"
import img1 from "./img/img2.png"

function Part2() {
  return (
    <div className='main'>
        <div className='img'>
            <img className='img1' src={img1} alt="img" srcset="" />
        </div>
        <div className='details'>
          <h4 className='head1'>THE COMPANY</h4>
          <h1 className='head2'>About Omnitel Consultancy</h1>
          <hr className='line' style={{width:"15%",background:"#f2993f"}}/>
          <p className='sub1'>Omnitel Consultancy is a specialist project management consulting and recruiting firm that specialises in turning key projects into success by working collaboratively with clients and key stakeholders. Our specialist project management team consists of professional and seasoned consultants in the telco and IT industries.</p>
          <p className='sub2'>Our broad range of carefully selected partnership with experienced suppliers mean we can scale up and down quickly to meet client requirements.</p>
        </div>
      
    </div>
  )
}

export default Part2
