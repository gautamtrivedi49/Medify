import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Card = () => {
    const data = [
        { img: '/data/1.svg' },
        { img: '/data/2.svg' },
        { img: '/data/3.svg' }
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
        <Slider {...settings} className='mb-11'>
            {data.map((item, index) => (
                <div key={index}>
                    <img src={item.img} alt={`Slide ${index}`} />
                </div>
            ))}
        </Slider>
    );
};

export default Card;
