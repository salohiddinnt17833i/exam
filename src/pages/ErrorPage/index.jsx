import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div className='min-h-[100vh] flex flex-col justify-center items-center'>
      <h1 className='mb-6'><span className='text-6xl text-orange-500'>4o4</span><span className='text-4xl text-white'> Not Found Page</span></h1>
      <button onClick={() => {navigate('/')}} className='px-6 py-3 text-white text-xl cursor-pointer bg-lime-700 rounded-lg'>Back To Home</button>
    </div>
  )
}

export default ErrorPage