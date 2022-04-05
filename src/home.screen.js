import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Navigation } from 'react-native-navigation';
import DetailScreen from './detail.screen';
import makeScreen from './makeScreen';

function HomeScreen(props) {
  const goDetails = () => {
    Navigation.push(props.componentId, DetailScreen);
  }

  return (
    <View style={{flex:1, backgroundColor: 'yellow'}}>
      <Text style={{padding: 16, fontSize: 24}}>Welcome</Text>
      <TouchableOpacity onPress={goDetails} style={{ margin: 16, padding: 16, borderColor: '#000', borderWidth: 1 }}>
        <Text style={{textAlign: 'center'}}>Details Screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default makeScreen('HomeScreen', HomeScreen);
