import { Stack } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import Image from 'next/image'

import europeSVG from '../public/assets/banner/europe.jpg';
import northAmericaSVG from '../public/assets/banner/north-america.jpg';
import asiaSVG from '../public/assets/banner/asia.jpg';
import southAmericaSVG from '../public/assets/banner/south-america.jpg';
import oceaniaSVG from '../public/assets/banner/oceania.jpg';

export function SlideBanner() {
    return (
        <Stack width={'1240px'} height={'450px'} border={'1px solid red'}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                <SwiperSlide>
                    <Stack width={'1240px'} height={'450px'} border={'1px solid red'}>
                        <Image layout='fill' width={1240} height={450} src={europeSVG} alt='europa' />
                    </Stack>
                </SwiperSlide>
            </Swiper>
        </Stack>
    );
}