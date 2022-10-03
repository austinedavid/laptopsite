import React from 'react'
import styled from 'styled-components'
import {laptopCategories} from '../Utils/Resource'
import {Rating} from '@mui/material'
import {Link} from 'react-router-dom'

// below here we create the styles for categories
const Container = styled.div`
    width: 100%;
   padding-left: 1rem;
    padding-right: 1rem;
    
    
    
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
    cursor: pointer;
    border: 1px solid ${({theme})=> theme.catBoxBorderColor};
    transition: all 0.4s ease-in-out;
    color: ${({theme})=> theme.bodyText};

    &:hover{
        background-color: ${({theme})=> theme.hoverBg};
    }
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

const LpDesc = styled.p`
    font-style: italic;
`

// below is our jsx
const LpCategories = () => {
  return (
    <Container>
        <Wrapper>
        <Heading>CATEGORIES OF LAPTOPS IN STOCK</Heading>
        <LpWrapper>
            {
                laptopCategories.map((laptop)=>(
                    <Link to={`/category/${laptop.name}`} style={{textDecoration: "none", color: "inherit"}}>
                    <LpDisplay key={laptop.id}>
                        <LpPicturesDiv><LpPictures src={laptop.image}/></LpPicturesDiv>
                        <DetailCon>
                            <LpName>{laptop.name}</LpName>
                            <LpDesc>{laptop.about}</LpDesc>
                            <Rating name="half-rating-read" defaultValue={laptop.rating} precision={0.5} readOnly />
                        </DetailCon>
                    </LpDisplay>
                    </Link>
                ))
            }
        </LpWrapper>
        </Wrapper>
    </Container>
  )
}

export default LpCategories