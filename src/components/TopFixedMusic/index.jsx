import React, { useEffect, useState } from 'react';

function TopFixedMusic(props) {
    const [audioRef, setAudioRef] = useState(null);
    useEffect(() => {
        if (audioRef) {
            audioRef.pause();
            audioRef.load();
            audioRef.play();
        }
    }, [props.music, audioRef]);

    return (
        <div className='w-[1036px] bg-black fixed z-40 bottom-0'>
            <div className='p-5'>
                <div className='flex w-[100%] items-center justify-between gap-10'>
                    <p>{props.data.album.name}</p>
                    <audio controls ref={setAudioRef}>
                        <source src={props.music} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        </div>
    );
}

export default TopFixedMusic;
