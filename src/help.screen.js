import React from 'react';
import {View, Text} from 'react-native';
import makeScreen from './makeScreen';

function HelpScreen() {
  return (
    <View style={{flex:1, backgroundColor: 'purple'}}>
      <Text style={{padding: 16, fontSize: 24}}>Help me!</Text>
    </View>
  )
}


export default makeScreen('HelpScreen', HelpScreen);

