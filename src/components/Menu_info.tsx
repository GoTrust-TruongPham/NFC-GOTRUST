import React from 'react'

export default function MenuInfo() {
    return (
        <div className='h-screen w-[376px] m-auto'>
            <div className='w-full h-full flex flex-col items-center justify-start shadow-xl bg-white min-h-screen'>
                <div className='fixed min-w-[377px] w-full h-full md:max-w-[376px]'>
                    <div className='bg-bg-menu w-full h-full object-cover'>
                        <div className='flex flex-col justify-end w-[376px] h-[75px] rounded-b-xl border bg-gradient-to-r from-[#fff] to-[#DED5BD70] backdrop-blur-3xl blur-[12px] opacity-[44%] drop-shadow-lg'>
                        <div className=' flex justify-start'>
                        <button className='flex justify-between'>
                                <img src="/image/back2.svg" alt="back" />
                            </button>
                        
                        </div>
                            
                        </div>
                        
                    </div>

                </div>

            </div>

        </div>
    )
}
