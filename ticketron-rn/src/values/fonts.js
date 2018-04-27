import { Platform } from 'react-native';



export const Fonts = {
    default : Platform.OS === 'ios'  ? 'Avenir Next' : 'sans-serif',
    thin : Platform.OS === 'ios'  ? 'AvenirNext-UltraLight' : 'sans-serif-thin',



}