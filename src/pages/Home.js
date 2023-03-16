
import Card1 from '../components/home/card'
import React from 'react'
import Banner from '../components/home/banner'
import Part2 from '../components/home/part2'
import Part3 from '../components/home/part3'
import Part4 from '../components/home/Part4'
import Contact from '../components/contact/contact'
function Home() {
  return (
    <div>
      <Banner/>
      <Card1/>
      <Part2/>
      <Part3/>
      <Part4/>
      <Contact />
    </div>
  )
}

export default Home;
