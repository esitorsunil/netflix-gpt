import React from 'react'
import MainContainer from './MainContainer'
import { useNavigate } from 'react-router-dom'

const Trailer = () => {
    const navigate = useNavigate()
    const handleHomePage = () => {
        navigate("/browse")
    }
  return (
    <>
    <div className='bg-black'>
        <p className="text-7xl bg-black  text-white top-[20px] left-[10px] w-[50px] cursor-pointer" onClick={handleHomePage}>←</p>
        </div>
        <div>
        <MainContainer/></div>
        </> 
  )
}

export default Trailer