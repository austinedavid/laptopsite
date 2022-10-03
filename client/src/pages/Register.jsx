import React, {useState} from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getUser} from '../Slice/user'
import {auth, provider} from '../Utils/firebase'
import {signInWithPopup,} from "firebase/auth";
import {useDispatch} from 'react-redux'

// our styles appears here

const Contianer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({theme})=> theme.regBg};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 300px;
  min-height: 300px;
  background-color: white;
  padding: 0.5rem;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
 align-items: center;
`
const Heading = styled.h5`
  margin-top: 1rem;
  font-size: 20px;
  font-weight: bold;
`
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
`
const Input = styled.input`
  padding: 0.4rem;

  &:focus{
    border: none;
    outline: none;
  }
`

const InputS = styled.input`
  padding: 0.4rem;
  background-color: green;
  color: white;
  border: 0ch;
  border-radius: 10px;
  cursor: pointer;
`
const Google = styled.div`
 width: 100%;
 padding: 0.5rem;
 background-color: white;
 border: 1px solid black;
 display: flex;
 align-items: center;
 justify-content: center;
 color: green;
 font-weight: bold;
 cursor: pointer;
 
`


// below is our jsx
const Register = () => {
  const[username, setusername] = useState()
  const[email, setemail] = useState()
  const[password, setpassword] = useState()
  const[confirmpassword, setconfirmpassword] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // here we upload to database
  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(password !== confirmpassword){
      return toast.error("password and confirm password do not match")
    }
      try {
        const registered = await axios.post('/signup', {
          username, email, password
        }).then((res)=> navigate('/signin'))
      } catch (error) {
        console.log(error)
      }
  }

  // here we login with our google account
  const googleSubmit = async(e)=>{
    e.preventDefault()
    signInWithPopup(auth, provider).then((result)=>{
       
            axios.post('/withemail', {
                username: result.user.displayName,
                email: result.user.email
            }).then((res)=>{
               dispatch(getUser(res.data))
               navigate('/')
            })
       
    })
}


  return (
    <Contianer>
      <Wrapper>
        <Heading>REGISTER</Heading>
        <Form onSubmit={handleSubmit}>
          <Input type='text' placeholder='Enter username' onChange={(e)=>setusername(e.target.value)} required/>
          <Input type='email' placeholder='Enter email' onChange={(e)=>setemail(e.target.value)} required/>
          <Input type='password' placeholder='Enter password' onChange={(e)=>setpassword(e.target.value)} required/>
          <Input type='password' placeholder='Confirm username' onChange={(e)=>setconfirmpassword(e.target.value)} required/>
          <InputS type='submit'/>
        </Form>
        <Google onClick={googleSubmit}>Login with Google</Google>
      </Wrapper>
      <ToastContainer
        position="bottom-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Contianer>
  )
}

export default Register