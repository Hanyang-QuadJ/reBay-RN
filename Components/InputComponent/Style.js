import {StyleSheet} from 'react-native';
import commonStyle from '../index'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
    },
    icon: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    emptyText:{
        padding:6,

    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#898989',
        flex: 10,
        justifyContent: 'center',
        marginLeft: 10
    }


});

export default styles