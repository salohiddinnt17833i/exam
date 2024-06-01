import React from 'react'

function TopFixedMusic() {
    return (
        <div className='p-5'>
            <div className='flex justify-between'>
                <div>
                    <h3>Music Name</h3>
                    <p>Artist Name</p>
                </div>
                <div>
                    <audio>
                        <source src={'https://p.scdn.co/mp3-preview/ca7bdcb691fb64a5af8a3253b89356390664fcf1?cid=259b3603b4cd455cb569e13ed178f094'} type="audio/mpeg" />
                    </audio>
                </div>
                <div>
                    <p>Assalomunalay</p>
                </div>
            </div>
        </div>
    )
}

export default TopFixedMusic