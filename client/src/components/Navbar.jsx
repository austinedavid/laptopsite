import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Badge} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {setDarkMode, setLightMode} from '../Slice/Theme'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import {clearUser} from '../Slice/user'
import emptyCart from '../images/empty_cart.jpeg'
import axios from 'axios'
import {successfulBuys} from '../Slice/purchases'


// stying below here
const Container = styled.div`
    width: 100%;
    padding: 1rem 1rem;
    background-color: ${({theme})=> theme.navBg};
    position: sticky;
    top: 0;
    z-index: 999;
 
`
const Wrapper = styled.div`
       max-width: 1000px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
`
const Logo = styled.p`
    color: ${({theme})=> theme.navText};
    font-weight: bold;
    font-size: 20px;
    font-family: 'Roboto Condensed', sans-serif;
    cursor: pointer;
`
const RightContainer = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;

    @media (max-width: 400px){
        gap: 1rem;
    }
`
const Cart = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    @media (max-width: 400px){
        gap: 0rem;
    }
`
const Register = styled.div`
    display: flex;
    align-items: center;
`
const SideDiv = styled.div`
    position: absolute;
    top: 3.3rem;
    width: 400px;
    height: 100vh;
    background-color: ${({theme})=> theme.navBg};
    right: 0;
    transition: all 0.5s ease-in-out;
    display: block;
    transform: translateX(${(prop)=>prop.sidebar?"0%" : "100%"});
    border-left: 1px solid ${({theme})=> theme.catBoxBorderColor};
    border-top: 1px solid ${({theme})=> theme.catBoxBorderColor};
    color: ${({theme})=> theme.bodyText};
    overflow-y: scroll;

    @media(max-width: 600px){
        width: 100%;
    }
`

const Showuser = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const Usersname = styled.p`

`

const ShowRegister = styled.div`
      width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ShowRegDiv = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-self: center;
    gap: 1rem;
    align-items: center;
`
const RegHeading = styled.p`
    font-size: 20px;
    font-weight: bold;

`
const RegBtn = styled.button`
    padding: 0.5rem;
    background-color: #4a6c4a;
    color: white;
    border: 0px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover{
        background-color: green;
    }
`
const SignBtn = styled.button`
    padding: 0.5rem;
    background-color: #335333;
    color: white;
    border: 0px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &:hover{
        background-color: green;
    }
`
const Offdiv = styled.div`
    padding: 1rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: red;
    align-self: flex-end;
    cursor: pointer;
`
const EmptyCart = styled.img`
    width:7rem;
    height: 7rem;
    border-radius: 20px;
   
`
const ListBuy = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: ${(prop)=> prop.purchases? "start": "center"};
    gap: 1rem;
`
const EmptykartDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`
const EmptyCartMsg = styled.h4`

`
const Succesfuldiv = styled.div`

`
const SuccessNames = styled.h5`
    font-weight: bold;
    font-size: 20px;
`
const SuccessAmount = styled.p`
    color: blue;
    font-weight: bold;
`
const YourList = styled.h5`
    
`



// our jsx appears here
const Navbar = () => {
    const[darkmode, setdarkmode] = useState(false)
    const[sidebar, setsidebar] = useState(false)
    
    const navigate = useNavigate()
    const{product} = useSelector((state)=> state.cart)
    const{purchases} = useSelector((state)=> state.purchase)
    const{user} = useSelector((state)=> state.user)

    const handleProfile = ()=>{
        setsidebar(!sidebar)
    }
    const handleclose = ()=>{
        setsidebar(false)
    }

    const {lightModeTheme} = useSelector((state)=> state.settheme)
    const dispatch = useDispatch()
    

    // here we fetch all the buys 
    useEffect(()=>{
        const getSuccessfulbuy = async()=>{
            try {
                await axios.get(`payments/${user._id}`).then((res)=>{
                    dispatch(successfulBuys(res.data))
                })
            } catch (error) {
                console.log(error)
            }
            
        }
        getSuccessfulbuy()
    })
    
  return (
    <Container>
        <Wrapper>
            <Logo onClick={handleclose}>
                <Link to='/' style={{textDecoration: "none", color: "inherit"}}>
                AustineGlobals
                </Link>
            </Logo>
            <RightContainer>
                <Cart>
                    {
                        !lightModeTheme? (<WbSunnyIcon sx={{cursor: "pointer", color: "gold"}} onClick={()=>dispatch(setLightMode())}/>):
                        (<DarkModeIcon  sx={{cursor: "pointer"}} onClick={()=>dispatch(setDarkMode())}/>)
                    }
                    <Link to='/cart' style={{textDecoration: "none", color: "inherit"}}>
                    <Badge badgeContent={ product.length}  color="success" sx={{cursor: "pointer"}} onClick={handleclose}>
                        <ShoppingCartIcon style={{color: lightModeTheme?"black": "white"}}/>
                    </Badge>
                    </Link>
                </Cart>
                <Register>
                    <AccountCircleIcon style={{color: lightModeTheme?"black": "white", cursor: "pointer"}} onClick={handleProfile}/>
                </Register>
            </RightContainer>
        </Wrapper>
        <SideDiv sidebar={sidebar}>
                    {
                        user? (<Showuser>
                               <Usersname>Hello, {user.email} welcome to AustineGlobals</Usersname>
                               <Offdiv><PowerSettingsNewIcon onClick={()=>dispatch(clearUser())}/></Offdiv>
                               <ListBuy purchases={purchases}>
                                    
                                {
                                    purchases.length > 0?(
                                        purchases.map((items)=>(
                                            <Succesfuldiv key={items._id}>
                                            <SuccessNames>ITEMS: {items.products}</SuccessNames>
                                            <SuccessAmount>Price: ${items.totalPrice}</SuccessAmount>
                                            <hr/>
                                            </Succesfuldiv>
                                        ))
                                        
                                    ):(
                                        <EmptykartDiv>
                                            <EmptyCart src={emptyCart}/>
                                            <EmptyCartMsg>NO TRANSACTION YET</EmptyCartMsg>
                                        </EmptykartDiv>
                                    )
                                }
                                   
                               </ListBuy>
                        </Showuser>):
                        (<ShowRegister>
                             <ShowRegDiv>
                                <RegHeading>You are not registered or logged in</RegHeading>
                                <RegBtn onClick={()=>{navigate('register') 
                                setsidebar(false)}}>REGISTER</RegBtn>
                                <SignBtn onClick={()=>{navigate('signin')
                                 setsidebar(false)}}>SIGNIN</SignBtn>
                             </ShowRegDiv>
                        </ShowRegister>)
                    }
        </SideDiv>
    </Container>
  )
}

export default Navbar