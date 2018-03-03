import { StyleSheet } from 'react-native';
import  commonStyle from '../index'
const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor: commonStyle.PRIMARY_COLOR,

    },
    headerContainerAndroid:{
        backgroundColor: commonStyle.PRIMARY_COLOR,
        height:80

    },
    headerContainer2:{
        backgroundColor: commonStyle.PRIMARY_COLOR,
        height:90

    },
    headerContainer2Android:{
        backgroundColor: commonStyle.PRIMARY_COLOR,
        justifyContent:'center',
        height:110
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