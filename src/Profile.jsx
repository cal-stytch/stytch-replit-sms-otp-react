import React, { useEffect } from 'react'
import { useStytch, useStytchUser, useStytchSession } from '@stytch/react';
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const {session} = useStytchSession()
  const {user} = useStytchUser()
  const stytch = useStytch()
  const navigate = useNavigate()

  console.log('we have this session test:', session)
  console.log('we have this user test:', user)
  console.log('Cookies? ', document.cookie)

  useEffect(() => {
    console.log('we have this session change:', session)
    console.log('we have this user change:', user)
    if (!session) {
      console.log('No user session found. Redirecting to Login page.')
      navigate('../')
    }
  }, [user, session])


  return (
    <main>
      <div>
        <button onClick={async () => {
          console.log('Logging out.')
          try {
            await stytch.session.revoke()
            navigate('../')
          } catch(e) {
            console.log(e)
            navigate('../')
          }
        }}>Log out</button>
        <h1>Profile</h1>
        <p>
          Welcome to your Profile page. You have successfully logged in using an SMS passcode. Use the <strong>Log out</strong> button above to start over.
        </p>
        <h2>What next?</h2>
        <p>Use this template as a jumping off point to build awesome things:</p>
        <ul>
          <li>Try out other forms of authentication like <a href="https://stytch.com/products/sms-passcodes" target="_blank">SMS passcodes</a> and <a href="https://stytch.com/products/oauth" target="_blank">OAuth</a>.</li>
          <li>Add mulit-factor authentication (MFA) with products like <a href="https://stytch.com/products/webauthn" target="_blank">WebAuthn</a>.</li>
          <li>Protect your authenticated routes on your backend with <a href="https://stytch.com/products/session-management" target="_blank">Sessions</a>.</li>
          <li>Join the <a href="https://join.slack.com/t/stytch/shared_invite/zt-nil4wo92-jApJ9Cl32cJbEd9esKkvyg" target="_blank">Stytch Slack community</a> or reach us as at <a href="mailto:support@stytch.com">support@stytch.com</a> </li>
        </ul>

      </div>
    </main>
  );
}

export default Profile