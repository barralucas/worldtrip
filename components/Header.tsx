import { Stack } from '@chakra-ui/react';
import logoSVG from '../public/assets/logo.svg';
import Image from 'next/image'

export function Header() {
    return (
        <Stack height={100} justifyContent={'center'}>
            <Image
                src={logoSVG}
                alt="logo"
                width={184}
                height={46}
            />
        </Stack>
    );
}