// This page is responsible for authenticating the magic link token after the user clicks the link in their email

import React, { useEffect } from 'react'
import { useStytch } from '@stytch/react';
import { useNavigate, useSearchParams } from "react-router-dom";

const Authenticate = () => {
  const stytch = useStytch()
  const params = useSearchParams()
  const navigate = useNavigate();

  useEffect(() => {
    const authenticateToken = async () => {
      const token = params[0].get('token')
      if (token) {
        try {
          await stytch.magicLinks.authenticate(params[0].get('token'), {
            session_duration_minutes: 30,
          })
          console.log('Authentication sucessful. Redirecting to Profile page.')
          navigate('../profile')
        } catch (e) {
          // Something went wrong. Redirect to login page
          console.error(e)
          navigate('../login')
        }
      } else {
        console.error('No magic link token found. Redirecting to Login page.')
        navigate('../login')
      }
    }
    authenticateToken()
  }, [stytch, params])

  return null
}

export default Authenticate