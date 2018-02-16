import { StyleSheet } from 'react-native';
import  commonStyle from '../../index'
const styles = StyleSheet.create({
    camera:{
        flex:1,
        backgroundColor:"red"
    },
    essential:{
        flex:2,
        backgroundColor:"blue"

    },
    footer:{
        backgroundColor:commonStyle.PRIMARY_COLOR,
        height:100

    },
    container: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
        paddingTop:15,
        paddingBottom:10,
        backgroundColor:"green",
        borderBottomWidth: 1,
        borderBottomColor: '#898989',
    },

});

export default styles