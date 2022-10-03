import React,{ useState} from 'react'
import styled from 'styled-components'
import {getUser} from '../Slice/user'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {auth, provider} from '../Utils/firebase'
import {signInWithPopup,} from "firebase/auth";
import {axiosInstance} from '../config'


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
const SignIn = () => {
  const[email, setemail] = useState()
  const[password, setpassword] = useState()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // handle manual login
  const handleSubmit = async(e)=>{
      e.preventDefault()

      try {
        const response = await axiosInstance.post('/signin', {email, password}).then((res)=>{
          dispatch(getUser(res.data))
          navigate('/')
        } )
      } catch (error) {
        toast.error(error.response.data)
      }
  }

  // handle login with google
  const googleSubmit = async(e)=>{
    e.preventDefault()
    signInWithPopup(auth, provider).then((result)=>{
       
            axiosInstance.post('/withemail', {
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
        <Heading>SIGNIN</Heading>
        <Form onSubmit={handleSubmit}>
          <Input type='email' placeholder='Enter email' onChange={(e)=>setemail(e.target.value)}/>
          <Input type='password' placeholder='Enter password' onChange={(e)=>setpassword(e.target.value)}/>
          
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

export default SignIn