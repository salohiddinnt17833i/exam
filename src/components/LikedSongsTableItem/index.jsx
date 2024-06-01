import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeLike } from '../../redux/likesSlice';
import like from '../../assets/Playlist/addlikes.svg';
function LikedSongsTableItem({ data, index, click}) {
    const dispatch = useDispatch();

    const handleRemoveLike = () => {
        dispatch(removeLike(data));
    };

    return (
        <>
            <tr className='cursor-pointer'  onClick={() => click(data)}>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-400'>{index + 1}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-white'>
                    <div className='flex items-center'>
                        <img className='h-10 w-10' src={data.album.images[0].url} alt='as' />
                        <div className='ml-4'>
                            <div>{data.name}</div>
                            <div className='text-xs text-gray-400'>{data.artists[0].name}</div>
                        </div>
                    </div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-400'>{data.album.name}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-400 flex items-center gap-3'>
                    <img onClick={handleRemoveLike} width={20} src={like} alt="Remove Like" />
                    2: 33
                </td>
            </tr>
            </>
    );
}

export default LikedSongsTableItem;