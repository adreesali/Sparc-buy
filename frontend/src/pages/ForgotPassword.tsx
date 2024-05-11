import React from 'react'

const ForgotPassword = () => {
  return (
    <div className="bg-gray-100 p-2 rounded-lg shadow-sm">
    <input
        type="email"
        placeholder='Enter email'
        name="email"
        
        className='w-full h-full outline-none bg-transparent rounded-lg p-2'
    />
</div>
  )
}

export default ForgotPassword
