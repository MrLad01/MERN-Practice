import React, { useState } from 'react'
import { Form, Link } from 'react-router-dom'

const Register = () => {


    const [id, setId] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [ip_address, setIp_address] = useState('')
    const [password, setPassword] = useState('')
    const [password1, setPassword1] = useState('')
    

    async function submit(e) {
      e.preventDefault();
      try{
        const body = { id, first_name,last_name, gender, ip_address, email, password }
        const response = await fetch('http://localhost:4000/user/register', {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(body)
        });

        console.log(response);
      } catch(err){
        console.error(err.message);
      }
    }


  return (
    <React.Fragment>
      <fieldset>
        <Form method='post' className='register' onSubmit={submit}>

            <label htmlFor="id">Id</label>
            <input type="number" name='id'  value={id} onChange={(e)=> setId(e.target.value)} required />

            <label htmlFor="first_name">Enter your First Name</label>
            <input type="text" placeholder='e.g John' name='first_name' value={first_name} onChange={(e)=>setFirst_name(e.target.value)} required />

            <label htmlFor="last_name">Enter your Last Name</label>
            <input type="text" placeholder='e.g Doe' name='last_name' value={last_name} onChange={(e)=>setLast_name(e.target.value)} required />

            <label htmlFor="gender">Select your gender</label>
            <select name="gender" id="gender" value={gender} onChange={(e)=>setGender(e.target.value)} required >
              <option value="" disabled>- Select your gender -</option>
              <option value="Male">Male</option>
              <option  value="Female">Female</option>
            </select>

            <label htmlFor="ip_address">Enter your ip_address</label>
            <input type="text" name='ip_address' placeholder='Enter your ip_address' value={ip_address} onChange={(e)=> setIp_address(e.target.value)} required  />

            <label htmlFor="email">E-mail</label>
            <input type="email" name='email' placeholder='Enter your email address' value={email} onChange={(e)=> setEmail(e.target.value)} required />

            <label htmlFor="password">Password</label>
            <input type="password" name='password' placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)} required />

            <label htmlFor="password1">Confirm Password</label>
            <input type="password" value={password1} onChange={(e)=> setPassword1(e.target.value)} placeholder='Re-enter your password' required />
            {password === password1 ? <></> : <p style={{marginTop: -7}}>Password does not match</p>}


            <button type="submit">Log in</button>
        </Form>
        <p>If you already have an account<Link to="/login"> click here to login</Link></p>
      </fieldset>
    </React.Fragment>
  )
}

export default Register
