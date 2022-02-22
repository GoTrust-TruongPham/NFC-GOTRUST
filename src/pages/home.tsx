import React from 'react'

export default function Home() {
    return (
        <div className='h-screen'>
            <div className='w-full h-full flex flex-col items-center justify-start shadow-xl  bg-[#ffffff] min-h-screen'>
                <div className='min-w-[376px] w-full h-full md:max-w-[376px] flex flex-col items-center rounded-xl bg-gradient-to-r from-[#CCBF6C] via-[#8F9F59] to-[#0F5B33] min-h-screen'>
                    {/* <div className=' w-[376px] h-[75px]'> */}
                    <div className='absolute flex flex-row justify-end w-[376px] h-[75px] rounded-2xl drop-shadow-lg bg-gradient-to-r from-[#CCBF6C] via-[#8F9F59] to-[#0F5B33] text-white '>
                        <button className='flex items-center pr-6'>
                            <img src="/image/login.svg" alt="login" />
                            <p className='pl-2 font-normal text-[16px]'>Đăng nhập</p>
                        </button>
                    </div>
                    {/* </div> */}
                </div>
                <div className='absolute w-[116px] h-[116px] flex'>
                    <button className='absolute flex justify-between mt-40'>
                        <img src="/image/avatar.png" alt="camera" />
                        <button className='absolute w-[35.62px] h-[35.62px] top-[77.34px] left-[85px]'>
                            <img src="/image/Camera.svg" alt="camera" />
                        </button>
                    </button>
                </div>
                <div className='absolute flex flex-col pt-[300px] text-white'>
                    <p className='font-bold text-2xl capitalize text-center'>nguyen hai linh</p>
                    <p className='font-normal text-center text-base uppercase '>cto |
                    <span className='font-medium uppercase text-base ml-1'>gotrust</span></p>
                </div>

            </div>

        </div>
    )
}
