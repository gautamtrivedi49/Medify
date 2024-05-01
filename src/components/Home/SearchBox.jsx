import React from 'react'
import u from '../../assets/u.svg';
import h from '../../assets/h.svg';
import Hospital from '../../assets/Hospital.svg';
import Capsule from '../../assets/Capsule.svg';
import Drugstore from '../../assets/Drugstore.svg';



const SearchBox = () => {
  return (
    <div className="flex justify-center">
  <div className='bg-white h-[400px] relative shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] mb-8  rounded-lg border border-white flex m-[-270px] flex-col sm:w-[1350px]  '>
    <div>
    <form class='flex justify-between space-x-11 m-10'>
    <div class="relative flex items-center">
        <input class="rounded sm:w-[400px] pl-10 pr-4 py-2 border border-gray-300" type="text" placeholder="State" />
        <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59994 4.7999C6.94898 4.7999 4.79996 6.94894 4.79996 9.5999C4.79996 12.2509 6.94898 14.3999 9.59994 14.3999C12.2509 14.3999 14.3999 12.2509 14.3999 9.5999C14.3999 6.94894 12.2509 4.7999 9.59994 4.7999ZM2.39996 9.5999C2.39996 5.62345 5.6235 2.3999 9.59994 2.3999C13.5764 2.3999 16.7999 5.62345 16.7999 9.5999C16.7999 11.1549 16.307 12.5948 15.4688 13.7717L21.2484 19.5514C21.7171 20.02 21.7171 20.7798 21.2484 21.2484C20.7798 21.7171 20.02 21.7171 19.5514 21.2484L13.7718 15.4688C12.5948 16.307 11.1549 16.7999 9.59994 16.7999C5.6235 16.7999 2.39996 13.5764 2.39996 9.5999Z" fill="#9CA3AF"/>
        </svg>
    </div>
    <div class="relative flex items-center">
        <input class="rounded sm:w-[400px] pl-10 pr-4 py-2 border border-gray-300" type="text" placeholder="City" />
        <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.59994 4.7999C6.94898 4.7999 4.79996 6.94894 4.79996 9.5999C4.79996 12.2509 6.94898 14.3999 9.59994 14.3999C12.2509 14.3999 14.3999 12.2509 14.3999 9.5999C14.3999 6.94894 12.2509 4.7999 9.59994 4.7999ZM2.39996 9.5999C2.39996 5.62345 5.6235 2.3999 9.59994 2.3999C13.5764 2.3999 16.7999 5.62345 16.7999 9.5999C16.7999 11.1549 16.307 12.5948 15.4688 13.7717L21.2484 19.5514C21.7171 20.02 21.7171 20.7798 21.2484 21.2484C20.7798 21.7171 20.02 21.7171 19.5514 21.2484L13.7718 15.4688C12.5948 16.307 11.1549 16.7999 9.59994 16.7999C5.6235 16.7999 2.39996 13.5764 2.39996 9.5999Z" fill="#9CA3AF"/>
        </svg>
    </div>
    <button class='md:block bg-blue-500 rounded text-white h-[40px] w-[130px] border border-white hover:bg-blue-700'>Search</button>
</form>

    </div>
    <div className='mt-4'>
        <h4 className='text-center font-semibold mt-4'>You may be looking for</h4>
        <ul className='flex justify-between m-8 '>
            <li className='flex flex-col justify-center items-center w-[203px] h-[153px] border border-transparent bg-[#FAFBFE] rounded-lg text-[#ABB6C7]'>
              <img className='w-[45px] h-[52px] m-2' src={u}/>
              Doctors</li>
              <li className='flex flex-col justify-center items-center w-[203px] h-[153px] border border-transparent bg-[#FAFBFE] rounded-lg text-[#ABB6C7]'>
              <img className='w-[45px] h-[52px] m-2' src={Drugstore}/>
              Labs</li>
              <li className='flex flex-col justify-center items-center w-[203px] h-[153px] border border-transparent bg-[#FAFBFE] rounded-lg text-[#ABB6C7]'>
              <img className='w-[45px] h-[52px] m-2' src={Hospital}/>
              Hospitals</li>
              <li className='flex flex-col justify-center items-center w-[203px] h-[153px] border border-transparent bg-[#FAFBFE] rounded-lg text-[#ABB6C7]'>
              <img className='w-[45px] h-[52px] m-2' src={Capsule}/>
              Medical Store</li>
              <li className='flex flex-col justify-center items-center w-[203px] h-[153px] border border-transparent bg-[#FAFBFE] rounded-lg text-[#ABB6C7]'>
              <img className='w-[45px] h-[52px] m-2' src={h}/>
              Ambulance</li>
        </ul>
    </div>
  </div>
</div>


  )
}

export default SearchBox