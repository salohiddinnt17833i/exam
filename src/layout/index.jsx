import React from 'react'
import LeftSidebar from '../components/LeftSidebar'
import RightSidebar from '../components/RightSidebar'
import TopFixedMusic from '../components/TopFixedMusic'
const Layout = ({ children }) => {
    return (
        <div className='w-full h-auto flex justify-between text-[#B3B3B3]'>
            <div className='w-[250px] h-[100%] overflow-auto fixed top-0 left-0 bg-[#000000]'>
                <LeftSidebar />
            </div>
            <div className='w-[100%] ml-[250px] mr-[250px] bg-[#121212]'>
                {children}
            </div>
            <div className='w-[250px] h-[100%] overflow-auto fixed top-0 right-0  bg-[#000000]'>
                <RightSidebar />
            </div>
            
        </div>
    )
}

export default Layout
