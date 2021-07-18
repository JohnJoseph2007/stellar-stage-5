import * as React from 'react';
import {View, Text, ImageBackground, Dimensions} from 'react-native';
import axios from 'axios';
import {Video} from 'expo-av';

const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

export default class DailyPic extends React.Component {
  constructor(){
    super();
    this.state={picdata:[]}
  }

  fetchImage=async()=>{
    await axios.get("https://api.nasa.gov/planetary/apod?api_key=LcMVo9kjiSOJ6AOMUraSNhxeVApxq4aGgXCE9lL5").then((response)=>{
      this.setState({picdata:response.data});
    })
  }

  componentDidMount(){
    this.fetchImage();
  }

  render(){
    if(this.state.picdata.media_type==="image"){
      return(
        <ImageBackground source={this.state.picdata.hdurl} style={{width:w, height:h}}>
          <Text style={{textAlign:'center', color:'white', fontSize:30}}>Photo owned by: {this.state.picdata.copyright}</Text>
          <Text style={{textAlign:'center', color:'white', fontSize:25}}>Date taken: {this.state.picdata.date}</Text>
          <Text style={{textAlign:'center', color:'white', fontSize:20}}>Explanation: {this.state.picdata.explanation}</Text>
        </ImageBackground>
      )
    } else {
      return(
        <View>
          <Video
            source={this.state.picdata.hdurl}
            style={{width:16*50, height:9*50}}
            shouldPlay={true}
          />
          <Text style={{textAlign:'center', color:'white', fontSize:30}}>Photo owned by: {this.state.picdata.copyright}</Text>
          <Text style={{textAlign:'center', color:'white', fontSize:25}}>Date taken: {this.state.picdata.date}</Text>
          <Text style={{textAlign:'center', color:'white', fontSize:20}}>Explanation: {this.state.picdata.explanation}</Text>
        </View>
      )
    }
  }
}