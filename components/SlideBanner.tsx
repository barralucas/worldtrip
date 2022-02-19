import { Stack } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Image from 'next/image'

import europeSVG from '../public/assets/banner/europe.jpg';
import northAmericaSVG from '../public/assets/banner/north-america.jpg';
import asiaSVG from '../public/assets/banner/asia.jpg';
import southAmericaSVG from '../public/assets/banner/south-america.jpg';
import oceaniaSVG from '../public/assets/banner/oceania.jpg';

export function SlideBanner() {
    return (
        <Stack width={'1240px'} height={'450px'} border={'1px solid red'} margin={'0 auto'}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Stack width={'1240px'} height={'450px'}>
                        <Image layout='fill' src={europeSVG} width={1240} height={450} />
                    </Stack>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <Image layout='fill' src={europeSVG} width={1240} height={450} />
                </SwiperSlide> */}
            </Swiper>
        </Stack>
    );
}