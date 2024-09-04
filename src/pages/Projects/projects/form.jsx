import React, { useState } from 'react'

const Form = () => {
  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    console.log(FirstName, LastName, password, email)
  }

  return (
    <div className='container'>
      <div className="form">
        <form action="">
          <div className="name">
            <input type="text" placeholder='First Name' value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder='Last Name' value={LastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <input type="email" name="" id="" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="terms">
            <input type="checkbox" name="" id="" />
            <p>I accept the <span>Terms of Use</span>& <span>Privacy Policy</span></p>
          </div>
          <button type="button" onClick={handleSubmit}>Register Now</button>
        </form>
      </div>
      <div>
      </div>

    </div>
  )
}

export default Form