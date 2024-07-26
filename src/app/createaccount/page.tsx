'use client'
import { FormEvent, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../../firebaseConfig';
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import Link from 'next/link';
import toast from 'react-hot-toast';
import LoadingSpinner from '../components/loader/loadingSpinner';
import Logo from '../../../public/images/solar_link-circle-bold.png'
import { AiTwotoneMail } from "react-icons/ai";
import { IoIosLock } from "react-icons/io";

const CreateAccount = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [emptyField, setEmptyField] = useState(false)
    const [passWordLength, setPasswordLength] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const handleAccountCreate = async (event: FormEvent) => {
        event.preventDefault()

        setIsLoading(true)
        if (!email || !password || !confirmPassword) {
            setEmptyField(true)
            setIsLoading(false)
            return
        }

        if (password.length < 8) {
            setPasswordLength(true)
            setIsLoading(false)
            return
        }

        if (password !== confirmPassword) {
            toast.error("Passwords don't match");
            setIsLoading(false)
            return;
        }

        try {
            await createUserWithEmailAndPassword(getAuth(app), email, password);
            toast.success('Account created successfully')
            setIsLoading(false)
            router.push("/");
        } catch (e) {
            setIsLoading(false)
            toast.error((e as Error).message);
        }
    }

    return (
        <div className='h-screen w-full flex items-center justify-center sm:bg-[#FAFAFA] px-4'>
            <div className='w-full flex flex-col items-center gap-y-6'>
                <div className='flex items-center gap-x-2'>
                    <Image
                        src={Logo}
                        alt='logo'
                        width={40}
                        height={40}
                        className='w-[2.5rem] h-[2.5rem]'
                    />
                    <h1 className='font-bold'>devlinks</h1>
                </div>
                <form onSubmit={handleAccountCreate} className='w-full min-[500px]:w-[476px] flex flex-col gap-y-6 bg-[#FFFFFF] px-6 py-8 rounded-[12px] text-[#737373] text-sm'>
                    <div>
                        <p className='text-2xl font-bold text-black'>Create Account</p>
                        <p className='mt-2 font-light'>Let's get you started sharing your links!</p>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <label htmlFor='email_address'>Email address</label>
                        <div className={`relative w-full flex items-center gap-x-2 border ${emptyField && !email ? 'border-[#FF3939]' : 'border-[#737373]'} px-2 py-2 rounded-md focus-within:shadow-custom focus-within:border-[#633CFF]`}>
                            <AiTwotoneMail />
                            <input type='email' value={email} name='email' onChange={(e) => setEmail(e.target.value)} className='w-full focus:outline-none bg-transparent text-[#333333]' id='email_address' placeholder='e.g.alex@email.com' />
                            {emptyField && !email && <p className='absolute right-2 text-[#FF3939] text-[0.6rem]'>Can't be empty</p>}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='password'>Password</label>
                        <div className={`relative w-full flex items-center gap-x-2 border ${emptyField && !password ? 'border-[#FF3939]' : 'border-[#737373]'} px-2 py-2 rounded-md focus-within:shadow-custom focus-within:border-[#633CFF]`}>
                            <IoIosLock />
                            <input type='password' value={password} name='password' onChange={(e) => setPassword(e.target.value)} id='password' className='w-full focus:outline-none bg-transparent text-[#333333]' placeholder='At least 8 characters' />
                            {emptyField && !password && <p className='absolute right-2 text-[#FF3939] text-[0.6rem]'>Please check again</p>}
                        </div>
                        {passWordLength && <p className='text-[#FF3939] text-[0.6rem]'>Password must be at least 8 characters long.</p>}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='confirmpass'>Confirm Password</label>
                        <div className={`relative w-full flex items-center gap-x-2 border ${emptyField && !confirmPassword ? 'border-[#FF3939]' : 'border-[#737373]'} px-2 py-2 rounded-md focus-within:shadow-custom focus-within:border-[#633CFF]`}>
                            <IoIosLock />
                            <input type='password' value={confirmPassword} name='confirmPassword' onChange={(e) => setConfirmPassword(e.target.value)} id='confirmpass' className='w-full focus:outline-none bg-transparent text-[#333333]' placeholder='At least 8 characters' />
                            {emptyField && !confirmPassword && <p className='absolute right-2 text-[#FF3939] text-[0.6rem]'>Please check again</p>}
                        </div>
                    </div>
                    <p className='text-xs'>Password must contain at least 8 characters</p>
                    <button disabled={isLoading} className={`flex justify-center w-full ${isLoading ? 'bg-[#EFEBFF]' : 'bg-[#633CFF]'} text-white py-2 rounded-md hover:bg-[#BEADFF] hover:shadow-custom`}>
                        {isLoading ? <LoadingSpinner /> : 'Create new account'}
                    </button>
                    <p className='flex justify-center flex-wrap gap-x-1 text-center text-xs'>Already have an account?<Link href={'/'}><span className='text-[#633CFF]'>Login</span></Link></p>
                </form>
            </div>
        </div>
    )
}

export default CreateAccount
