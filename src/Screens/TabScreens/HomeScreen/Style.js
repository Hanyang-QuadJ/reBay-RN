import { StyleSheet } from 'react-native';
const style = StyleSheet.create({
    wrapper:{
        height:200

    },
    slide1: {
        flex:1,
        backgroundColor: '#4c586f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex:1,

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex:1,

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    image:{
        resizeMode: 'contain',
        width:375

    }
});
export default style
