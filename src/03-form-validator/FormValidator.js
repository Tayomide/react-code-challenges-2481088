import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [messages, setMessages] = useState([])

  const formValidator = () => {
    const messages = []
    if(email.length === 0)messages.push("Email feild is required")
    if(password.length < 8)messages.push("Password must be at least 8 characters long")
    if(passwordConfirm.length < 8)messages.push("Password Confirmation must be at least 8 characters long")
    if(passwordConfirm !== password)messages.push("Password confirmation is not the same as password")
    if(email.split("@").length !== 2)messages.push("An email must have exactly one @ symbol")
    messages.length? setMessages(messages) : setMessages(["User created!"])
  }

  const validateForm = (e) => {
    e.preventDefault()
    formValidator()
  }

  return (
    <form method='POST'>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)}
      />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)}
      />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)}
      />
      <p>{messages.join(", ")}</p>
      <input type='submit' value='Submit' onClick={validateForm} />
    </form>
  )
}
