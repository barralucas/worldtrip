import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Stack } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { SlideBanner } from '../components/SlideBanner';

const Home: NextPage = () => {
  return (
    <Stack direction={'column'} maxWidth={'1440px'} margin={'0 auto'} align={'center'}>
      <Header />
      <SlideBanner />
    </Stack>
  )
}

export default Home
