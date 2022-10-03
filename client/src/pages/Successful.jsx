import React from 'react'
import successImg from '../images/successful.jpg'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({theme})=> theme.footerBg};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`
const Img = styled.img`
  width: 15rem;
  border-radius: 20px;
`
const Message = styled.h4`
  color: white;
  font-weight: bold;
`

const Successful = () => {
  return (
    <Container>
      <Img src={successImg}/>
      <Message>Payment Successful!!! <Link to='/'>Shop more</Link></Message>
    </Container>
  )
}

export default Successful