import React from 'react'

export default function Login() {
    return (
        <div className='h-screen w-[376px] m-auto'>
            <div className='w-full h-full flex flex-col items-center justify-start shadow-xl  bg-[#ffffff] min-h-screen'>
                <div className='fixed max-w-[100%] w-full h-full  md:max-w-[376px] rounded-xl bg-gradient-to-b from-[#ADD9FE] via-[#8DDCA3FB]  to-[#016DEBDB] opacity-25 '>
                    {/* <img src="/image/bg_nfc_1x.JPG" alt="background" className='h-screen object-cover' /> */}
                </div>
                {/* <div className='flex flex-row justify-end w-[375px] h-[75px] rounded-b-xl border drop-shadow-lg  opacity-[44%] backdrop-blur-3xl '>
                </div> */}
                <div className='flex flex-row justify-end w-[375px] h-[75px] rounded-b-xl border bg-gradient-to-r from-[#fff] to-[#FFFFFFE0] opacity-[80%]  drop-shadow-lg'>
                </div>
                <div className='absolute items-center pl-60 pt-6'>
                    <button className='flex'>
                        <img src="/image/Login.svg" className='pr-2' alt="login" />
                        <p className='font-normal text-[#6E8FB6] '>Đăng nhập</p>
                    </button>
                </div>
                <div className=' relative flex justify-center w-[342px] h-[820px] rounded-3xl border bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF5A] backdrop-blur-[22px] mt-12'>
                    <div className='absolute w-[116px] h-[116px] mt-32 flex rounded-full'>
                        <button className='absolute flex justify-between'>
                            <img src="/image/avatar.png" alt="camera" />

                        </button>
                    </div>
                    <div className='absolute flex flex-col mt-64 text-[#6E8FB6]'>
                        <p className='font-bold text-2xl uppercase text-center'>nguyen hai linh</p>
                        <p className='font-light text-center text-base uppercase '>cto |
                            <span className='font-medium uppercase text-base ml-1'>gotrust</span></p>
                    </div>

                    <div className='absolute mt-80 justify-evenly'>
                        <div className=' grid-flow-row grid-rows-4 gap-1 justify-between'>
                            <button className='flex-col w-[40px] h-[40px] rounded-full border-white border-[0.5px] rounded-full mr-4'>
                                <img src="/image/Twitter.svg" alt="twitter" className='p-2 ' />
                                <div className='absolute w-[40px] h-[40px] rounded-full border bg-gradient-to-t from-[#21D7FF] via-[#1C84DB] to-[#1C84E4] blur-[3px]'></div>
                            </button>
                            <button className='flex-col w-[40px] h-[40px] rounded-full border-white border-[0.5px] rounded-full mr-4'>
                                <img src="/image/FB.svg" alt="fb" className='p-2' />
                                <div className='absolute w-[40px] h-[40px] rounded-full border bg-gradient-to-t from-[#477DEB] to-[#74CDF9] blur-[3px]'></div>
                            </button>
                            <button className='flex-col w-[40px] h-[40px] rounded-full border-white border-[0.5px] rounded-full mr-4'>
                                <img src="/image/whatapp.svg" alt="whatapp" className='p-2' />
                                <div className='absolute w-[40px] h-[40px] rounded-full border-[0.5px] bg-gradient-to-t from-[#6BDC4A] to-[#009A73] blur-[3px]'></div>
                            </button>
                            <button className='flex-col w-[40px] h-[40px] rounded-full border-white border-[0.5px] rounded-full mr-4'>
                                <img src="/image/Instagram.svg" alt="instagram" className='p-2' />
                                <div className='absolute w-[40px] h-[40px] rounded-full border-[0.5px] bg-gradient-to-t from-[#3A55D2] via-[#4651D5] from-[#FF007A] blur-[3px]'></div>

                            </button>
                        </div>

                    </div>
                    <div className='flex flex-col items-start text-[#6E8FB6] mt-[440px] mr-10'>
                        <p className='font-light text-xs'>Email</p>
                        <p className='font-medium text-center text-[16px]'>linh.nguyen@gotrust.vn</p>
                        <div className=' mt-2'></div>
                        <p className='font-light font-light text-xs'>Số điện thoại</p>
                        <p className='font-medium text-center text-[16px]'>0977721242</p>
                    </div>
                </div>

                <button className='absolute flex flex-row w-[72px] h-[60px] ml-[305px] mt-[680px] justify-center items-center'>
                    <div className='w-[72px] h-[60px] bg-[#fff] backdrop-blur-md drop-shadow-lg rounded-l-lg border-[0.5px] ' />
                    <img src="/image/SMS.svg" alt="sms" className='w-[20px] absolute' />
                </button>

                <button className='absolute flex flex-row w-[72px] h-[60px] ml-[305px] mt-[750px] justify-center items-center'>
                    <div className='w-[72px] h-[60px] bg-[#fff] backdrop-blur-md drop-shadow-lg rounded-l-lg border-[0.5px] ' />
                    <img src="/image/Call.svg" alt="sms" className='w-[20px] absolute' />
                </button>

                <div className='absolute flex  w-[376px] h-[75px] bottom-0 justify-between'>




                    <button className='relative flex w-[375px] h-[75px] rounded-2xl border bg-white  justify-center items-center text-[#6E8FB6]'>

                        {/* <div className='w-[200px] h-[55px] bg-gradient-to-r from-[#fff] to-[##FFFFFFE0] backdrop-blur-3xl opacity-[44%] drop-shadow-lg rounded-t-lg border '/> */}
                        <p>Thêm vào danh bạ</p>
                        <img src="/image/Contract.svg" alt="contract" className='w-[20px] m-2 ' />


                    </button>

                    {/* <button className='flex relative w-[80px] h-[55px] hover:bg-slate-400 rounded-tl-lg justify-center items-center'>
                        <div className='w-[80px] h-[55px] bg-gradient-to-r from-[#fff] to-[#DED5BD70] backdrop-blur-3xl opacity-[44%] drop-shadow-lg rounded-tl-lg border ' />
                        <img src="/image/Mess.svg" alt="mess" className='w-[20px] absolute' />
                    </button> */}






                </div>

            </div>


        </div>
    )
}
