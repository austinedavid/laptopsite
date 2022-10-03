import React from 'react'
import styled from 'styled-components'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';


// below here are the styles
const Container = styled.div`
    width: 100%;
  
    padding-top: 2rem;
    background-color: ${({theme})=> theme.footerBg};
    color: white;
`
const Wrapper = styled.div`
       max-width: 1000px;
       min-height: 400px;
       padding-left: 1rem;
        padding-right: 1rem;
        margin: 0 auto;
      display: flex;
      flex-direction: column;
    `

const TopDiv = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;

    @media(max-width: 1030px){
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }
    @media(max-width: 900px){
        grid-template-columns: repeat(3, 1fr);
        gap: 2rem;
    }
    @media(max-width: 600px){
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
    @media(max-width: 460px){
        grid-template-columns: 1fr;
        gap: 2rem;
    }
`
const BottomDiv = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 4rem;
    padding-top: 4rem;
`
const OurService = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const OurPartnership = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const OurPromotion = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const AboutUs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Hr = styled.hr`
    background-color: white;
    margin-top: 2rem;
    margin-bottom: 2rem;
`
const SocialMedia = styled.div`
    display: flex;
    gap: 1rem;
`

// below here is our functional component
const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <TopDiv>
                <p>AustineGlobals</p>
                <OurService>
                    <p>OUR SERVICE</p>
                    <p>we sell all type of laptops</p>
                    <p>we repair laptops</p>
                    <p>we can also buy back</p>
                    <p>also selling hard disc</p>
                </OurService>
                <OurPartnership>
                    <p>OUR PARTNERSHIP</p>
                    <p>partnering with Gmode agency</p>
                    <p>positive voltage electrics</p>
                    <p>charles studio</p>
                </OurPartnership>
                <OurPromotion>
                    <p>OUR PROMOTION</p>
                    <p>we promote individual brand</p>
                    <p>also promote company brand</p>
                    <p>those buying in bulk, price is reduced for them</p>
                </OurPromotion>
                <AboutUs>
                    <p>ABOUT US</p>
                    <p>AustineGlobals is one of the best laptop selling platform, <br/>
                        we also refund you your money, incase their is any fault.
                        this is one of the reasons we are the best
                    </p>
                </AboutUs>
            </TopDiv>
            <Hr/>
            <BottomDiv>
                <SocialMedia>
                    <InstagramIcon sx={{cursor: "pointer", fontSize: "2rem", color: "#52020a"}}/>
                    <FacebookIcon sx={{cursor: "pointer", fontSize: "2rem", color: "blue"}}/>
                    <WhatsAppIcon sx={{cursor: "pointer", fontSize: "2rem", color: "green"}}/>
                    <TelegramIcon sx={{cursor: "pointer", fontSize: "2rem", color: "#030c30"}}/>
                    <TwitterIcon sx={{cursor: "pointer", fontSize: "2rem", color: "#314285"}}/>
                </SocialMedia>
            </BottomDiv>
        </Wrapper>
    </Container>
  )
}

export default Footer