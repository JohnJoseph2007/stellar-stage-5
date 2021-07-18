import * as React from 'react';
import { View, Text, Dimensions, TextInput } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default class StarMap extends React.Component {
  constructor() {
    super();
    this.state = { long: '', lat: '' };
  }

  render() {
    const lat = this.state.lat;
    const long = this.state.long;
    const url = `https://virtualsky.lco.global/embed/index.html?longitude=${long}&latitude=${lat}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true`;
    return (
      <SafeAreaProvider>
        <WebView
          scalesPageToFit={true}
          source={{ uri: url }}
          style={{ marginTop: 20, marginBottom: 20, width: w, height: h }}
        />
        <TextInput
          placeholder="Latitude"
          onChangeText={(data) => {
            this.setState({ lat: data });
          }}></TextInput>
        <TextInput
          placeholder="Longitude"
          onChangeText={(data) => {
            this.setState({ long: data });
          }}></TextInput>
      </SafeAreaProvider>
    );
  }
}
