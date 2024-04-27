import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import './login-signup.css'
import { useState } from 'react'

export const Name = ()=>{
  return <>
    <div className="input">
          <img src={user_icon} alt=''></img>
          <input type='text' placeholder='Name'></input>
        </div>
  </>
}


const Loginsignup = () => {
  const [login, setLogin] = useState(false)
  console.log(name)
  return <>
   <div className='container'>
      <div className='header'>
        <div className='text'>signup</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {!login && <Name/>}
        <div className="input">
          <img src={email_icon}></img>
          <input type='email' placeholder='Email Id'></input>
        </div>
        <div className="input">
          <img src={password_icon}></img>
          <input type='password' placeholder='Password'></input>
        </div>
      </div>
      <div className="forgot-password">Lost Password ? <span>click Here!</span></div>
      <div className='submit-container'>
        <div className={!login? "submit": 'submit grey'} onClick={()=> setLogin(false)}>Signup</div>
        <div className={login? "submit": 'submit grey'} onClick={()=> setLogin(true)}>Login</div>
      </div>
    </div> 
  
  </>

}

export default Loginsignup;