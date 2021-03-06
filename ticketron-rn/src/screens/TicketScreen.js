import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LabelButton from '../components/LabelButton';
import Ticket from '../components/Ticket';
import Separator from '../components/Separator';
import { Colors } from '../values/colors';
import Checker  from '../components/Checker'
import { Fonts } from '../values/fonts';
import NewTicketButton from '../components/NewTicketButton';

export default class TicketScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      tickets: [
        {id:1,
          name:'nsdflnadlfgna',
          text:'fdgasdcjkg',
        },
        {id:2,
          name:'xghjghjdgdgjh',
          text:'gdhjdgjgdhdgh',
        },
        {id:2,
          name:'xghjghjdgdgjh',
          text:'gdhjdgjgdhdgh',
        },
        {id:2,
          name:'xghjghjdgdgjh',
          text:'gdhjdgjgdhdgh',
        },
        {id:2,
          name:'xghjghjdgdgjh',
          text:'gdhjdgjgdhdgh',
        },
        {id:2,
          name:'xghjghjdgdgjh',
          text:'gdhjdgjgdhdgh',
        },
        {id:2,
          name:'xghjghjdgdgjh',
          text:'gdhjdgjgdhdgh',
        },
      ],
      test:[
        'a','b','c'
      ]
    }



  }

  renderTickets(){

    return this.state.tickets.map(ticket=>{return(<Ticket id={0} name={ticket.name} text={ticket.text}/>)});
        
     
    
  }

  
  render() {
    
    return (
      
      <View style={styles.ticketScreen}>
        <Separator text={'Pendent'}/>
          <Ticket id={0} name={'AYY el Lorem Ipsum'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus ac dolor in condimentum. Sed vel augue risus. Aliquam iaculis augue efficitur, semper orci eu, sollicitudin risus. Sed ut scelerisque lectus. Maecenas cursus felis nec nisl consequat placerat. In pellentesque tincidunt orci id dapibus. Donec nisl elit, imperdiet eu arcu sollicitudin, porttitor tincidunt elit. Mauris eleifend mauris ut placerat fermentum. Nam elementum fermentum facilisis. Vestibulum at pharetra dui. Donec convallis ut neque ac tempor. Cras rutrum urna eget commodo tempor. Duis at dictum orci. Aenean sed luctus elit. Phasellus bibendum euismod elit sed scelerisque. Vestibulum pretium bibendum sapien, in tempor velit scelerisque non.'} />
        <Separator text={'Completed'}/>
        
        <Ticket id={0} name={'AYY el Lorem Ipsum'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer finibus ac dolor in condimentum. Sed vel augue risus. Aliquam iaculis augue efficitur, semper orci eu, sollicitudin risus. Sed ut scelerisque lectus. Maecenas cursus felis nec nisl consequat placerat. In pellentesque tincidunt orci id dapibus. Donec nisl elit, imperdiet eu arcu sollicitudin, porttitor tincidunt elit. Mauris eleifend mauris ut placerat fermentum. Nam elementum fermentum facilisis. Vestibulum at pharetra dui. Donec convallis ut neque ac tempor. Cras rutrum urna eget commodo tempor. Duis at dictum orci. Aenean sed luctus elit. Phasellus bibendum euismod elit sed scelerisque. Vestibulum pretium bibendum sapien, in tempor velit scelerisque non.'} />

        {this.renderTickets()}

      </View>
      
    );
  }
  
}


const styles = StyleSheet.create({
    ticketScreen: {
      
      flex: 3,
      backgroundColor: Colors.background,
      justifyContent: 'flex-start',

  
    },
    loginText:{
      fontFamily: Fonts.thin, 
      fontSize: 20,

    },

    
    
  });