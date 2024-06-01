import React from 'react'


import UserIcon from '../../assets/SidebarPictures/user.svg'
import CloseIcon from '../../assets/SidebarPictures/close.svg'
import userLoading from '../../assets/SidebarPictures/userLoading.svg'
const userLoadingObj = [
  { id: 1, img: userLoading },
  { id: 2, img: userLoading },
  { id: 3, img: userLoading }
]
function RightSidebar() {
  return (
    <div className='w-full'>
      <div className='px-6 py-4'>
        <div className='flex items-center justify-between'>
          <p className='text-[#CCCCCC] text-[20px]'>Friend Activity</p>
          <div className='flex gap-2'>
            <img className='cursor-pointer' width={32} height={32} src={UserIcon} alt="" />
            <img className='cursor-pointer' width={18} height={18} src={CloseIcon} alt="" />
          </div>
        </div>
        <div className='mt-5'>
          <p className='text-[14px] text-[#CCCCCC]'>Let friends and followers on Spotify see what you’re listening to.</p>
          <div className='mt-5'>
            {
              userLoadingObj.map((ele, index) => {
                return (
                  <img src={ele.img} key={index} className='mt-4' alt="userLoading img" />
                )
              })
            }
          </div>
          <p className='text-[14px] text-[#CCCCCC] mt-6'>Go to Settings  Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>
          <button className='w-full h-[62px] rounded-full mx-auto bg-[#FFF] text-[#171717] text-[18px] font-semibold mt-6'>SETTINGS</button>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar