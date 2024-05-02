import React from 'react'
import family from '../../assets/family.svg';
import { RiVerifiedBadgeFill } from "react-icons/ri";
const Family = () => {
  return (
    <div className='grid sm:grid-cols-12 grid-cols-1  bg-[#E7F0FF] p-11 mb-4'>
        
        
        <div className=' col-span-6 pt-11 flex flex-col justify-center'>
            <h5 className='text-[#2AA7FF] text-lg font-semibold'>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</h5>
            <h1 className='text-5xl text-[#1B3C74] font-bold my-4'>Our Families</h1>
            <p className='text-[#77829D] text-lg mb-4 gap-2'>We will work with you to develop individualised care plans,<br/> including management of chronic diseases. If we cannot assist, <br/> we can provide referrals or advice about the type of practitioner <br/> you require. We treat all enquiries sensitively and in the strictest <br/> confidence.</p>
            
        </div>
        <div className='col-span-6'>
        <img src={family}/> 
        </div>

    </div>
  )
}

export default Family