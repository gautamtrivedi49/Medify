import React from 'react'
import ver from '../../assets/ver.png';
import patient from '../../assets/patient.svg';
import { RiVerifiedBadgeFill } from "react-icons/ri";
const Patient = () => {
  return (
    <div className='grid sm:grid-cols-12 grid-cols-1  bg-[#E7F0FF] p-11 mb-4'>
        <div className='col-span-7'>
        <img src={patient}/> 
        </div>
        
        <div className=' col-span-5 pt-11'>
            <h5 className='text-[#2AA7FF] font-semibold'>HELPING PATIENTS FROM AROUND THE GLOBE!!</h5>
            <h1 className='text-3xl font-bold my-4'>Patient <span className='text-[#2AA7FF]'>Caring</span></h1>
            <p className='text-[#77829D] mb-4'>Our goal is to deliver quality of care in a courteous, respectful, and <br/>compassionate manner. We hope you will allow us to care for you <br/>and strive to be the first and best choice for healthcare.</p>
            <ul className='py-4 text-[#1B3C74] font-medium text-lg'>
                <li className='flex'> <span className='mt-[5.5px] mr-1 text-blue-700'><RiVerifiedBadgeFill /></span>Stay Updated About Your Health</li>
                 <li className='flex'> <span className='mt-[5.5px] mr-1  text-blue-700'><RiVerifiedBadgeFill /></span>Check Your Results Online</li>
                <li className='flex'> <span className='mt-[5.5px] mr-1  text-blue-700'><RiVerifiedBadgeFill /></span>Manage Your Appointments</li> 
            </ul>
        </div>

    </div>
  )
}

export default Patient