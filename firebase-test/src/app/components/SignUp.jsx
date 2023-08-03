"use client";



import { auth } from '@/firebase/firebase';
import { Alert, Box, Button, FormControl, OutlinedInput, Stack, TextField } from '@mui/material'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';


// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'




const SignUpPage = () => {
    const router = useRouter()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const [user, setUser] = useState({
      email: '',
      password: ''

    })
 
    const submitUsers = async(e) => {
      e.preventDefault()
   
        if(user.email.length > 0 || user.password.length > 0){
          setError(false)
          try {
              await createUserWithEmailAndPassword(auth, user.email, user.password)
              setSuccess(true)
              router.push('/pages/login')
              console.log(auth.currentUser.email)
           
          }catch(error){
            setErrorMessage(error.message)
          }
           
        }else {
           setError(true)
        }

      
    }
  
  return (
    <div>
       {error && (<Alert severity="error">'please no field must be left empty!</Alert>)}
       {success && (<Alert severity="success">This is a success alert — check it out!</Alert>) }
       {errorMessage && (<Alert severity="error">${errorMessage}</Alert>)}
       <h1 className="capitalize text-center">Sign Up here</h1>
       <Box sx={{
                display: 'flex',
                justifyContent: 'center'
              }}>
          <form onSubmit={submitUsers}>
            <FormControl>
              <Stack >
                <TextField 
               
                  label="email"
                  type="email"
                  onChange={(e)=> setUser({...user, email:e.target.value})}
                />
                <TextField 
                 
                  label="password"
                  type='password'
                  onChange={(e)=> setUser({...user, password:e.target.value})}
                />
                <Button type='submit'>submit</Button>
              </Stack>
            </FormControl>
          </form>
       </Box>
    </div>
  )
}

export default SignUpPage
