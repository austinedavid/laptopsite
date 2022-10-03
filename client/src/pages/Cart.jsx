import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import emptyImage from '../images/empty_cart.jpeg'
import {Link, useNavigate} from 'react-router-dom'
import {laptopCategories} from '../Utils/Resource'
import CloseIcon from '@mui/icons-material/Close';
import {useSelector, useDispatch} from 'react-redux'
import {removeAllCart, removeFromCart} from '../Slice/Cart'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'



// below here is our styling
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
       margin-bottom: 2rem;
     
    `
const NoItemDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const ItemDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 1rem;

  @media(max-width:600px){
    grid-template-columns: 1fr;
  }
`

const NotItemCon = styled.div`
  display: flex;
  flex-direction: column;
`
const NotItemImg = styled.img`
  width: 20rem;

`
const NoItemInfo = styled.h5`
  font-size: 1.3rem;
  font-weight: bold;
  font-style: italic;
  margin-top: 1rem;
color: ${({theme})=> theme.bodyText};

  @media(max-width: 600px){
    font-size: 1rem;
  }
`
const RightDiv = styled.div`
 
`

const LeftDiv = styled.div`
  width: 100%;
 display: flex;
 flex-direction: column;
 gap: 1rem;
`

const LeftDivEach = styled.div`
  width: 100%;
  height: 5rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  border: 1px solid ${({theme})=> theme.catBoxBorderColor};
  position: relative;

  @media(max-width: 600px){
    gap: 0.5rem
  }
`

const CartImg = styled.img`
  width: 6rem;
  height: 100%;
`
const CartName = styled.p`
  font-weight: bold;
  font-size: 20px;
  color: ${({theme})=> theme.bodyText};

  @media(max-width: 600px){
   font-size: 14px;
  }
`
const CartPrice = styled.p`
  color: blue;
  font-size: 20px;
  font-weight: bold;

  @media(max-width: 600px){
    font-size: 14px;
  }
`
const CancelDiv = styled.div`
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 5px;
  background-color: ${({theme})=> theme.cancelDiv};
  cursor: pointer;
`

const RightDivWrapper = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 1rem;
  background-color: #bccebc;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const RightQnt = styled.p`
  font-size: 20px;
  font-weight: bold;
`
const Span = styled.span`
  color: blue;
`

const CheckoutBtn = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: green;
  color: white;
  border: 0px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover{
    background-color: #507950;
  }
`

const CheckoutCancel = styled.button`
    width: 100%;
  padding: 0.5rem;
  background-color: red;
  color: white;
  border: 0px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover{
    background-color: #894343;
  }
`

const CheckOutHeading = styled.h5`
  width: 100%;
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background-color: green;
  font-size: 20px;
  
`

// our cart jsx
const Cart = () => {
  const [item, setitem] = useState(true)
  const navigate = useNavigate()
  const {lightModeTheme} = useSelector((state)=> state.settheme)
  const {user} = useSelector((state)=> state.user)
  const{product} = useSelector((state)=> state.cart)
  const dispatch = useDispatch()
  const[amount, setamount] = useState(0)
  const[itemNames, setitemName] = useState()

  let checkingValue = product.map((b)=>b.laptopPrice)
  
  
   useEffect(()=>{

    // this is for us to get the product total price
    if(checkingValue.length > 0){
      const sumall  = (Value)=>{
        const final =  Value.reduce((acc, curr)=> {
           return acc + curr
           
           
         })
         setamount(final)
       }
       sumall(checkingValue)
    }

    // this is for us to get the product names
    let checkingNames = product.map((b)=> b.laptopName)
    let joinedNames = checkingNames.join()
    setitemName(joinedNames)
   }, [product])
   
  console.log(itemNames)
//  here we create a callback function for the checkout 
//  and then execute our payments that is required
   const checkOutImems = (token)=>{
   
      const itemObject = {
        amount,
        itemNames,
        payerId: user._id
      }
      const stripeBody = {
        itemObject, token
      }

      

      axios.post('/stripe', stripeBody).then((res)=>{
        
        navigate('/success')
        dispatch(removeAllCart())
      })
   }
  
// to redirect if not registered


  return (
    <Container>
      <Wrapper>
        <CheckOutHeading>CHECKOUT YOUR ITEMS</CheckOutHeading>
        {
          product.length > 0?(<ItemDiv>
                <LeftDiv>
                  {
                    product.map((laptop)=>(
                      <LeftDivEach key={laptop._id}>
                       <CartImg src={laptop.laptopImg}/>
                       <CartName>{laptop.laptopName}</CartName>
                        <CartPrice>${laptop.laptopPrice}</CartPrice>
                        <CancelDiv><CloseIcon onClick={()=>dispatch(removeFromCart(laptop))} style={{color: lightModeTheme? "white" : "black"}}/></CancelDiv>
                      </LeftDivEach>
                    ))
                  }
                </LeftDiv>
                <RightDiv>
                  <RightDivWrapper>
                    <RightQnt>Number of Items: <Span>{product.length}</Span></RightQnt>
                    <RightQnt>Amount Total: <Span>${amount}</Span></RightQnt>
                    
                    {
                      user ?(<StripeCheckout
                        currency='USD'
                        name='AustineGlobals'
                        stripeKey='pk_test_51LnbomGSpAXojpVc4OZ4mYGoAD7HLwlbyb2lQKsM08LMp1mt8dUYZn1WP4uXODELUQuFuTn9WyYILPuyD6ZXlgpX007C413kL5'
                        email={user.email}
                        token={checkOutImems}
                        amount={amount * 100}
                      >
                        <CheckoutBtn>pay with card</CheckoutBtn>
                      </StripeCheckout>):(
                        <CheckoutBtn onClick={()=>navigate('/register')}>pay with card</CheckoutBtn>
                      )
                    }
                   
                    <CheckoutCancel onClick={()=>dispatch(removeAllCart())}>CANCEL ALL</CheckoutCancel>
                  </RightDivWrapper>
                </RightDiv>
              </ItemDiv>):
          (<NoItemDiv>
              <NotItemCon>
                <NotItemImg src={emptyImage}/>
                <NoItemInfo>YOUR CART IS EMPTY!!!, <Link to='/' style={{ color: "blue"}}>GO TO SHOPPING</Link></NoItemInfo>
              </NotItemCon>
          </NoItemDiv>)
        }
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart