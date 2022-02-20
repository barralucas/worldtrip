import { Stack, Text, Heading, Box, Flex } from '@chakra-ui/react';
import backgroundImage from '../public/background.jpg';

export function Banner() {

    return (
        <Flex
            bgImage="url('https://github.com/lucastrindadebarra/worldtrip/blob/main/public/background.jpg?raw=true')"
            bgPosition="center"
            width={1240}
            height={340}
            flexDirection="row"
            paddingTop={100}
            paddingLeft={100}
            justifyContent="space-around"
        >
            <Stack direction="column" spacing={2}>
                <Heading color="white" fontSize={36}>5 Continentes,<br /> infinitas possibilidades.</Heading>
                <Text color="white" fontSize={20}>Chegou a hora de tirar do papel a viagem que você<br /> sempre sonhou</Text>
            </Stack>

            <Box
                bgImage="url('https://raw.githubusercontent.com/lucastrindadebarra/worldtrip/0fd57b5e4f393bfa1b17b66d4c8becbb396a2a24/public/assets/airplane.svg')"
                bgPosition="center"
                width={417}
                height={270}
            />
        </Flex>
    );
}