import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight, Animated} from 'react-native';

export default class AnimatedPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      fadeAnim: new Animated.value(0),
    };
  }

  componentDidMount(){
    Animated.timing(
      this.state.fadeAnim,
      {toValue: 1}
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Animated</Text>
        <Animated.View style={styles.box}>
            <Text style={styles.boxText}>dd</Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  title:{fontSize:16,textAlign:'center',backgroundColor:'#0a8acd',color:'#fff',margin:10,lineHeight :40,textAlignVertical:'center'},
  resetBtn:{backgroundColor:'#0a8acd',borderRadius:5,margin:5,padding:10},
  btn:{flex:1,backgroundColor:'#dd3333',borderRadius:5,margin:5,padding:10},
  btnTxt:{textAlign:'center',color:'#fff'},
  centerText:{textAlign:'center'},
  box:{alignSelf:'center', alignItems:'center',justifyContent:'center',width:120,height:120,backgroundColor:'#dd3333',padding:10},
  boxText:{textAlign:'center',color:'#fff'}
});
