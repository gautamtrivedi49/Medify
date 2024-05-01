import React, { useState } from 'react';

const Specialisation = () => {
    const data = [
        { img: '/data3/1.svg' },
        { img: '/data3/2.svg' },
        { img: '/data3/3.svg' },
        { img: '/data3/4.svg' },
        { img: '/data3/5.svg' },
        { img: '/data3/6.svg' },
        { img: '/data3/7.svg' },
        { img: '/data3/8.svg' },
        { img: '/data3/1.svg' },
        { img: '/data3/2.svg' },
        { img: '/data3/3.svg' },
        { img: '/data3/4.svg' },
        { img: '/data3/5.svg' },
        { img: '/data3/6.svg' },
        { img: '/data3/7.svg' },
        { img: '/data3/8.svg' }
    ];


    const [showAll, setShowAll] = useState(false);

    const handleToggleView = () => {
        setShowAll(!showAll);
    };

    return (
        <div className='flex bg-[#E7F0FF] p-11 mb-4 flex-col justify-center items-center'>
            <h1 className='text-center text-4xl mb-11 font-semibold text-[#1B3C74]'>Find by specialisation</h1>
            <div className='grid grid-cols-4 gap-4'>
                {data.slice(0, showAll ? data.length : 8).map((item, index) => (
                    <img key={index} src={item.img} alt={`Specialization ${index}`} />
                ))}
            </div>
            <button onClick={handleToggleView} className='md:block bg-blue-500 rounded text-white h-[40px] w-[130px] border border-white hover:bg-blue-700'>
                {showAll ? "View Less" : "View More"}
            </button>
        </div>
    );
};

export default Specialisation;