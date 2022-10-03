import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Homesshow from '../components/Homesshow'
import LatestLaptop from '../components/LatestLaptop'
import LpCategories from '../components/LpCategories'
import Navbar from '../components/Navbar'

// here we apply our styles
const Container = styled.div`
    width: 100%;
    
`


const Home = () => {
  return (
    <Container>
        <Homesshow/>
        <LpCategories/>
        <LatestLaptop/>
        <Footer/>
    </Container>
  )
}

export default Home