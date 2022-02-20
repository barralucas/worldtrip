import { Stack, Text, Heading, Box } from '@chakra-ui/react';
import backgroundImage from '../public/background.jpg';

export function Banner() {

    return (
        <Box
            bgImage="url('https://github.com/lucastrindadebarra/worldtrip/blob/main/public/background-banner.svg')"
            bgPosition="center"
            width={1240}
            height={368}
            border={'1px solid red'}
        >
            <Stack direction={'column'} spacing={2}>
                <Heading fontSize={36}>5 Continentes,<br /> infinitas possibilidades.</Heading>
                <Text fontSize={20}>Chegou a hora de tirar do papel a viagem que você<br /> sempre sonhou</Text>
            </Stack>
        </Box>
    );
}