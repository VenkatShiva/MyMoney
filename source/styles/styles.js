import { StyleSheet } from 'react-native';
import {
    Dimensions
  } from 'react-native';
const fontFamily = "Alegreya-Bold";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCALE = 375; 
const scaleFontSize = (fontSize) => {
    const ratio = fontSize / SCALE; // get ratio based on your standard scale 
    const newSize = Math.round(ratio * SCREEN_WIDTH);
    return newSize; 
}
export default StyleSheet.create({
    centerAlign:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    defaultText:{
        fontFamily,
        fontSize: scaleFontSize(25),
        color:"black"
    }
});