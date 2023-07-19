import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'

const Register = () => {

    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    id, ip_address


  return (
    <React.Fragment>
        <Form method='post' className='register'>
            <label htmlFor="email">E-mail</label>
            <input type="email" name='email' placeholder='Enter your email address' value={email} onChange={(e)=> setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" name='password' placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)} />
            <button type="submit">Log in</button>
        </Form>
        <p>If you already have an account<Link to="/login"> click here to login</Link></p>
    </React.Fragment>
  )
}

export default Register
