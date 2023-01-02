import { extendTheme } from "native-base";

export const THEME = extendTheme({
    colors:{
        gray:{
            950:'#09090A',
            900:'#121214',
            800:'#202024',
            600:'#323238',
            300:'#8D8D99',
            200:'#C4C4CC'
        },
        green:{
            500:'#18594B',
        },
        yellow:{
            600:'#BBA317',
            500:'#F9C22A'
        },
        red:{
           500:'#DB4437' 
        },
        white: '#ffffff',
    },
    fonts:{
        heading:'Roboto_700Bold',
        body:'Roboto_400Regular',
        medium:'Roboto_500Medium'
    },
    fontWeights:{
        bold : 700,
        normal: 400,
        medium: 500
    },
    fontSizes:{
        xs: 14,
        sm: 16,
        md: 18,
        lg: 22,
        xl: 26,
        rt: 32
    },
    sizes:{
        14: 56
    }
});