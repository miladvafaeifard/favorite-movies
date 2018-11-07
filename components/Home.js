import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Home extends Component {
  
  render() {
    const api = 'http://www.omdbapi.com/?i=tt3896198&apikey=8c08dafc&t=gone';
    handlePress = async () => {
      fetch(api,)
    }
    return (
        <View>
            <Text>Let's work together!</Text>
        </View>
    )
  }
}
