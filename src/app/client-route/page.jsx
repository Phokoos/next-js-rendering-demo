"use client";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';
import {useTheme} from "@/components/theme-provider";
import {clientSideFunction} from "@/utils/client-utils";

export default function ImageSlider() {
    const themeProvider = useTheme();
    console.log(themeProvider.colors.primary);

    const result =  clientSideFunction();
    console.log(result);


    const settings = {
        dots: true,
    };
    return (
        <>
            <h1 style={{color: themeProvider.colors.primary}}>Client Route</h1>
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
        </>
    );
}
