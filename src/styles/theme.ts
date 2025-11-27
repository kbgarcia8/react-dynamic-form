import type { Theme } from "../type/constantTypes"
import { asColor } from "../utils/utils";

export const breakpoints:Record<string, string> ={
    mobile: '320px', //Small iPhone SE & Medium: iPhone 12-15
    tablet: '768px', //iPad 
    desktop: '992px', //Macbook 13" (1280x800)
    largeDesktop: '1200px',
    largerDesktop: '1400px'
}

export const lightTheme:Theme = {
    name: 'light',
    colors: {
        text: asColor('#333446'),
        bg: asColor('#EEEEEE'),
        blue: asColor('#7F8CAA'),
        blue2: asColor('#80A6FF'),
        teal: asColor('#5b8280ff'),
        teal2: asColor('#AEEAE7'),
        gray: asColor('#AEAEAE'),
        information: asColor('#202234'),
        success: asColor('#123524'),
        warning: asColor('#F2C265'),
        error: asColor('#990000')
    }
}

export const darkTheme:Theme = {
    name: 'dark',
    colors: {
        bg: asColor('#333446'),
        text: asColor('#EEEEEE'),
        blue: asColor('#80A6FF'),
        blue2: asColor('#7F8CAA'),
        teal: asColor('#AEEAE7'),
        teal2: asColor('#5b8280ff'),
        gray: asColor('#D0D0DD'),
        information: asColor('#C9E6F0'),
        success: asColor('#9EDF9C'),
        warning: asColor('#FCFFC1'),
        error: asColor('#FAD4D4')
    }
}