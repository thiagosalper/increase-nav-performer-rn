import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { Navigation } from 'react-native-navigation';
import makeScreen from './makeScreen';
import HelpScreen from './help.screen';

function DetailScreen(props) {
  const goHelp = () => {
    Navigation.push(props.componentId, HelpScreen);
  }

  return (
    <View style={{flex:1, backgroundColor: 'gray'}}>
      <Text style={{padding: 16, fontSize: 24}}>Details</Text>
      <TouchableOpacity onPress={goHelp} style={{ margin: 16, padding: 16, borderColor: '#000', borderWidth: 1 }}>
        <Text style={{textAlign: 'center'}}>Help Screen</Text>
      </TouchableOpacity>
    </View>
  )
}


export default makeScreen('DetailScreen', DetailScreen);

