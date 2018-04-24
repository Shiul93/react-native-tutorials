import React, { Component } from 'react'
import { AppRegistry, StyleSheet, TouchableOpacity, Text, View} from 'react-native'

export default class LabelButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.text = props.text;
        this.buttonCallback = props.onPress;
        this.textStyle = props.textStyle;
      }
    
     
    render(){
    return( 
        <View>
            <TouchableOpacity onPress = {this.buttonCallback}>
                <Text style={this.textStyle}> {this.text} </Text> 
            </TouchableOpacity>
        </View>
    )
    }
}