"use client";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';

export const ImageSlider = () => {
    const settings = {
        dots: true,
    };
    return (
        <div className="image-slider-container">
            <Slider {...settings}>
                <div>
                    <img src="http://picsum.photos/400/200"/>
                </div>
                <div>
                    <img src="http://picsum.photos/400/201"/>
                </div>
                <div>
                    <img src="http://picsum.photos/400/202"/>
                </div>
                <div>
                    <img src="http://picsum.photos/400/203"/>
                </div>
            </Slider>
        </div>
    );
}
