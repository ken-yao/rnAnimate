import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight, Animated} from 'react-native';

export default class AnimatedPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      effectName: '效果',
      currentOpacity: null,
      errorInfo: null
    };
  }

  componentWillMount(){
    this.animatedValue = new Animated.Value(1);
    // console.log(typeof(this.animatedValue._value));
  }

  showOpacityEffect(){
    if(this.animatedValue._value === 1){
      this.setState({effectName: '渐隐效果'});
      Animated.timing(
        this.animatedValue,
        {toValue: 0, duration: 1500}
      ).start();
    }else if(this.animatedValue._value === 0){
      this.setState({effectName: '渐显效果'});
      Animated.timing(
        this.animatedValue,
        {toValue: 1, duration: 1500}
      ).start();
    }

    //添加Animated.Value值监听,以下两行效果一样，第一行指定一个监听ID，可以利用这个ID定位到该监听
    // var animatedListenerId = this.animatedValue.addListener(({value}) => this.setState({currentOpacity: value}));
    this.animatedValue.addListener(({value}) => this.setState({currentOpacity: value}));
  }

  setOpacity(){
    if(this.animatedValue._value === 1){
      this.animatedValue.setValue(0);
    }else if(this.animatedValue._value === 0){
      this.animatedValue.setValue(1);
    }
  }

  stopAnimation(){
    this.animatedValue.stopAnimation(({value}) => {
      this.setState({errorInfo: '动画被人工停止了，当前值为：' + this.animatedValue._value});
    });
  }

  componentDidMount(){
    Animated.timing(
      this.state.fadeAnim,
      {toValue: 1}
    ).start();
  }

  componentWillUnmount(){
    //移除Animated.Value值监听
    // this.animatedValue.removeAllListeners(animatedListenerId);
    //移动所有监听
    this.animatedValue.removeAllListeners();
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Animated</Text>
        <View>
          <Text style={styles.centerText}>页面进入自动调用动画</Text>
          <Animated.View style={[styles.box, {opacity: this.state.fadeAnim}]}>
              <Text style={styles.boxText}>渐显效果</Text>
          </Animated.View>
        </View>

        <View style={styles.divider}></View>

        <View>
          <Animated.View style={[styles.box, {opacity: this.animatedValue}]}>
              <Text style={styles.boxText}>{this.state.effectName}</Text>
          </Animated.View>
          <Text style={styles.centerText}>当前值：{this.state.currentOpacity}</Text>
          <Text style={styles.centerText}>{this.state.errorInfo}</Text>
          <View style={{flexDirection:'row'}}>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={this.showOpacityEffect.bind(this)}><Text style={styles.btnTxt}>显示效果</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={this.setOpacity.bind(this)}><Text style={styles.btnTxt}>直接显示/隐藏</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={this.stopAnimation.bind(this)}><Text style={styles.btnTxt}>停止动画</Text></TouchableHighlight>
          </View>
        </View>

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
