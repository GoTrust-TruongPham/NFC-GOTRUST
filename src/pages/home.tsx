import React from 'react'

export default function Login() {
    return (
        <div className='h-screen w-[376px] m-auto'>
            <div className='w-full h-full flex flex-col items-center justify-start shadow-xl  bg-[#ffffff] min-h-screen'>
                <div className='fixed max-w-[100%] w-full h-full  md:max-w-[376px] '>
                    <img src="/image/bg_nfc_1x.JPG" alt="background" className='h-screen object-cover' />
                </div>
                {/* <div className='flex flex-row justify-end w-[375px] h-[75px] rounded-b-xl border drop-shadow-lg  opacity-[44%] backdrop-blur-3xl '>
                </div> */}
                <div className='flex flex-row justify-end w-[376px] h-[75px] rounded-b-xl border bg-gradient-to-r from-[#fff] to-[#DED5BD70] backdrop-blur-3xl blur-[12px] opacity-[44%] drop-shadow-lg'>
                </div>
                <div className='absolute items-center pl-60 pt-6'>
                    <button className='flex'>
                        <img src="/image/login.svg" className='pr-2' alt="login" />
                        <p className='font-light text-white '>Đăng nhập</p>
                    </button>
                </div>
                <div className='absolute w-[116px] h-[116px] mt-32 flex rounded-full'>
                    <button className='absolute flex justify-between'>
                        <img src="/image/avatar.png" alt="camera" />
                        <button className='absolute w-[35.62px] h-[35.62px] top-[77.34px] left-[85px]  hover:bg-slate-400 rounded-full '>
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
                            <img src="/image/Facebook.svg" alt="facebook"  className=' justify-center p-2'/>
                        </button>
                        <button className='w-12 h-12 border-2 rounded-full hover:bg-slate-400 m-1 backdrop-blur-3xl'>
                            <img src="/image/Telegram.svg" alt="telegram" className=' justify-center p-2' />
                        </button>
                        <button className='w-12 h-12 border-2 rounded-full hover:bg-slate-400 m-1 backdrop-blur-3xl'>
                            <img src="/image/Twitter.svg" alt="twitter" className=' justify-center p-2' />
                        </button>
                        <button  className='w-12 h-12 border-2 rounded-full hover:bg-slate-400 m-1 backdrop-blur-3xl'>
                            <img src="/image/Medium.svg" alt="medium"  className=' justify-center p-2' />
                        </button>
                    </div>
                    <div className='flex flex-col items-center text-white'>
                        <p className='font-medium text-xl text-center mt-5'>linh.nguyen@gotrust.vn</p>
                        <p className='font-light text-center text-lg  '>0977721242</p>
                    </div>
                </div>
                <div className='absolute flex  w-[375px] h-[50px] bottom-0 justify-between'>

                    <button className='flex relative w-[80px] h-[55px] hover:bg-slate-400 rounded-tr-lg justify-center items-center'>
                        <div className='w-[80px] h-[55px] bg-gradient-to-r from-[#fff] to-[#DED5BD70] backdrop-blur-3xl opacity-[44%] drop-shadow-lg rounded-tr-lg border ' />
                        <img src="/image/Call.svg" alt="call" className='w-[20px] absolute' />
                    </button>


                    <button className='flex relative w-[200px] h-[55px] hover:bg-slate-400 rounded-t-lg  justify-center items-center'>
                    
                        <div className='w-[200px] h-[55px] bg-gradient-to-r from-[#fff] to-[#DED5BD70] backdrop-blur-3xl opacity-[44%] drop-shadow-lg rounded-t-lg border '/>
                        
                        <img src="/image/Contract.svg" alt="contract" className='w-[20px] absolute'/>
                       
                    </button>

                    <button className='flex relative w-[80px] h-[55px] hover:bg-slate-400 rounded-tl-lg justify-center items-center'>
                        <div className='w-[80px] h-[55px] bg-gradient-to-r from-[#fff] to-[#DED5BD70] backdrop-blur-3xl opacity-[44%] drop-shadow-lg rounded-tl-lg border ' />
                        <img src="/image/Mess.svg" alt="mess" className='w-[20px] absolute' />
                    </button>






                </div>

            </div>


        </div>
    )
}
