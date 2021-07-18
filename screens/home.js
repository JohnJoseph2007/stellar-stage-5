import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Dimensions, StyleSheet, Image } from 'react-native';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default class Home extends React.Component {
  render() {
    return (
        <ImageBackground source={require('../assets/stars.gif')} style={{width:w, height:h}}>
          <Text style={st.header}>HOME</Text>
          <Image source={require('../assets/main-icon.png')} style={{width:4096/13, height:4096/18}}></Image>
          <TouchableOpacity style={st.button}
            onPress={() => {
              this.props.navigation.navigate('DP');
            }}>
            <Text style={st.text}>Daily Pictures</Text>
            <Image source={require('../assets/daily_pictures.png')} style={{width:484/5, height:323/5, marginLeft:130, marginTop:-120, marginBottom:50}}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={st.button}
            onPress={() => {
              this.props.navigation.navigate('SC');
            }}>
            <Text style={st.text}>Spacecrafts</Text>
            <Image source={require('../assets/space_crafts.png')} style={{width:366/5, height:573/5, marginLeft:160, marginTop:-120, marginBottom:10}}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={st.button}
            onPress={() => {
              this.props.navigation.navigate('SM');
            }}>
            <Text style={st.text}>Star Maps</Text>
            <Image source={require('../assets/star_map.png')} style={{width:548/5, height:508/5, marginLeft:140, marginTop:-100}}></Image>
          </TouchableOpacity>
        </ImageBackground>
    );
  }
}

const st = StyleSheet.create({
  header: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'courier',
    fontSize: 25,
    paddingTop: 20,
    paddingBottom: 20,
  },
  button: {
    borderRadius: 60,
    borderColor: 'white',
    borderWidth: 1,
    width: 180,
    marginTop: 70,
    marginLeft: w / 2 - 90,
  },
})