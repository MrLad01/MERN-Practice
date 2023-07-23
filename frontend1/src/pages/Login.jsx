import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    async function submit(e) {
      e.preventDefault();
      try{
        setIsLoading(true);
        setError(null);
        const body = { email, password }
        const response = await fetch('http://localhost:4000/user/login', {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(body)
        });

        console.log(response);
      } catch(err){
        console.error(err.message)
      }
    }

  return (
    <React.Fragment>
      <fieldset>
        <Form method='post' className='login' onSubmit={submit}>
            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder='Enter your email address' value={email} onChange={(e)=> setEmail(e.target.value)} required />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)} required />
            <button type="submit">Log in</button>
        </Form>
        <p>If you don't have an account yet,<Link to="/register"> click here to register</Link></p>
      </fieldset>
    </React.Fragment>
  )
}

export default Login
