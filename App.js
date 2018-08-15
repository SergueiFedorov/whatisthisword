/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { reducerPack } from './reducers/focal';
import { MainMenu } from './screens/MainMenu';
import { actionDebugger } from './middleware/debugActions';
import {
  createStackNavigator,
} from 'react-navigation';
import { GuessWord } from './screens/GuessWord';
import { ChallengeAFriend } from './screens/ChallengeAFriend';
import { createPlayerMiddlware } from './middleware/player';
import { createPlayer } from './actions/player';
import { connect } from 'react-redux'

let store = createStore(
  reducerPack,
  applyMiddleware(actionDebugger),
  applyMiddleware(createPlayerMiddlware)
)

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const Nav = createStackNavigator({
  Home: MainMenu,
  GuessWord: GuessWord,
  ChallengeAFriend: ChallengeAFriend
}, {
  initialRouteName: "Home" 
})

// class App extends Component {

//   constructor(state) {
//     self.state = state
//   }

//   componentDidMount() {

//   }

//    render() {
//       (
//         <Provider store={store}>
//           <Nav />
//         </Provider>
//       )
//    }
  
// }


let App = ({createPlayer}) => {
  createPlayer()
  return (
      <Nav />
  )
}

let Wrapper = () => {
  return (
  <Provider store={store}>
    <App />
  </Provider>
  )
}


App = connect(
  null,
  (dispatch) => {
      return {
          createPlayer: () => dispatch(createPlayer())
      }
  }
)(App)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Wrapper
