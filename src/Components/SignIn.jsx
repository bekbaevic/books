import React from 'react'
import { NavLink } from 'react-router-dom'

const SignIn = () => {
    return (
        <div className='flex justify-center items-center w-full h-screen'>
            <div className='w-[430px] bg-[#FEFEFE] rounded-[12px] py-[36px] px-[28px] flex flex-col shadow-lg'>
                <h1 className='text-[36px] font-[700] text-center mb-[20px]'>Sign in</h1>
                <form className='flex flex-col gap-[20px]'>
                    <label className='flex flex-col'>
                        <span className='text-[14px] font-[500]'>Username</span>
                        <input type="text" className='border border-[#EBEBEB] py-[14px] px-[16px] rounded-[6px] ' />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-[14px] font-[500]'>Password</span>
                        <input type="password" className='border border-[#EBEBEB] py-[14px] px-[16px] rounded-[6px] ' />
                    </label>
                    <button type='submit' className='bg-[#6200EE] py-[10px] px-[24px] rounded-[4px] text-[#FEFEFE] font-[500]'>Submit</button>
                    <p className='text-center text-[14px] font-[300]'>Already signed up? <NavLink to={'/register'} className='text-[#6200EE]'>Go to sign up.</NavLink></p>
                </form>
            </div>
        </div>
    )
}

export default SignIn