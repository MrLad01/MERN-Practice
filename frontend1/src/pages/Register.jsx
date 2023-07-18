import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


  return (
    <React.Fragment>
        <Form className='register'>
            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder='Enter your email address' value={email} onChange={(e)=> setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button type="submit">Log in</button>
        </Form>
        <p>If you don't have an account yet,<Link to="/register"> click here to register</Link></p>
    </React.Fragment>
  )
}

export default Register
