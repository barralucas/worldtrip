import { extendTheme } from '@chakra-ui/react'

const themeTemplate = {
    colors: {
        light: {
            900: '#fff',
            500: '#F5F8FA',
            50: '#DADADA'
        },
        dark: {
            900: '#000',
            800: '#47585B',
            700: '#999999',
            50: 'rgba(153, 153, 153, 0.5)'
        },
        highlight: {
            900: '#FFBA08',
            50: 'rgba(255, 186, 8, 0.5)'
        }
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins'
    },
    styles: {
        global: {
            body: {
                bg: 'light.900',
                color: 'light.500'
            }
        }
    }
}

export const theme = extendTheme({ themeTemplate });