import React, {View, Text, StyleSheet, TouchableHighlight} from 'react-native'
import Button from 'react-native-button'
import {Actions} from 'react-native-router-flux'

class Welcome extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Welcome!</Text>
        <Button onPress={Actions.cardApp}>Go to the Counter Example</Button>
      </View>
    );
  }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});

module.exports = Welcome;
