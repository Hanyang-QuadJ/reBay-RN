import { StyleSheet } from 'react-native';
import  commonStyle from '../index'
const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor: commonStyle.PRIMARY_COLOR,

    },
    headerContainer2:{
        backgroundColor: commonStyle.PRIMARY_COLOR,
        height:90

    },

    headerText:{
        color: 'white',
    },
    searchBar:{
        marginTop:8,
        borderRadius:5,
        height:25,
        width:260,
        backgroundColor:"white"
    }


});

export default styles