import * as React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class Screen2 extends React.Component{
  render(){
    return(
      <View>
      <Text style={styles.outText}>Screen2</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  outText: {
    textAlign: 'center',
    
  }
})