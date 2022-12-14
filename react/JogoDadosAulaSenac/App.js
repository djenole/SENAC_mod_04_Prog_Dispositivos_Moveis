import { Component } from 'react/cjs/react.production.min';
import { StyleSheet, View, Text, Image, TouchableHighlight } from 'react-native';

import { images } from './images';

export default class JogoDadosAulaSenac extends Component {
  constructor() {
    super();
    this.state = { FacePadrao: 1 }
  }

  jogarDado = () => {
    var RandomNumber = Math.floor(Math.random() * 5) + 1;
    this.setState({
      FacePadrao: RandomNumber,
    });
  }

  render() {

    var imgSource;
    var cond = this.state.FacePadrao;
    console.log(cond);


    switch(cond) {
      case 1:
        imgSource = images.d1.uri;
        break;
      
      case 2:
        imgSource = images.d2.uri;
        break;

      case 3:
        imgSource = images.d3.uri;
        break;

      case 4:
        imgSource = images.d4.uri;
        break;
      
      case 5:
        imgSource = images.d5.uri;
        break;

      case 6:
        imgSource = images.d6.uri;
        break;
    }


    return (
      <View style={styles.MainContainer} >
        <Text style={styles.titulo}>
          Vamos tentar a sorte?
        </Text>

        <Image
          style={styles.tinylogo}
          source={require('./assets/jogodados.png')}
        />

        <TouchableHighlight onPress={() =>
          this.jogarDado()}>
          <Image source={imgSource} />
        </TouchableHighlight>

      </View>
    );

  }

}



const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tinylogo: {
    width: "60%",
    height: "30%",
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 30,
  }

});
