import React from 'react'
import { ScaleLoader } from 'react-spinners'

function Loader() {
    return (
           <div className="loader-container flex justify-center items-center h-screen">
             <ScaleLoader color='#36d7b7'></ScaleLoader>
           </div>
    )
}

export default Loader