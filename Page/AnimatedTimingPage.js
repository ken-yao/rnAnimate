import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight, Animated, Easing} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class AnimatedTimingPage extends Component {
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
        Animated.timing(this.state.boxAnimation, {
          toValue: this.state.moveDistance
        }).start(() => this.setState({description: ''}));
        break;
      case 'duration':
        Animated.timing(this.state.boxAnimation, {
          toValue: this.state.moveDistance,
          duration: 1200
        }).start(() => this.setState({description: 'duration: 1200'}));
        break;
      case 'delay':
        Animated.timing(this.state.boxAnimation, {
          toValue: this.state.moveDistance,
          delay: 800
        }).start(() => this.setState({description: 'delay: 800'}));
        break;
      case 'linear':
        Animated.timing(this.state.boxAnimation, {
          toValue: this.state.moveDistance,
          easing: Easing.linear,
        }).start(() => this.setState({description: 'easing: Easing.linear'}));
        break;
      case 'ease':
        Animated.timing(this.state.boxAnimation, {
          toValue: this.state.moveDistance,
          easing: Easing.ease,
        }).start(() => this.setState({description: 'easing: Easing.ease'}));
        break;
      case 'cubic':
        Animated.timing(this.state.boxAnimation, {
          toValue: this.state.moveDistance,
          easing: Easing.cubic,
        }).start(() => this.setState({description: 'easing: Easing.cubic'}));
        break;
      case 'elastic':
        Animated.timing(this.state.boxAnimation, {
          toValue: this.state.moveDistance,
          easing: Easing.elastic(1),
        }).start(() => this.setState({description: 'easing: Easing.elastic(1)'}));
        break;
      case 'bounce':
        Animated.timing(this.state.boxAnimation, {
          toValue: this.state.moveDistance,
          easing: Easing.bounce,
        }).start(() => this.setState({description: 'easing: Easing.bounce'}));
        break;
      case 'bezier':
        Animated.timing(this.state.boxAnimation, {
          toValue: this.state.moveDistance,
          easing: Easing.bezier(.2,.6,.8,.1),
        }).start(() => this.setState({description: 'easing: Easing.bezier'}));
        break;
      case 'poly':
        Animated.timing(this.state.boxAnimation, {
          toValue: this.state.moveDistance,
          easing: Easing.poly(5),
        }).start(() => this.setState({description: 'easing: Easing.poly(5)'}));
        break;
      case 'circle':
        Animated.timing(this.state.boxAnimation, {
          toValue: this.state.moveDistance,
          easing: Easing.circle,
        }).start(() => this.setState({description: 'easing: Easing.circle'}));
        break;
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Animated.timing</Text>
          <View style={{position:'relative',margin:10,borderWidth:1,borderColor:'#ccc',width:this.state.boxContainerWidth,height:this.state.boxContainerHeight}}>
            <Animated.View style={{width:this.state.boxWidth, height:this.state.boxHeight,backgroundColor:'#dd3333',position:'absolute', top:0, bottom:0,left:this.state.boxAnimation}}>
            </Animated.View>
          </View>

          <View style={{margin:10,padding:6,borderWidth:1,borderColor:'#ccc'}}>
            <Text>参数：{this.state.description}</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.showAnimation('default')}><Text style={styles.btnTxt}>默认效果</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.showAnimation('duration')}><Text style={styles.btnTxt}>duration</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.showAnimation('delay')}><Text style={styles.btnTxt}>delay</Text></TouchableHighlight>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.showAnimation('linear')}><Text style={styles.btnTxt}>Easing.linear</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.showAnimation('ease')}><Text style={styles.btnTxt}>Easing.ease</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.showAnimation('cubic')}><Text style={styles.btnTxt}>Easing.cubic</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.showAnimation('elastic')}><Text style={styles.btnTxt}>Easing.elastic(1)</Text></TouchableHighlight>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.showAnimation('bounce')}><Text style={styles.btnTxt}>Easing.bounce</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.showAnimation('bezier')}><Text style={styles.btnTxt}>Easing.bezier</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.showAnimation('poly')}><Text style={styles.btnTxt}>Easing.poly</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.showAnimation('circle')}><Text style={styles.btnTxt}>Easing.circle</Text></TouchableHighlight>
          </View>

          <View>
            <TouchableHighlight underlayColor="#dd3333" style={[styles.btn, {backgroundColor:'#0a8acd'}]} onPress={() => this.showAnimation('reset')}><Text style={styles.btnTxt}>还原</Text></TouchableHighlight>
          </View>

          <Text>http://browniefed.com/react-native-animation-book/api/TIMING.html</Text>

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
