import { StyleSheet } from 'react-native';
import  * as commonStyle from '../Constants/commonStyle';
const styles = StyleSheet.create({
    tabBar: {
        height: 46,
        flexDirection: 'row',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: 'rgba(0, 0, 0, .3)',
        backgroundColor: '#F7F7F7',
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    sellTab:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor:commonStyle.PRIMARY_COLOR

    },


});

export default styles