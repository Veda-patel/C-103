import * as React from 'react';
import { View } from 'react-native';
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return(
      <View>
      <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Screen1 : Screen1,
  Screen2 : Screen2
})

const AppContainer = createAppContainer(AppNavigator)
