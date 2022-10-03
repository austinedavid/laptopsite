import React, {useEffect, useState} from 'react'
import Footer from '../components/Footer'
import styled from 'styled-components'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import {axiosInstance} from '../config'



// this is for categories styles
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

const LpWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 1rem;

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
    cursor: pointer;
    border-radius: 20px;
    overflow: hidden;
    color: ${({theme})=> theme.bodyText};
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
    // jsx for the categories
const Categories = () => {
    const{id} = useParams()
    const convertedId = id.toLowerCase()
    const[laptopCategories, setlaptopCategories] = useState([])

    useEffect(()=>{
        const getCat = async()=>{
            try {
                const result = await axiosInstance.get(`/getlaptopall?categories=${convertedId}`).then(res=>setlaptopCategories(res.data))
            } catch (error) {
                console.log(error)
            }
        }
        getCat()
    },[convertedId])

  return (
    <Container>
        <Wrapper>
            <Heading>{id} CATEGORY</Heading>
            <LpWrapper>
            {
                laptopCategories.map((laptop)=>(
                    <LpDisplay key={laptop._id}>
                        <LpPicturesDiv><LpPictures src={laptop.laptopImg}/></LpPicturesDiv>
                        <DetailCon>
                            <LpName>{laptop.laptopName}</LpName>
                            <LpSpec>{laptop.laptopSpec}</LpSpec>
                            <LpPrice>${laptop.laptopPrice}</LpPrice>
                            <ViewDetails>
                            <Link to={`/about/${laptop._id}`} style={{textDecoration: "none", color: "inherit"}}>
                                VIEW DETAILS
                            </Link>
                            </ViewDetails>
                        </DetailCon>
                    </LpDisplay>
                ))
            }
        </LpWrapper>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Categories