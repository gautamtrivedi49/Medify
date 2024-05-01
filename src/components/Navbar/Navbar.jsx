import React from 'react';
import logo from '../../assets/logo.png';
import hero from '../../assets/hero.png';
const Navbar = () => {
  return (
    <div>
      <p className='text-white bg-[#2AA7FF] text-center py-2'> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</p>
      <div className='bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 h-[832px] py-6'>
        <nav className='flex flex-wrap justify-between items-center px-4 md:px-10 py-2 md:py-0'>
          <img src={logo}  alt='logo' className=' w-[92px] h-[27px] md:h-auto' />
          <button className='bg-blue-500 rounded-8 text-white h-[40px] w-[130px] border border-white hover:bg-blue-700 md:hidden'>My Bookings</button>
          <ul className='flex flex-col md:flex-row justify-between gap-2 md:gap-20 w-full md:w-auto md:items-center'>
            <li><a href="#" className='text-[#102851] hover:text-blue-500'>Find Doctors</a></li>
            <li><a href="#" className='text-[#102851] hover:text-blue-500'>Hospitals</a></li>
            <li><a href="#" className='text-[#102851] hover:text-blue-500'>Medications</a></li>
            <li><a href="#" className='text-[#102851] hover:text-blue-500'>Surgeries</a></li>
            <li><a href="#" className='text-[#102851] hover:text-blue-500'>Software for Providers</a></li>
            <li><a href="#" className='text-[#102851] hover:text-blue-500'>Facilities</a></li>
          </ul>
          <button className='hidden md:block bg-blue-500 rounded text-white h-[40px] w-[130px] border border-white hover:bg-blue-700'>My Bookings</button>
        </nav>
        <div className='grid sm:grid-cols-12 grid-cols-1 m-[20px]'>
        <div className='sm:col-span-7 sm:ml-[135px] text-left'>
    <h5 className='text-2xl font-semibold font-Poppins my-2 mt-[100px]'>Skip the travel! Find Online</h5>
    <span className='font-bold text-4xl'>Medical</span> <span className='font-bold text-4xl text-[#2AA7FF]'>Centers</span>
    <p className='my-4'>Connect instantly with a 24x7 specialist or choose to <br/>video visit a particular doctor.</p>
    <button className='md:block bg-blue-500 rounded text-white h-[40px] w-[130px] border border-white hover:bg-blue-700'>Find Centers</button>
</div>

          <div className='sm:col-span-5'>
            <img className='w-[643px] h-[735.94px] relative ml-10' src={hero} />
          </div>
        </div>
    
      </div>
    </div>
  );
}

export default Navbar;
