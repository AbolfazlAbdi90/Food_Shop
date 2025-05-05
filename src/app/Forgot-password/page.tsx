import Link from 'next/link'
import React from 'react'

export default function ForgotPassword() {
  return (
    <div>
     <label htmlFor="email" className='text-[#32343E] relative top-[24] left-[24]'>EMAIL</label>
     <input type="email"
     placeholder='example@gmail.com' 
     id='email'
     className='h-[62px] w-[327px] bg-[#F0F5FA] relative top-[96] left-[-24] rounded-2xl '
     />
     <Link href="/Send-code">
     <button className='relative rounded-2xl bg-[#FF7622] text-white h-[62] w-[327] left-[24] top-[140]'>SEND CODE</button>
     </Link>
    
    </div>
  )
}
