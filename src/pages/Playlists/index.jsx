import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import left from '../../assets/Playlist/left.svg';
import right from '../../assets/Playlist/right.svg';
import play from '../../assets/Playlist/play.svg';
import like from '../../assets/Playlist/likes.svg';
import down from '../../assets/Playlist/download.svg';
import opt from '../../assets/Playlist/option.svg';
import search from '../../assets/Playlist/search.svg';
import clock from '../../assets/Playlist/clock.svg';
import TableItem from '../../components/TableItem';

function Playlists() {
  const params = useParams();
  const [playlistData, setPlaylistData] = useState({});
  const [img, setImg] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (params.id) {
      fetch(`https://api.spotify.com/v1/playlists/${params.id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => res.json())
        .then(data => {
          setPlaylistData(data);
          setImg(data.images[0]?.url);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [params.id, token]);

  return (
    <div>
      <div
        className='px-6 py-6'
        style={{
          height: '400px',
          background: 'rgb(18,18,18)',
          background: 'linear-gradient(0deg, rgba(18,18,18,1) 2%, rgba(197,218,32,1) 72%)',
        }}
      >
        <div className='flex gap-3'>
          <img className='cursor-pointer' src={left} alt='Left' />
          <img className='cursor-pointer' src={right} alt='Right' />
        </div>
        <div className='py-4 flex gap-10 items-center'>
          <div>
            <img width={297} height={297} src={img} alt='Playlist Cover' />
          </div>
          <div className='text-white flex flex-col gap-4'>
            <p>PUBLIC PLAYLIST</p>
            <h1 className='text-[40px] capitalize'>{playlistData.name}</h1>
            <span className='w-[400px] capitalize'>{playlistData.description}</span>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between pl-3 pr-6'>
        <div className='flex gap-4 items-center'>
          <img height={72} className='cursor-pointer' src={play} alt='Play' />
          <img height={52} className='cursor-pointer' src={like} alt='Like' />
          <img height={52} className='cursor-pointer' src={down} alt='Download' />
          <img height={44} className='cursor-pointer' src={opt} alt='Options' />
        </div>
        <div className='flex gap-4'>
          <img className='cursor-pointer' src={search} alt='Search' />
          <select className='bg-transparent outline-none'>
            <option value='custom'>Custom order</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <table className='min-w-full divide-y divide-gray-800'>
            <thead>
              <tr>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>#</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Title</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Album</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>Date Added</th>
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                  <img src={clock} alt='Duration' />
                </th>
              </tr>
            </thead>
            <tbody className='bg-black divide-y divide-gray-800'>
              {playlistData.tracks?.items?.map((el, index) => (
                el.track.preview_url ? <TableItem data={el} key={el.track.id} index={index} /> : <React.Fragment key={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Playlists;
