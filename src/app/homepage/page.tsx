'use client'
import { useState } from 'react';
import Image from 'next/image'
import PhoneMockup from '../components/phonemockup/phone';
import Logo from '../../../public/images/solar_link-circle-bold.png'
import LinkImage from '../../../public/images/Group 273.png'
import { LuLink, LuEye } from "react-icons/lu";
import { PiUserCircleBold } from "react-icons/pi";

const HomePage = () => {
    const [activeContent, setActiveContent] = useState('links');

    const handleClick = (content: string) => {
        setActiveContent(content);
    };

    return (
        <div className='w-full min-h-screen bg-[#FAFAFA] px-[24px] py-[24px]'>
            <div className='h-[78px] w-full flex items-center justify-between bg-white rounded-[12px] px-[24px] '>
                <div className='flex items-center gap-x-2'>
                    <Image
                        src={Logo}
                        alt='logo'
                        width={32}
                        height={32}
                        className='w-[32px] h-[32px]'
                    />
                    <p className='hidden sm:flex text-xl font-bold'>devlinks</p>
                </div>
                <div className='flex items-center gap-x-4 md:gap-x-12 text-sm font-semibold'>
                    <div className={`flex items-center gap-x-2 ${activeContent === 'links' ? 'text-[#633CFF] bg-[#EFEBFF] ' : 'text-[#737373]'} cursor-pointer px-[24px] py-[11px] rounded-[8px]`} onClick={() => handleClick('links')}>
                        <LuLink />
                        <p className='hidden sm:flex'>Links</p>
                    </div>
                    <div className={`flex items-center gap-x-2 ${activeContent === 'profile' ? 'text-[#633CFF] bg-[#EFEBFF] ' : 'text-[#737373]'} cursor-pointer px-[24px] py-[11px] rounded-[8px]`} onClick={() => handleClick('profile')}>
                        <PiUserCircleBold className='text-lg' />
                        <p className='hidden sm:flex'>Profile Details</p>
                    </div>
                </div>
                <button className='hidden sm:flex font-semibold text-[#633CFF] px-[27px] py-[8px] border border-[#633CFF] rounded-[8px] bg-[#FFFFFF] hover:bg-[#EFEBFF]'>Preview</button>
                <button className='flex sm:hidden font-semibold text-[#633CFF] px-[16px] py-[8px] border border-[#633CFF] rounded-[8px] bg-[#FFFFFF] hover:bg-[#EFEBFF]'><LuEye /></button>
            </div>
            <div className='w-full flex gap-x-[24px] mt-[24px]'>
                <div className='hidden w-[560px] h-[834px] min-[950px]:flex justify-center items-center  min-[950px]:p-12 lg:p-24 rounded-[12px] bg-[#FFFFFF]'>
                    <PhoneMockup className='' />
                </div>
                <div className='w-full h-[834px] bg-[#FFFFFF] rounded-[12px]'>
                    <div className='w-full h-[739px] flex flex-col gap-y-[40px] p-[16px] lg:p-[40px]'>
                        {activeContent === 'links' && (
                            <>
                                <div className='w-full flex flex-col gap-y-4'>
                                    <p className='text-2xl font-bold'>Customize your links</p>
                                    <p className='text-sm text-[#737373]'>Add/edit/remove links below and then share all your profiles with the world!</p>
                                </div>
                                <div className='flex flex-col gap-y-[24px]'>
                                    <button className='w-full py-[8px] rounded-[8px] font-semibold bg-[#FFFFFF] hover:bg-[#EFEBFF] text-[#633CFF] border border-[#633CFF]'>+ Add new link</button>
                                    <div className='w-full h-[469px] flex flex-col justify-center items-center gap-y-[40px] bg-[#FAFAFA] rounded-[12px] p-[20px]'>
                                        <Image
                                            src={LinkImage}
                                            alt='link image'
                                            width={250}
                                            height={160}
                                        />
                                        <p className='text-xl font-semibold'>Let's get you started</p>
                                        <p className='text-sm text-center'>Use the "Add new link" button to get started. Once you have more<br className='hidden min-[1100px]:flex' /> than one link, you can reorder and edit them. We're here to help you share your profiles with everyone!</p>
                                    </div>
                                </div>
                            </>
                        )}
                        {
                            activeContent === 'profile' && (
                                <>
                                    <div className='w-full flex flex-col gap-y-4'>
                                        <p className='text-2xl font-bold'>Profile Details</p>
                                        <p className='text-sm text-[#737373]'>Add your details to create a personal touch to your profile</p>
                                    </div>
                                    <div className='flex flex-col gap-y-[24px]'>
                                        <div className='h-[233px] grid grid-cols-3 place-content-center items-center rounded-[12px] p-[20px] bg-[#FAFAFA] text-sm'>
                                            <p>Profile picture</p>
                                            <p>Good</p>
                                            <p>Image must be below 1024 x 1024px.<br />Use PNG or JPG format.</p>
                                        </div>
                                        <form className='h-[274px] lg:h-[208px] flex flex-col  justify-center gap-y-[12px] p-[20px] bg-[#FAFAFA] rounded-[12px] text-sm'>
                                            <div className='w-full flex flex-col min-[1120px]:flex-row lg:items-center md:justify-between'>
                                                <label>First name*</label>
                                                <input type='text' className='w-full md:w-[344px] xl:w-[432px] p-[16px] border border-[#D9D9D9] rounded-[8px] focus:outline-none bg-[#FFFFFF]' placeholder='e.g. John' />
                                            </div>
                                            <div className='w-full flex flex-col  min-[1120px]:flex-row  lg:items-center md:justify-between'>
                                                <label>Last name*</label>
                                                <input type='text' className='w-full md:w-[344px] xl:w-[432px] p-[16px] border border-[#D9D9D9] rounded-[8px] focus:outline-none bg-[#FFFFFF]' placeholder='e.g. Appleseed' />
                                            </div>
                                            <div className='w-full flex flex-col min-[1120px]:flex-row lg:items-center md:justify-between'>
                                                <label>Email</label>
                                                <input type='email' className='w-full md:w-[344px] xl:w-[432px] px-[16px] py-[12px] md:py-[16px] border border-[#D9D9D9] rounded-[8px] focus:outline-none bg-[#FFFFFF]' placeholder='e.g. email@example.com' />
                                            </div>
                                        </form>
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <hr />
                    <div className='w-full flex justify-end px-[40px] py-[24px]'>
                        <button className='w-full sm:w-auto py-[8px] px-[27px] rounded-[8px] bg-[#633CFF] hover:shadow-custom text-[#FFFFFF]'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
