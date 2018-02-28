import { StyleSheet } from 'react-native';
import  commonStyle from '../../index'
const styles = StyleSheet.create({
    row:{
        flexDirection:"row",

    },
    checked:{
        backgroundColor:commonStyle.PRIMARY_COLOR
    },
    notChecked:{
        backgroundColor:"white",
        borderWidth:1,
        borderColor:commonStyle.PRIMARY_COLOR
    },
    notText:{
        color:commonStyle.PRIMARY_COLOR
    },
});

export default styles