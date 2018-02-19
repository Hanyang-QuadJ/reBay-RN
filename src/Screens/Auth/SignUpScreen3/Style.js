import { StyleSheet } from 'react-native';
import  commonStyle from '../../index'
const styles = StyleSheet.create({
    camera:{
        flex:1,
        backgroundColor:"red"
    },
    essential:{
        flex:2,

    },
    footer:{
        backgroundColor:commonStyle.PRIMARY_COLOR,
        height:100,

    },
    info: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
        paddingTop:15,
        marginBottom:20,
        paddingBottom:10,
        borderBottomWidth: 1,
        borderBottomColor: commonStyle.BORDER_COLOR,
    },

});

export default styles