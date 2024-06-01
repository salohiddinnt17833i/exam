import React from 'react'
import { NavLink } from 'react-router-dom'

import HomeIcon from '../../assets/SidebarPictures/home.svg'
import SearchIcon from '../../assets/SidebarPictures/search.svg'
import LibararyIcon from '../../assets/SidebarPictures/libars.svg'
import CreatePlaylistIcon from '../../assets/SidebarPictures/createPlaylists.svg'
import LikedSongsIcon from '../../assets/SidebarPictures/liked.svg'
import '../Sidebar.css'
function LeftSidebar() {
  return (
    <div className='w-full'>
      <div className='px-6 py-4'>
        <div className='flex flex-col gap-5'>
          <NavLink to={'/'}> <span className='flex gap-4'><img width={32} height={32} src={HomeIcon} alt="" /> Home</span></NavLink>
          <NavLink to={'/search'}> <span className='flex gap-4'><img width={32} height={32} src={SearchIcon} alt="" /> Search</span></NavLink>
          <NavLink to={'/your-library'}> <span className='flex gap-4'><img width={32} height={32} src={LibararyIcon} alt="" /> Your Library</span></NavLink>
          <NavLink to={'/create-playlist'} className='mt-3'><span className='flex gap-4'><img width={32} height={32} src={CreatePlaylistIcon} alt="" /> Create Playlist</span></NavLink>
          <NavLink to={'/liked-songs'}> <span className='flex gap-4'><img width={32} height={32} src={LikedSongsIcon} alt="" /> Liked Songs</span></NavLink>
          <hr />
        </div>
        <div className='flex flex-col gap-1 mt-6'>
          <span>Chill Mix</span>
          <span>Insta Hits</span>
          <span>Your Top Songs 2021 </span>
          <span>Mellow Songs </span>
          <span>Anime Lofi & Chillhop Music </span>
          <span>BG Afro “Select” Vibes </span>
          <span>Afro “Select” Vibes </span>
          <span>Happy Hits! </span>
          <span>Deep Focus </span>
          <span>Instrumental Study </span>
          <span>OST Compilations</span>
          <span>Nostalgia for old souled mill... </span>
          <span>Mixed Feelings </span>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar