import React from 'react'
import { Form } from 'react-router-dom'

const Login = () => {
  return (
    <React.Fragment>
        <Form className='login'>
            <label htmlFor="email">E-mail</label>
            <input type="text" placeholder='Enter your email address' />
            <label htmlFor="password">Password</label>
            <input type="text" placeholder='Enter your password' />
            <button type="submit">Log in</button>
        </Form>
    </React.Fragment>
  )
}

export default Login
