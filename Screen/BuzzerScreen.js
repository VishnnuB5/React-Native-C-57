import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import SoundButton from '../components/SoundButton';
import AppHeader from '../components/AppHeader';

export default class BuzzerScreen extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <SoundButton color={this.props.navigation.getParam('color')} />
      </View>
    );
  }
}
