import React, { Component } from 'react'
import { AppRegistry, StyleSheet, TouchableOpacity, Text, View} from 'react-native'

export default class LabelButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.text = props.text;
      }
    
     
    render(){
    return( 
        <Text> {this.text} </Text> 
    )
    }
}