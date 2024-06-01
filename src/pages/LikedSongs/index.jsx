import left from '../../assets/Playlist/left.svg';
import right from '../../assets/Playlist/right.svg';
import play from '../../assets/Playlist/play.svg';
import like from '../../assets/Playlist/likes.svg';
import down from '../../assets/Playlist/download.svg';
import opt from '../../assets/Playlist/option.svg';
import search from '../../assets/Playlist/search.svg';
import clock from '../../assets/Playlist/clock.svg';
import header from '../../assets/LikedSongs/header.svg'
import { useSelector } from 'react-redux';
import LikedSongsTableItem from '../../components/LikedSongsTableItem';
function LikedSongs() {
  const store = useSelector(store => store.likes)
  return (
    <div className='w-full min-h-screen pb-32 bg-[#1f1b33]'>
      <div
        className='px-6 py-6'
        style={{
          height: '400px',
          background: 'rgb(53,43,104)',
          background: 'linear-gradient(0deg, rgba(53,43,104,1) 0%, rgba(90,74,176,1) 58%)'
        }}
      >
        <div className='flex gap-3'>
          <img className='cursor-pointer' src={left} alt='Left' />
          <img className='cursor-pointer' src={right} alt='Right' />
        </div>
        <div className='py-4 flex gap-10 items-center'>
          <div>
            <img width={297} height={297} src={header} alt='Playlist Cover' />
          </div>
          <div className='text-white flex flex-col gap-4'>
            <p>PUBLIC PLAYLIST</p>
            <h1 className='text-[40px] capitalize'>Liked Songs</h1>
            <span className='w-[400px] capitalize'>davedirect3 34 songs</span>
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
        <table className="w-full">
          <thead>
            <tr>
              <th className='px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider'>#</th>
              <th className='px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider'>Name</th>
              <th className='px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider'>Album</th>
              <th className='px-6 py-3 text-left text-xl font-medium text-gray-500 uppercase tracking-wider'>
                <img width={28} src={clock} alt="" />
              </th>
            </tr>
          </thead>
          <tbody>
            {
              store.length > 0 ? store.map((el, index) => {
                return <LikedSongsTableItem data={el} key={index} index={index}></LikedSongsTableItem>
              }) : <></>
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LikedSongs