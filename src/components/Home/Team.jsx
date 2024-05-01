import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Team = () => {
    const data = [
        
        { img: '/data2/2.svg' },
        { img: '/data2/3.svg' },
        { img: '/data2/4.svg' },
        
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div>
        <h1 className='text-center text-4xl mb-4 font-semibold text-[#1B3C74] '>Our Medical Specialist</h1>
        <Slider {...settings} className='mt-2'>
            
            {data.map((item, index) => (
                <div key={index}>
                    <img src={item.img} alt={`Slide ${index}`} />
                </div>
            ))}
        </Slider></div>
    );
};

export default Team;
