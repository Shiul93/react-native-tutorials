import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LabelButton from '../components/LabelButton'

export default class LoginScreen extends Component {

  onPressLoginButton(){
    alert('AYYY')
  }
  render() {
    return (
      <View style={styles.loginScreen}>
        <Text style={styles.loginText}> USERNAME </Text>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder=""
            onChangeText={(text) => this.setState({text})}/>
        </View>

        <Text style={styles.loginText}> PASSWORD </Text>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput}
            underlineColorAndroid='rgba(0,0,0,0)'
            placeholder=""
            onChangeText={(text) => this.setState({text})}/>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            color = 'skyblue'
            title="LOGIN"
            onPress={this.onPressLoginButton}
          />
          <LabelButton text={'Sign Up'}/>
        </View>
      </View>
    );
  }
  
}


const styles = StyleSheet.create({
    loginScreen: {
      
      flex: 3,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
  
    },
    loginText:{
      fontFamily: 'sans-serif-thin', 
      fontSize: 20,

    },

    textInputContainer:{
      margin:15,
      width:150,
      backgroundColor: 'whitesmoke',
      borderRadius: 15,
      justifyContent: 'center',
    },
    textInput:{
      marginLeft: 15,
      marginRight: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      margin: 20,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonColor:{
      color: '#841584',
    }
    
  });