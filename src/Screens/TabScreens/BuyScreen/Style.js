import { StyleSheet } from 'react-native';
const style = StyleSheet.create({
    itemStyle: {
		height: 30,
		borderColor: 'black'
	},
    alphabetWrapper: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row',
    },
    //non-container style wrapper for scrollview
    footerWrapperNC: {
        flexDirection:'column',
    },
});
export default style
