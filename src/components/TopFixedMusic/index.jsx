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
        <div className='p-5'>
            <div className='flex justify-between'>
                <div>
                    <h3>Music Name</h3>
                    <p>Artist Name</p>
                </div>
                <div>
                    <audio controls ref={setAudioRef}>
                        <source src={props.music} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
                <div>
                    <p>Assalomunalay</p>
                </div>
            </div>
        </div>
    );
}

export default TopFixedMusic;
