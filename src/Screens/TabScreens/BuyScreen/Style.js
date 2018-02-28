import { StyleSheet } from 'react-native';
import commonStyle from "../../index";
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
    row:{
        flexDirection:"row"
    }
});
export default style
