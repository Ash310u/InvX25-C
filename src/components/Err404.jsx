import React from 'react'
import DisconnectedIllustration from '../media/disconnected-illustration.png'

const Err404 = () => {
    return (
        <div className='flex flex-col items-center w-full h-full' >
            <div className='flex flex-row items-center h-full gap-12' >
                <img
                    src={DisconnectedIllustration}
                    alt='disconnected-illustration-by-freepik'
                />
                <div className='flex flex-col gap-8'>
                    <div className='text-8xl'  >
                        Error 404
                    </div>
                    <div className='text-4xl' >
                        This page is not Found
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Err404