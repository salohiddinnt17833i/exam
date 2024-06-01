import React from 'react'
import { useNavigate } from 'react-router-dom';

function PlaylistCard(props) {
    const navigate = useNavigate()

    function handlePlaylists(event) {
        navigate(`/playlist/${event}`)
    }
    return (
        <div className='w-[224px] h-[324px] bg-[#1B1B1B] cursor-pointer  p-5 rounded-lg overflow-hidden' onClick={() => { handlePlaylists(props.data.id) }}>
            <div>
                <img width={182} height={182} src={props.data.images[0].url} alt="" />
            </div>
            <div className='mt-4'>
                <h2 className='text-[20px] text-white capitalize'>{props.data.name}</h2>
                <span className='text-[18px] mt-2 capitalize'>{props.data.description}</span>
            </div>
        </div>
    )
}

export default PlaylistCard