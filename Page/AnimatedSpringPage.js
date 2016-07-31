import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight, Animated, Easing} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class AnimatedSpringPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      boxContainerWidth: width-20,
      boxContainerHeight:50,
      boxWidth:50,
      boxHeight:50,
      moveDistance: (width-20) - 50,
      boxAnimation: new Animated.Value(0),
      description: null
    };
  }

  showAnimation(params){
    switch (params) {
      case 'reset':
        this.state.boxAnimation.setValue(0);
        this.setState({description: null});
        break;
      case 'default':
        Animated.spring(this.state.boxAnimation, {
          toValue: this.state.moveDistance
        }).start(() => this.setState({description: ''}));
        break;
      case 'velocity':
        Animated.spring(this.state.boxAnimation, {
          toValue: this.state.moveDistance,
          velocity: 4
        }).start(() => this.setState({description: 'velocity: 4'}));
        break;
      case 'bounciness':
        Animated.spring(this.state.boxAnimation, {
          toValue: this.state.moveDistance,
          bounciness:15
        }).start(() => this.setState({description: 'bounciness:15'}));
        break;
      case 'friction':
        Animated.spring(this.state.boxAnimation, {
          toValue: this.state.moveDistance,
          friction:3
        }).start(() => this.setState({description: 'friction:3'}));
        break;
      case 'tension':
        Animated.spring(this.state.boxAnimation, {
          toValue: this.state.moveDistance,
          tension:-10
        }).start(() => this.setState({description: 'tension:-10'}));
        break;
      case 'speed':
        Animated.spring(this.state.boxAnimation, {
          toValue: this.state.moveDistance,
          speed:50
        }).start(() => this.setState({description: 'speed:50'}));
        break;
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Animated.spring</Text>
          <View style={{position:'relative',margin:10,borderWidth:1,borderColor:'#ccc',width:this.state.boxContainerWidth,height:this.state.boxContainerHeight}}>
            <Animated.View style={{width:this.state.boxWidth, height:this.state.boxHeight,backgroundColor:'#dd3333',position:'absolute', top:0, bottom:0,left:this.state.boxAnimation}}>
            </Animated.View>
          </View>

          <View style={{margin:10,padding:6,borderWidth:1,borderColor:'#ccc'}}>
            <Text>参数：{this.state.description}</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.showAnimation('default')}><Text style={styles.btnTxt}>默认效果</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.showAnimation('velocity')}><Text style={styles.btnTxt}>velocity</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.showAnimation('bounciness')}><Text style={styles.btnTxt}>bounciness</Text></TouchableHighlight>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.showAnimation('friction')}><Text style={styles.btnTxt}>friction</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.showAnimation('tension')}><Text style={styles.btnTxt}>tension</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.showAnimation('speed')}><Text style={styles.btnTxt}>speed</Text></TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#dd3333" style={[styles.btn, {backgroundColor:'#0a8acd'}]} onPress={() => this.showAnimation('reset')}><Text style={styles.btnTxt}>还原</Text></TouchableHighlight>
          </View>

          <Text>https://github.com/facebook/react-native/blob/master/Libraries/Animated/src/AnimatedImplementation.js</Text>

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
