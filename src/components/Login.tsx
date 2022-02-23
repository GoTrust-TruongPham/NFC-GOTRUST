import React from 'react'

export default function Login() {
  return (
    <div className='h-screen'>
      <div className='w-full h-full  flex flex-col items-center justify-start shadow-xl  bg-[#ffffff] min-h-screen'>
        <div className='fixed min-w-[377px] w-full h-full   md:max-w-[376px] min-h-screen'>
          <img src="/image/bg_nfc_1x.JPG" alt="background" />
        </div>
        <div className='flex flex-row justify-end w-[374px] h-[75px] rounded-b-2xl border drop-shadow-lg  opacity-[44%] backdrop-blur-3xl '>
        </div>
        <div className='absolute items-center pl-60 pt-6'>
          <button className='flex'>
            <img src="/image/login.svg" className='pr-2' alt="login" />
            <p className='font-light text-white '>Đăng nhập</p>
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
          <div className=' grid-flow-row grid-rows-5 gap-1'>
            <button>
              <img src="/image/Linkedin.svg" alt="linkedin" />
            </button>
            <button>
              <img src="/image/Facebook.svg" alt="facebook" />
            </button>
            <button>
              <img src="/image/Telegram.svg" alt="telegram" />
            </button>
            <button>
              <img src="/image/Twitter.svg" alt="twitter" />
            </button>
            <button>
              <img src="/image/Medium.svg" alt="medium" />
            </button>
          </div>
          <div className='flex flex-col items-center text-white'>
            <p className='font-medium text-xl text-center'>linh.nguyen@gotrust.vn</p>
            <p className='font-extralight text-center text-lg  '>0977721242</p>
          </div>
        </div>
      </div>


    </div>
  )
}
