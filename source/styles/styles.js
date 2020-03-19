import { StyleSheet } from 'react-native';
import {
    Dimensions
  } from 'react-native';
const fontFamily = "Alegreya-Bold";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCALE = 375; 
const color = "#1f1f1f";
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
        color
    },
    welcomeheading:{
        fontFamily,
        color,
        fontSize:scaleFontSize(25),
        textAlign:"center",
        textShadowColor:"#3c3c3c",
        textShadowOffset:{width:1,height:1},
        textShadowRadius:2
    },
    newFontSize:{
        fontSize: scaleFontSize(20)
    },
    specialFont:{
        fontSize: scaleFontSize(35),
        textShadowColor:"green",
        textShadowOffset:{width:1,height:2},
        textShadowRadius:3
    },
    signButton:{
        width:"auto",
        height:"auto",
        borderRadius:10,
        borderWidth:0,
        borderColor:"black",
        backgroundColor:"#6d9e6d",
        overflow:"hidden"
    },
    textFont:{
        color:"black",
        paddingVertical:10,
        fontSize: 17,
        fontFamily:"Bitter-Regular",
        textShadowColor:"#9e9d9d",
        textShadowOffset:{width:1,height:2},
        textShadowRadius:5
    },
    buttonContainer:{
        flexDirection :"row",
        width:"100%",
        justifyContent: "space-around"
    },
    inputFeild:{
        borderColor: "black",
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        width: "100%",
        // flex:1
    }
});