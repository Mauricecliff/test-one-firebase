"use client";

import { auth, googleProvider } from '@/firebase/firebase';
import { Alert, Box, Button, FormControl, OutlinedInput, Stack, TextField } from '@mui/material'
import {  createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

import { useRouter } from 'next/navigation';


// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'





const LoginPage = () => {
    const router = useRouter
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)
    const [user, setUser] = useState({
      email: '',
      password: ''

    })
 
    const signInWithGoogle = async(e) => {
      e.preventDefault()
   
           try {
            await signInWithPopup(auth, googleProvider)
           }catch(error){
            setErrorMessage(error.message)
          } 
      
    }

    const logOutUser = async(e) => {
      e.preventDefault()
   
           try {
            await signOut(auth)
           }catch(error){
            setErrorMessage(error.message)
          } 
      
    }
  
  return (
    <div>
       {error && (<Alert severity="error">'please no field must be left empty!</Alert>)}
       {success && (<Alert severity="success">This is a success alert — check it out!</Alert>) }
       {errorMessage && (<Alert severity="error">${errorMessage}</Alert>)}
       <h1 className="capitalize text-center">Login here</h1>
       <Box sx={{
                display: 'flex',
                justifyContent: 'center'
              }}>
          <Button onClick={signInWithGoogle} type='submit' variant="outlined">sign In with google</Button>
          <Button onClick={logOutUser} type='submit' variant="outlined">sign out with google</Button>
       </Box>
       <Box sx={{
                display: 'flex',
                justifyContent: 'center'
              }}>
          <form>

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

export default LoginPage
