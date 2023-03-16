
import React from 'react'
import "./part4.css"
import img1 from "./img/part4.jfif"
function Part4() {
  return (
    <div className='main4 reveal'>
        <div className='div1_part4'>
            
                <div className='part4_card1'>
                    
                            <h6 className='part4_head1'>WHAT WE DELIVER</h6>
                            <h3 className='part4_head2'>SUCCESS BY DESIGN</h3>
                            <hr className='under' style={{width:'10%',backgroundColor:'#f2993f'}}/>
                            <p className='part4_para1'>Omnitel Consultancy provide clients with candid and objective advise that they need to make good project decisions by developing achievable and realistic plans with integrity. With Omnitel Consultancy, your projects will progress with confidence and assurance of achieving set out goals and objectives within timescale and budget.</p>
                       
                    <button className='part4_button1'>READ MORE</button>
            
                </div>
            
        </div>
        <div className="part4_img">
            <div className='part4_img1'>
            <img className='part4_img2' src={img1} alt="" srcset="" /></div>
        </div>
    </div>
  )
}

export default Part4