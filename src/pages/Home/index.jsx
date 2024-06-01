import React, { useEffect, useState } from 'react';
import { fetchDataBackin, fetchDataFetured, fetchDataForYou, fetchDataPlayed, fetchDataTopMixes, fetchDataYours, getToken } from '../../utilits';
import PlaylistCard from '../../components/PlaylistCard';
import Loader from '../../components/Loader';
import left from '../../assets/Playlist/left.svg';
import right from '../../assets/Playlist/right.svg';
import TopCardItem from '../../components/TopCardItem';
function Home() {
  const [feture, setFetured] = useState([])
  const [topmixes, setTopmixes] = useState([]);
  const [foryou, setForyou] = useState([]);
  const [played, setPlayed] = useState([]);
  const [backin, setBackin] = useState([]);
  const [yours, setYours] = useState([]);

  const [loader, setLoader] = useState(false)

  useEffect(() => {
    fetchAllData()
  }, []);

  const fetchAllData = async () => {
    setLoader(true)
    await getToken();
    const topMixes = await fetchDataTopMixes();
    const Foryou = await fetchDataForYou();
    const Played = await fetchDataPlayed();
    const Backing = await fetchDataBackin();
    const Yours = await fetchDataYours();
    const Fetured = await fetchDataFetured()
    setTopmixes(topMixes)
    setForyou(Foryou)
    setPlayed(Played)
    setBackin(Backing)
    setYours(Yours)
    setFetured(Fetured)
    setLoader(false)
  };


  return (
    <div className="max-w-[1036px]">

      {
        loader ? <Loader></Loader> :
          <div>
            <div className='p-6' style={{
              height: '400px',
              background: 'rgb(0,0,0)',
              background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(51,51,163,1) 60%)'
            }}>
              <div className='flex items-center gap-4'>
                <img src={left} alt="" />
                <img src={right} alt="" />
              </div>
              <h1 className='text-[39px] text-white mb-4 mt-4'>Good afternoon</h1>
              <div className='flex flex-wrap gap-4'>
                {
                  feture.length > 0 ? feture.map((item, index) => {
                    if (index < 6) {
                      return <TopCardItem data={item} key={index} index={index}></TopCardItem>
                    }
                  }) : <></>
                }
              </div>

            </div>
            <div className=' pb-40 px-6 py-4'>
              {
                topmixes.length > 0 && <h1 className='text-white font-bold text-2xl mt-10'>Your top mixes</h1>
              }
              <div className='flex gap-6  mt-6'>
                {
                  topmixes.length > 0 ? topmixes.map((item, index) => {
                    if (index < 4) {
                      return <PlaylistCard data={item} key={index}></PlaylistCard>
                    }
                  }) : <></>
                }
              </div>
              {
                foryou.length > 0 && <h1 className='text-white font-bold text-2xl mt-10'>Made for you</h1>
              }
              <div className='flex gap-6  mt-6'>
                {
                  foryou.length > 0 ? foryou.map((item, index) => {
                    if (index < 4) {
                      return <PlaylistCard data={item} key={index}></PlaylistCard>
                    }
                  }) : <></>
                }
              </div>
              {
                played.length > 0 && <h1 className='text-white font-bold text-2xl mt-10'>Recently played</h1>
              }
              <div className='flex gap-6  mt-6'>
                {
                  played.length > 0 ? played.map((item, index) => {
                    if (index < 4) {
                      return <PlaylistCard data={item} key={index}></PlaylistCard>
                    }
                  }) : <></>
                }
              </div>
              {
                backin.length > 0 && <h1 className='text-white font-bold text-2xl mt-10'>Jump back in</h1>
              }
              <div className='flex gap-6  mt-6'>
                {
                  backin.length > 0 ? backin.map((item, index) => {
                    if (index < 4) {
                      return <PlaylistCard data={item} key={index}></PlaylistCard>
                    }
                  }) : <></>
                }
              </div>
              {
                yours.length > 0 && <h1 className='text-white font-bold text-2xl mt-10'>Uniquely yours</h1>
              }
              <div className='flex gap-6  mt-6'>
                {
                  yours.length > 0 ? yours.map((item, index) => {
                    if (index < 4) {
                      return <PlaylistCard data={item} key={index}></PlaylistCard>
                    }
                  }) : <></>
                }
              </div>
            </div>
          </div>
      }
    </div>
  );
}

export default Home;
