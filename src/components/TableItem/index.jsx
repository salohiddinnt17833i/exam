import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLike, removeLike } from '../../redux/likesSlice';
import like from '../../assets/Playlist/likes.svg';
import addlike from '../../assets/Playlist/addlikes.svg';

function TableItem({ data, index, click }) {
    const track = data.track;
    const dispatch = useDispatch();
    const isLiked = useSelector(state => state.likes.some(likedTrack => likedTrack.id === track.id));

    const handleLike = (e) => {
        e.stopPropagation();
        dispatch(addLike(track));
    };

    const handleAddLike = (e) => {
        e.stopPropagation();
        dispatch(removeLike(track));
    };

    return (
        <tr className='cursor-pointer' onClick={() => click(track)}>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-400'>{index + 1}</td>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-white'>
                <div className='flex items-center'>
                    <img className='h-10 w-10' src={track.album.images[0].url} alt={track.name} />
                    <div className='ml-4'>
                        <div>{track.name}</div>
                        <div className='text-xs text-gray-400'>{track.artists.map(artist => artist.name).join(', ')}</div>
                    </div>
                </div>
            </td>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-400'>{track.album.name}</td>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-400'></td>
            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-400 flex items-center gap-3'>
                {isLiked ? (
                    <img onClick={handleAddLike} width={20} src={addlike} alt="Unlike" />
                ) : (
                    <img onClick={handleLike} width={20} src={like} alt="Like" />
                )}
                {Math.floor(track.duration_ms / 60000)}:{Math.floor((track.duration_ms % 60000) / 1000).toFixed(0).padStart(2, '0')}
            </td>
        </tr>
    );
}

export default TableItem;
