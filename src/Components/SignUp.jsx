import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../Reducers/users.slice'
import { NavLink, useNavigate } from 'react-router-dom'

const SignUp = () => {

  //hooks
  const { user } = useSelector(state => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //states
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [passwordError, setPasswordError] = useState(false)

  //user-data
  const userData = [{
    name: name,
    email: email,
    key: password1,
    secret: password1
  }]


  //functions
  function onSubmitted(e) {
    e.preventDefault()
    password1 === password2 ?
      dispatch(setUser(userData)) && navigate('/')
      :
      setPasswordError(true)
  }

  useEffect(() => { setPasswordError(false) }, [password1, password2])

  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <div className='w-[430px] bg-[#FEFEFE] rounded-[12px] py-[36px] px-[28px] flex flex-col'>
        <h1 className='text-[36px] font-[700] text-center mb-[20px]'>Sign up</h1>
        <form onSubmit={e => onSubmitted(e)} className='flex flex-col gap-[20px]'>
          <label className='flex flex-col'>
            <span className='text-[14px] font-[500]'>Username</span>
            <input onChange={e => setName(e.target.value)} required type="text" className='border border-[#EBEBEB] py-[14px] px-[16px] rounded-[6px] ' />
          </label>
          <label className='flex flex-col'>
            <span className='text-[14px] font-[500]'>Email</span>
            <input onChange={e => setEmail(e.target.value)} required type="email" className='border border-[#EBEBEB] py-[14px] px-[16px] rounded-[6px] ' />
          </label>
          <label className='flex flex-col'>
            <span className='text-[14px] font-[500]'>Password</span>
            <input minLength={6} onChange={e => setPassword1(e.target.value)} required type="password" style={passwordError ? { color: 'red', border: "1px solid red" } : { color: "black", border: "1px solid #EBEBEB" }} className='border py-[14px] px-[16px] rounded-[6px] ' />
          </label>
          <label className='flex flex-col'>
            <span className='text-[14px] font-[500]'>Confirm password</span>
            <input minLength={6} onChange={e => setPassword2(e.target.value)} required type='password' style={passwordError ? { color: 'red', border: "1px solid red" } : { color: "black", border: "1px solid #EBEBEB" }} className='border py-[14px] px-[16px] rounded-[6px] ' />
            {passwordError && <p className='text-red-500 text-[14px]'>Passwords don't match</p>}
          </label>
          <button type='submit' className='bg-[#6200EE] py-[10px] px-[24px] rounded-[4px] text-[#FEFEFE] font-[500]'>Submit</button>
          <p className='text-center text-[14px] font-[300]'>Already signed up? <NavLink onClick={() => navigate("/login")} className='text-[#6200EE]'>Go to sign in.</NavLink></p>
        </form>
      </div>
    </div>
  )
}

export default SignUp