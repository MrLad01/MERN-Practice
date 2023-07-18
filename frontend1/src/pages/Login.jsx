import React from 'react'
import { Form } from 'react-router-dom'

const Login = () => {
  return (
    <React.Fragment>
        <Form>
            <label htmlFor="email">E-mail</label>
            <input type="text" placeholder='Enter your email address' />
            <label htmlFor="password">Password</label>
            <input type="text" placeholder='Enter your password' />
        </Form>
    </React.Fragment>
  )
}

export default Login
