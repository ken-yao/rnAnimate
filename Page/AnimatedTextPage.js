import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight, Animated} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class AnimatedTextPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      positionAnimation: new Animated.Value(0),
      fadeAnimation: new Animated.Value(0),
      effectName: '效果',
      style: null,
      currentPosition: null,
      info: null
    };
  }

  animatedText(direction){
    switch(direction){
      case 'up':
        this.state.positionAnimation.setValue(40);
        Animated.timing(
          this.state.positionAnimation,
          {toValue: 0, duration: 1000}
        ).start();
        this.setState({style: {top: this.state.positionAnimation}});
        this.setState({info: '往上移动'});
        this.state.positionAnimation.addListener(({value}) => this.setState({currentPosition: value}));
        break;
      case 'down':
        this.state.positionAnimation.setValue(-40);
        Animated.timing(
          this.state.positionAnimation,
          {toValue: 0, duration: 1000}
        ).start();
        this.setState({style: {top: this.state.positionAnimation}});
        this.setState({info: '往下移动'});
        this.state.positionAnimation.addListener(({value}) => this.setState({currentPosition: value}));
        break;
      case 'left':
        this.state.positionAnimation.setValue(width);
        Animated.timing(
          this.state.positionAnimation,
          {toValue: 0, duration: 1000}
        ).start();
        this.setState({style: {left: this.state.positionAnimation}});
        this.setState({info: '往左移动'});
        this.state.positionAnimation.addListener(({value}) => this.setState({currentPosition: value}));
        break;
      case 'right':
        this.state.positionAnimation.setValue(width);
        Animated.timing(
          this.state.positionAnimation,
          {toValue: 0, duration: 1000}
        ).start();
        this.setState({style: {right: this.state.positionAnimation}});
        this.setState({info: '往右移动'});
        this.state.positionAnimation.addListener(({value}) => this.setState({currentPosition: value}));
        break
    }
  }

  textFadeIn(){
    Animated.timing(
      this.state.fadeAnimation,
      {toValue: 1, duration: 1000}
    ).start();
  }

  textFadeOut(){
    Animated.timing(
      this.state.fadeAnimation,
      {toValue: 0, duration: 1000}
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Animated</Text>

        <View>
          <Text style={styles.centerText}>文字动画</Text>
          <View style={{flex:1,height:32,position:'relative',marginVertical:10,overflow:'hidden'}}>
            <Animated.Text style={[styles.animateText, this.state.style]}>
                处处随缘住，无求梦亦安！
            </Animated.Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.animatedText('up')}><Text style={styles.btnTxt}>上</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.animatedText('down')}><Text style={styles.btnTxt}>下</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.animatedText('left')}><Text style={styles.btnTxt}>左</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.animatedText('right')}><Text style={styles.btnTxt}>右</Text></TouchableHighlight>
          </View>
          <Text style={styles.centerText}>方向：{this.state.info} | 当前位置：{this.state.currentPosition}</Text>
        </View>

        <View style={styles.divider}></View>

        <View>
          <Text style={styles.centerText}>文字渐显动画</Text>
          <View style={{flex:1,position:'relative',marginVertical:10,overflow:'hidden'}}>
            <Animated.Text style={[styles.centerText, {opacity: this.state.fadeAnimation}]}>
                处处随缘住，无求梦亦安！
            </Animated.Text>
            <View style={{flexDirection:'row'}}>
              <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={this.textFadeIn.bind(this)}><Text style={styles.btnTxt}>文字淡入</Text></TouchableHighlight>
              <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={this.textFadeOut.bind(this)}><Text style={styles.btnTxt}>文字淡出</Text></TouchableHighlight>
            </View>
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
  boxText:{textAlign:'center',color:'#fff'},
  animateText:{fontSize:24,position:'absolute'}
});
