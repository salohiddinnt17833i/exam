import React from 'react'
import { useNavigate } from 'react-router-dom';

function TopCardItem(props) {
    const navigate = useNavigate()
    function handleRedirect(id) {
        navigate(`playlist/${id}`)
    }

    return (
        <div className='w-[470px] h-[80px] bg-[#3E3E83] rounded-lg flex items-center gap-4 cursor-pointer' onClick={() => handleRedirect(props.data.id)}>
            <div>
                <img className='rounded-lg' width={80} height={80} src={props.data.images[0].url} alt="" />
            </div>
            <h2 className='font-bold text-white text-[20px]'>{props.data.name}</h2>
        </div>
    )
}

export default TopCardItem