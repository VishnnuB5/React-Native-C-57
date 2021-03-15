import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  goToBuzzerScreen = (buzzerColor) => {
    this.props.navigation.navigate('BuzzerScreen',{color:buzzerColor});
  };
  render() {
    return (
      <View>
        <AppHeader />

        <TouchableOpacity
      style={[styles.forButton,{backgroundColor:'red'}]}
          onPress={()=>{
this.goToBuzzerScreen('red')
          }}>
          <Text style={styles.forText}>Team 1</Text>
        </TouchableOpacity>

<TouchableOpacity
      style={[styles.forButton,{backgroundColor:'orange'}]}
          onPress={()=>{
this.goToBuzzerScreen('orange')
          }}>
          <Text style={styles.forText}>Team 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
      style={[styles.forButton,{backgroundColor:'yellow'}]}
          onPress={()=>{
this.goToBuzzerScreen('yellow')
          }}>
          <Text style={styles.forText}>Team 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
      style={[styles.forButton,{backgroundColor:'green'}]}
          onPress={()=>{
this.goToBuzzerScreen('green')
          }}>
          <Text style={styles.forText}>Team 4</Text>
        </TouchableOpacity>

        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  forText: {
    textAlign: 'center',
    color: 'blue',
    fontWeight:"bold"
  },
  forButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 100,
    width: 200,
    height: 50,
    backgroundColor: 'green',
  },
});
