

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layout/index';
import Search from './pages/Search';
import Libery from './pages/Libery';
import CreatePlaylist from './pages/CreatePlaylist';
import LikedSongs from './pages/LikedSongs';
import ErrorPage from './pages/ErrorPage';
import Playlists from './pages/Playlists';
import React, { createContext, useState } from 'react';


export const audioPlayer = createContext()

function App() {
  const [audio, setAudio] = useState(null)
  
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/your-library' element={<Libery />} />
        <Route path='/create-playlist' element={<CreatePlaylist />} />
        <Route path='/liked-songs' element={<LikedSongs />} />
        <Route path='/playlist/:id' element={<Playlists />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Layout>
  )
}
export default App;
