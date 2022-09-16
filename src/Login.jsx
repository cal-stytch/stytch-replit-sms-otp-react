import React, { useEffect } from 'react'
import { StytchLogin, useStytchUser, useStytchSession } from "@stytch/react";
import {Products, OTPMethods} from "@stytch/vanilla-js"
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {user} = useStytchUser()
  const {session} = useStytchSession()
  const stytchProps = {
    loginOrSignupView: {
      products: [Products.otp],
      otpOptions: {
        methods: [OTPMethods.SMS],
        expirationMinutes: 10,
      },
    },
    style: {
      fontFamily: '"Helvetica New", Helvetica, sans-serif',
      width: "321px",
      primaryColor: "#0577CA",
    },

  };

  useEffect(() => {
    if (user) {
      console.log("User found:", user)
    }
     if (session) {
      console.log("Session found: ", session)
      navigate('../profile')
    }
    
  }, [user, session])

  return (
    <main>
      <Link to="/">Return to Welcome page</Link>
      <br></br>
      <StytchLogin
        config={stytchProps.loginOrSignupView}
        styles={stytchProps.style}
      />
    </main>
  );
}

export default Login