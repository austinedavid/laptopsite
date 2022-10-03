import React,{useState, useEffect} from 'react'
import styled from 'styled-components'

import {Rating} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {axiosInstance} from '../config'

// below here we create the styles for categories
const Container = styled.div`
    width: 100%;
   padding: 1rem;
    background-color: ${({theme})=> theme.latestBg};
    margin-top: 1rem;
    
`
const Heading = styled.p`
    color: ${({theme})=> theme.catHeadingColor};
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: ${({theme})=> theme.catHeadingBg};
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
       max-width: 1000px;
       min-height: 400px;
        margin: 0 auto;
      
    `
const LpWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media(max-width: 820px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 570px){
        grid-template-columns: 1fr;
    }
`
const LpDisplay = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${({theme})=> theme.bodyText};
    cursor: pointer;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 1px 1px 5px 1px ${({theme})=> theme.latestBoxShadow};
    transition: all 0.4s ease-in-out;

    
`

const LpPicturesDiv = styled.div`
    width: 100%;
    height: 170px;
    
`
const LpPictures = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const DetailCon = styled.div`
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`
const LpName = styled.h5`
    font-weight: bold;
    font-size: 24px;
`

const LpSpec = styled.p`
    font-style: italic;
`
const LpPrice = styled.p`
    color: blue;
    font-size: 20px;
    font-weight: bold;
`
const ViewDetails = styled.div`
    padding: 5px 10px;
    background-color: green;
    color: white;
    border-radius: 10px;
    display: flex;
    align-self: flex-end;
    transition: all 0.3s ease-in-out;

    &:hover{
        background-color: #3a5c3a;
    }
`

// below is our jsx
const LatestLaptop = () => {
    // use state to fetch our latest laptop.
    const [latestCategories, setlatestCategories] = useState([])
    const navigate = useNavigate()

    // useEffect to run once and fetch laptop
    useEffect(()=>{
        const fetching = async()=>{
            try {
                const fResult = await axiosInstance.get('/getlaptopall?latest=latest').then((res)=>setlatestCategories(res.data))
                
            } catch (error) {
                console.log(error)
            }
        }
        fetching()
    },[])
  return (
    <Container>
        <Wrapper>
        <Heading>LATEST LAPTOP IN STOCK</Heading>
        <LpWrapper>
            {
                latestCategories.map((laptop)=>(
                    <LpDisplay key={laptop._id}>
                        <LpPicturesDiv><LpPictures src={laptop.laptopImg}/></LpPicturesDiv>
                        <DetailCon>
                            <LpName>{laptop.laptopName}</LpName>
                            <LpSpec>{laptop.laptopSpec}</LpSpec>
                            <LpPrice>{laptop.laptopPrice}</LpPrice>
                            <ViewDetails onClick={()=>navigate(`/about/${laptop._id}`)}>
                            
                                VIEW DETAILS
                            
                            </ViewDetails>
                        </DetailCon>
                    </LpDisplay>
                ))
            }
        </LpWrapper>
        </Wrapper>
    </Container>
  )
}

export default LatestLaptop