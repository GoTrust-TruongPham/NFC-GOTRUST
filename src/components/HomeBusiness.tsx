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
                <div className=' relative flex justify-between w-[342px] h-[820px] rounded-3xl border bg-gradient-to-b from-[#FFFFFFCC] to-[#FFFFFF5A] backdrop-blur-[22px] mt-12'>
                    <button className='absolute w-[35px] h-[35px] border-[0.5px] rounded-full backdrop-blur-[4px] shadow-sm mt-6 ml-4'>
                        <img src="/image/Shape.svg" alt="back" className='ml-3' />
                    </button>
                    <p className='absolute flex w-[291px] h-[35px] ml-16 mt-6 items-center font-medium text-2xl text-[#6E8FB6E0]'>Thông tin doanh nghiệp</p>

                    <div className=' absolute pt-28 pl-8'>
                        {/* <div className='w-[375px] h-[75px] mr-60 justify-start'> */}

                            <button className=' w-[350px] h-[32px] flex flex-col  '>
                                <p className='font-light text-xs text-[#6E8FB6]'>Doanh nghiệp</p>
                                <p className='font-medium text-lg text-[#6E8FB6] uppercase'>gotrust</p>
                                <img src="/image/forward.svg" alt="forward" className='w-[7px] h-[12px] ml-64 mt-[-28px]' />
                            </button>
                            
                            <div className='static w-[300px] border-solid border-[1px] bg-[#6E8FB61F] mt-4'></div>
                            
                            <button className=' w-[350px] h-[32px] flex flex-col w-[7px] h-[12px] mt-2 '>
                                <p className='font-light text-xs text-[#6E8FB6]'>Doanh nghiệp</p>
                                <p className='font-medium text-lg text-[#6E8FB6] uppercase'>shopdi</p>
                                <img src="/image/forward.svg" alt="forward" className='w-[7px] h-[12px] ml-64 mt-[-28px]' />
                            </button>

                            <div className='static w-[300px] border-solid border-[1px] bg-[#6E8FB61F] mr-28 mt-4'></div>

                            <button className=' w-[350px] h-[32px] flex flex-col w-[7px] h-[12px] mt-2'>
                                <p className='font-light text-xs text-[#6E8FB6]'>Doanh nghiệp</p>
                                <p className='font-medium text-lg text-[#6E8FB6] uppercase'>AI.Dynamix</p>
                                <img src="/image/forward.svg" alt="forward" className='w-[7px] h-[12px] ml-64 mt-[-28px]' />
                            </button>
                        {/* </div> */}

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
