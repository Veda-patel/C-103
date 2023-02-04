import * as React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image

} from 'react-native'

export default class Screen1 extends React.Component {

render() {
  return(
    <View>
    <Text style={styles.outText}>Hello World!!!</Text>
    <TouchableOpacity style={styles.outButton}
    onPress = {()=> this.props.navigation.navigate('Screen2')}
    >Press</TouchableOpacity>
    <Image source={require('./assets/snack-icon.png')}/>
    </View>
  )
}
}
const styles = StyleSheet.create({
  
  outText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    fontFamily: 'monospace'
  },
  outButton: {
    alignSelf: 'center',
    fontSize: 16,
    backgroundColor: '#FA8072',
    borderRadius: 66,
    fontFamily: 'monospace',
    width:66,
    marginTop: 16
  }

})