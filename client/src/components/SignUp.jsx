import React from 'react'
import google from '../assets/google.png'


const SignUp = (onClose) => {
  return (
 <div className="bg-black p-5 h-auto rounded-lg shadow-lg w-100">
        <h2 className="text-2xl text-neutral-300 justify-center items-center font-bold mb-4">Sign Up</h2>
        
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-2 border border-gray-300 rounded"
        />
        
        <input
          type=" new password"
          placeholder=" New Password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type=" retype password"
          placeholder="Retype Password"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        
        <button className="w-full bg-amber-800 text-white p-2 rounded-lg font-semibold ">
          Create an account
        </button>
        <div className=''> 
        <button
          onClick={onClose}
          className="w-full mt-2 p-2 rounded-lg text-white hover:underline  bg-amber-800 flex justify-center space-x-3 font-semibold"
        >
          <img src={google} className='w-5 h-5'/>oogle
        </button></div>
        <div className="text-white">All Redy have account {" "}<a href=""  className='text-blue-700 underline'>Sign in</a></div>
      </div>
)
}

export default SignUp