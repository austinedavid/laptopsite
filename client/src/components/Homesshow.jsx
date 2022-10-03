import React from 'react'
import styled from 'styled-components'
import advertImg from '../images/homeAdvert.jpg'


// styling for our Homeshow
const Container = styled.div`
    width: 100%;
   padding-left: 1rem;
    padding-right: 1rem;
    background-color: #bba007;
    
    
`
const Wrapper = styled.div`
       max-width: 1000px;
       min-height: 400px;
        margin: 0 auto;
       display: grid;
       grid-template-columns: 40% 60%;

       @media(max-width: 500px){
        min-height: 100vh;
        grid-template-columns: 1fr;
        gap: 1rem;
        
       }
      
`
const Left = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Right = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;

    @media(max-width: 500px){
      object-fit: fill;
       }
`

const Companyname = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    
`
const  Writeup = styled.p`
    font-size: 1rem;
`
const Writeupcon = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const Span = styled.span`
    font-weight: bold;
`
const Homesshow = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Writeupcon>
                    <Companyname>Hello,welcome to AustineGlobals</Companyname>
                    < Writeup>This is actually the best platform where you can get your digital products, <br/>
                        we sell all variaties of laptops, ranging from <Span>HP, DELL, APPLE, ALIENS </Span>
                        and much more
                    </ Writeup>
                </Writeupcon>
           
            </Left>
            <Right>
                <Img src={advertImg}/>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Homesshow