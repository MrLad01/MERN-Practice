import React, { useState } from 'react'
import { Form } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


  return (
    <React.Fragment>
        <Form className='login'>
            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder='Enter your email address' value={email} onChange={(e)=> setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button type="submit">Log in</button>
        </Form>
    </React.Fragment>
  )
}

export default Login
