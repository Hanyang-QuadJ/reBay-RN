// import React, {Component} from 'react';
// import {Provider, connect} from 'react-redux';
// import { addNavigationHelpers } from 'react-navigation';
// import { TabNavigation} from "./NavigationStack";
// import {createReduxBoundAddListener} from "react-navigation-redux-helpers";
//
// const addListener = createReduxBoundAddListener("root");
//
// const LoggedInApp = ({dispatch, navigationState}) => (
//     <TabNavigation navigation={addNavigationHelpers({ dispatch, state: navigationState, addListener })}/>
// );
// const mapStateToProps = (state) => {
//     return ({
//         navigationState: state.LoggedInNavReducer // NavigationReducer contains the navigation state of the app
//     })
// };
// export const LoggedInAppWithNavigation = connect(mapStateToProps()(LoggedInApp));
//
// class LoggedInAppNavigation extends Component {
//     render() {
//         console.log(this.state);
//         return (
//             <LoggedInAppWithNavigation />
//         )
//     }
// }
// export default LoggedInAppNavigation