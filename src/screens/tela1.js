import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

// import { Container } from './styles';

export default class screens extends Component {
  render() {
    return (<View>
      <Button title={'navegar'} onPress={() => this.props.navigation.navigate('Tela2')} ></Button>
      <Text>Mudando</Text>
    </View>);
  }
}
