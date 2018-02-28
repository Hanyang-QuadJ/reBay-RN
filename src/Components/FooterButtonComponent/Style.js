import { StyleSheet } from 'react-native';
import  commonStyle from '../index'
const styles = StyleSheet.create({
    button1:{
        height: 55,
        width:190,
        backgroundColor:"white",
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 0,
        justifyContent:"center",
        alignItems:"center",
    },
    button2:{
        height: 55,
        width:190,
        backgroundColor:commonStyle.PRIMARY_COLOR,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 0,
        justifyContent:"center",
        alignItems:"center",
    },
    button1Text:{
        color:commonStyle.PRIMARY_COLOR
    },
    button2Text:{
        color:"white"
    },
    footer:{
        flex:0.1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    }


});

export default styles