import React from 'react';
import { NativeModules, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class App extends React.Component {
  crash() {
    throw 'uh oh';
  }

  render() {
    return (
      <View style={styles.container}>

        <Text>TestModule available: {NativeModules.TestModule ? 'Yes' : 'No'}</Text>
        <TouchableOpacity style={{padding: 15, backgroundColor: "#ddd", marginTop: 20}} onPress={this.crash}>
          <Text>Press me to crash</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
