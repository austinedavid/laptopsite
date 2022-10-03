import React, {useState, useEffect}from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import hp from '../images/hp.jpg'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {addToCart} from '../Slice/Cart'
import {axiosInstance} from '../config'

// here is for styles
const Container = styled.div`
    width: 100%;
 
    padding-top: 2rem;
   
`
const Wrapper = styled.div`
       max-width: 1000px;
       min-height: 400px;
        margin: 0 auto;
        padding-left: 1rem;
        padding-right: 1rem;
       
     
    `
const Heading = styled.h5`
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme})=> theme.catHeadingBg};
    margin-bottom: 1rem;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
    color: ${({theme})=> theme.catHeadingColor};
        
`
const DetailContainer = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${({theme})=> theme.catBoxBorderColor};
  color: ${({theme})=> theme.bodyText};
  display: grid;
  grid-template-columns: 40% 60%;
  margin-bottom: 2rem;
  @media(max-width: 600px){
    grid-template-columns: 1fr;
  }
`
const ImageCon = styled.div`
  width: 100%;
  height: 250px;
  
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Lpname = styled.h5`
  font-size: 20px;
  font-weight: bold;
`
const HpDesc = styled.p`
  
`
const HpPrice = styled.h5`
  color: blue;
  font-weight: bold;
  font-size: 25px;
`
const PriceCon = styled.div`
  display: flex;
  gap: 2rem;
`
const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
const Btn = styled.button`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-right: 1rem;
  padding-left: 1rem;
  font-size: 20px;
  cursor: pointer;
  background-color: #8d8787;
  border: 0px;
  transition: all 1s ease-in-out;

  &:hover{
    background-color: #312e2e;
    color: white;
    border: 0px;
  }
`
const QtnNumber = styled.p`
  font-size: 20px;
  font-weight: bold;
  `

const Adtocart = styled.button`
  padding: 1rem;
  font-size: 20px;
  font-weight: bold;
  background-color: green;
  color: white;
  border: 0px;
  border-radius: 20px;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover{
    background-color: #507350;
  }
`

// here is the jsx
const About = () => {
  const [PdQnt, setpdQnt] = useState(1)
  const dispatch = useDispatch()
  const [specLaptop, setspecLaptop] = useState([])
  const{id} = useParams()
  
  const {product} = useSelector((state)=> state.cart)
  console.log(product)
  useEffect(()=>{
    const getSpec = async()=>{
      try {
        const result  = await axiosInstance.get(`/getspec/${id}`).then((res)=>setspecLaptop(res.data))
      } catch (error) {
        console.log(error)
      }
    }
    getSpec()
  },[id])

// handle change in pdQnt number 
const newPrice = specLaptop.laptopPrice * PdQnt

  // function sumOfArray(Value){
  //   let total = 0
  //   for(let a of Value)
  //   total += a
  //  console.log(total)
  // }
  // sumOfArray(checkingValue)

  return (
    <Container>
      <Wrapper>
        <Heading>ABOUT {specLaptop.laptopName}</Heading>
        <DetailContainer>
          <ImageCon><Image src={specLaptop.laptopImg}/></ImageCon>
          <Details>
            <Lpname>{specLaptop.laptopName}</Lpname>
            <HpDesc>{specLaptop.laptopDesc}</HpDesc>
            <PriceCon>
              <HpPrice>${newPrice}</HpPrice>
            <Quantity>
              <Btn onClick={()=>{PdQnt > 1 && setpdQnt((qnt)=>qnt -1)}}>-</Btn>
              <QtnNumber>{PdQnt}</QtnNumber>
              <Btn onClick={()=>{setpdQnt((qnt)=>qnt +1)}}>+</Btn>
            </Quantity>
            </PriceCon>
            <Adtocart onClick={()=>{
             
                dispatch(addToCart({...specLaptop, laptopPrice: newPrice}))
              
              }}>Add item to Cart</Adtocart>
          </Details>
        </DetailContainer>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default About