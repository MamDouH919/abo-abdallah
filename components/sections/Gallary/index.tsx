"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from '@/app/Images/img2.webp';
import image2 from '@/app/Images/img3.webp';
import image3 from '@/app/Images/img4.webp';
import image4 from '@/app/Images/img5.webp';
import image5 from '@/app/Images/img6.webp';
import image6 from '@/app/Images/img7.webp';
import image7 from '@/app/Images/img8.webp';
import image8 from '@/app/Images/img9.webp';
import image9 from '@/app/Images/img10.webp';
import image10 from '@/app/Images/img11.webp';
import image11 from '@/app/Images/img12.webp';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { styled } from "@mui/material/styles";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./index.css"

import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import SectionTitle from '@/components/layouts/SectionTitle';

const Root = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    [`& .swiper-pagination`]: {
        bottom: "0",
        [theme.breakpoints.down("md")]: {
            bottom: "10px",
        },
    },
    [`& .swiper-pagination-bullet`]: {
        width: "25px",
        height: "25px",
        backgroundColor: theme.palette.secondary.dark,
        borderRadius: "50%",
        margin: "0 10px",
        // opacity: "0.2",
    },
    [`& .swiper-pagination-bullet-active`]: {
        width: "30px",
        height: "30px",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "50%",
        margin: "0 10px",
        opacity: "1",
    },
    [`& .navigation-button`]: {
        position: "absolute",
        bottom: "20px",
        transform: "translateY(-50%)",
        fontSize: "50px",
        opacity: "1",
        margin: "0 10px",
        color: theme.palette.primary.main,
        zIndex: 10,
        display: "flex",
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
            fontSize: "35px",
            bottom: "55px",
        },
    },
    [`& .navigation-button.next`]: {
        right: "30%",
        [theme.breakpoints.down("md")]: {
            right: "10%",
        },
    },
    [`& .navigation-button.prev`]: {
        left: "30%",
        [theme.breakpoints.down("md")]: {
            left: "10%",
        },
    },
}));

const data = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11]

function App() {
    return (
        <Root className="container" id="our-work-gallery">
            <SectionTitle
                sectionTitle='معرض اعمالنا'
            />
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                navigation={{
                    nextEl: '.next',
                    prevEl: '.prev',
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                {data.map((element, index) => (
                    <SwiperSlide key={index}>
                        <Image loading='lazy' src={element} alt="صباغ الكويت ، آصباغ الكويت ، أحسن صباغ في الكويت" />
                    </SwiperSlide>
                ))}
                {data.map((element, index) => (
                    <SwiperSlide key={index}>
                        <Image loading='lazy' src={element} alt="صباغ الكويت ، آصباغ الكويت ، أحسن صباغ في الكويت" />
                    </SwiperSlide>
                ))}

            </Swiper>
            <div className="navigation-button next">
                {<FaArrowLeft />}
            </div>
            <div className="navigation-button prev">
                {<FaArrowRight />}
            </div>
        </Root>
    );
}

export default App;