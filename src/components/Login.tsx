import React from 'react'

export default function Login() {
  return (
    <div className='h-screen'>
      <div className='w-full h-full  flex flex-col items-center justify-start shadow-xl  bg-[#ffffff] min-h-screen'>
        <div className='fixed min-w-[377px] w-full h-full md:max-w-[376px]'>
          <img src="/image/bg_nfc_1x.JPG" alt="background" className='h-screen object-cover' />
        </div>
        <div className='flex flex-row justify-between w-[375px] h-[75px] rounded-b-xl border drop-shadow-lg  opacity-[60%] backdrop-blur-3xl '>
        </div>
        <div className='absolute items-center pl-60 pt-6'>
          <button className='flex-col'>
            <img src="/image/Menu.svg" className='pl-4' alt="menu" />
            <p className='font-normal text-white pl-1 '>Menu</p>
          </button>
        </div>
        <div className='absolute items-center pl-30 pt-4'>
          <button className='flex-col'>
            <img src="/image/History.svg" className='pl-4' alt="history" />
            <p className='font-normal text-white '>Lịch sử</p>
          </button>
        </div>
        <div className='absolute items-center pr-60 pt-4'>
          <button className='flex flex-col'>
            <img src="/image/Home.svg" className=' pl-6' alt="home" />
            <p className='font-normal text-white '>Trang chủ</p>
          </button>
        </div>
        <div className='absolute w-[116px] h-[116px] mt-32 flex'>
          <button className='absolute flex justify-between'>
            <img src="/image/avatar.png" alt="camera" />
            <button className='absolute w-[35.62px] h-[35.62px] top-[77.34px] left-[85px]'>
              <img src="/image/Camera.svg" alt="camera" />
            </button>
          </button>
        </div>

        <div className='absolute flex flex-col mt-64 text-white'>
          <p className='font-bold text-2xl capitalize text-center'>nguyen hai linh</p>
          <p className='font-light text-center text-base uppercase '>cto |
            <span className='font-medium uppercase text-base ml-1'>gotrust</span></p>
        </div>

        <div className='absolute mt-[360px]'>
          <div className=' grid-flow-row grid-rows-5 gap-1 '>
            <button className='w-12 h-12 border-2 rounded-full hover:bg-slate-400 m-1 backdrop-blur-3xl'>
              <img src="/image/Linked.svg" alt="linkedin" className=' p-2' />
            </button>
            <button className='w-12 h-12 border-2 rounded-full hover:bg-slate-400 m-1 backdrop-blur-3xl'>
              <img src="/image/Facebook.svg" alt="facebook" className=' justify-center p-2' />
            </button>
            <button className='w-12 h-12 border-2 rounded-full hover:bg-slate-400 m-1 backdrop-blur-3xl'>
              <img src="/image/Telegram.svg" alt="telegram" className=' justify-center p-2' />
            </button>
            <button className='w-12 h-12 border-2 rounded-full hover:bg-slate-400 m-1 backdrop-blur-3xl'>
              <img src="/image/Twitter.svg" alt="twitter" className=' justify-center p-2' />
            </button>
            <button className='w-12 h-12 border-2 rounded-full hover:bg-slate-400 m-1 backdrop-blur-3xl'>
              <img src="/image/Medium.svg" alt="medium" className=' justify-center p-2' />
            </button>
          </div>
          <div className='flex flex-col items-center text-white'>
            <p className='font-medium text-xl text-center mt-5'>linh.nguyen@gotrust.vn</p>
            <p className='font-light text-center text-lg  '>0977721242</p>
          </div>
        </div>
      </div>


    </div>
  )
}
