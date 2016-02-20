import React, {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";
import {Actions} from "react-native-router-flux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent"
  }
});

class welcome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome!</Text>
        <Button onPress={Actions.handleRouteCardApp}>Go to the Counter Example</Button>
      </View>
    );
  }
}

module.exports = welcome;
