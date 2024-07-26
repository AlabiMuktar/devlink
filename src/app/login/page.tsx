'use client'
import { FormEvent, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../../firebaseConfig';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import LoadingSpinner from '../components/loader/loadingSpinner';
import Logo from '../../../public/images/solar_link-circle-bold.png'
import { AiTwotoneMail } from "react-icons/ai";
import { IoIosLock } from "react-icons/io";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emptyField, setEmptyField] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const router = useRouter()

    const handleLoginSubmit = async (event: FormEvent) => {
        event.preventDefault()

        setIsLoading(true)

        if (!email || !password) {
            setEmptyField(true)
            setIsLoading(false)
            return
        }

        try {
            const credential = await signInWithEmailAndPassword(
              getAuth(app),
              email,
              password
            );
            const idToken = await credential.user.getIdToken();
      
            await fetch("/", {
              headers: {
                Authorization: `Bearer ${idToken}`,
              },
            });
            toast.success('Login successful')
      
            router.push("/homepage");
          } catch (e) {
            toast.error((e as Error).message);
            setIsLoading(false)
          }
    }


    return (
        <div className='h-screen w-full flex items-center justify-center min-[500px]:bg-[#FAFAFA] px-4'>
            <div className='flex flex-col items-center gap-y-6'>
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
                <form onSubmit={handleLoginSubmit} className='w-full min-[500px]:w-[476px] flex flex-col gap-y-6 bg-white px-6 py-8 rounded-[12px] text-[#737373] text-sm'>
                    <div>
                        <p className='text-2xl font-bold text-black'>Login</p>
                        <p className='mt-2 font-light'>Add your details below to get back into the app</p>
                    </div>
                    <div className='flex flex-col mt-2'>
                        <label htmlFor='email_address'>Email address</label>
                        <div className={`relative w-full flex items-center gap-x-2 border ${emptyField && !email ? 'border-[#FF3939]' : 'border-[#737373]'} px-2 py-2 rounded-md focus-within:shadow-custom focus-within:border-[#633CFF]`}>
                            <AiTwotoneMail />
                            <input type='email' value={email} name='email' onChange={(e) => setEmail(e.target.value)} className='w-full text-[#333333] focus:outline-none focus:bg-transparent' id='email_address' placeholder='e.g.alex@email.com' />
                            {emptyField && !email && <p className='absolute right-2 text-[#FF3939] text-[0.6rem]'>Can't be empty</p>}
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='password'>Password</label>
                        <div className={`relative w-full flex items-center gap-x-2 border ${emptyField && !password ? 'border-[#FF3939]' : 'border-[#737373]'} px-2 py-2 rounded-md focus-within:shadow-custom focus-within:border-[#633CFF]`}>
                            <IoIosLock />
                            <input type='password' value={password} name='password' onChange={(e) => setPassword(e.target.value)} id='email_address' className='w-full focus:outline-none text-[#333333]' placeholder='Enter your password' />
                            {emptyField && !password && <p className='absolute right-2 text-[#FF3939] text-[0.6rem]'>Please check again</p>}
                        </div>
                    </div>
                    <button disabled={isLoading} className={`flex justify-center w-full ${isLoading ? 'bg-[#EFEBFF]' : 'bg-[#633CFF]'} text-white py-2 rounded-md hover:bg-[#BEADFF] hover:shadow-custom`}>
                        {isLoading ? <LoadingSpinner /> : 'Login'}
                    </button>
                    <p className='flex justify-center gap-x-1 text-center text-xs'>Don't have an account?<Link href={'/createaccount'}><span className='text-[#633CFF]'>Create account</span></Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login
