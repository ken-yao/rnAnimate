import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Animated} from 'react-native';

export default class AnimatedImagePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      fadeAnimation: new Animated.Value(0)
    };
  }

  imageFadeIn(){
    Animated.timing(
      this.state.fadeAnimation,
      {toValue: 1, duration: 1000}
    ).start();
  }

  imageFadeOut(){
    Animated.timing(
      this.state.fadeAnimation,
      {toValue: 0, duration: 1000}
    ).start();
  }

  showImage(){
    this.state.fadeAnimation.setValue(1);
  }

  hideImage(){
    this.state.fadeAnimation.setValue(0);
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Animated</Text>

        <View>
          <Text style={styles.centerText}>图片动画</Text>
          <View style={{flex:1,overflow:'hidden'}}>
            <Animated.Image style={[styles.animatedImage, {opacity: this.state.fadeAnimation}]} source={{uri: 'http://www.thatyou.cn/wp-content/uploads/2016/03/about.jpg'}}>
            </Animated.Image>
            <View style={{flexDirection:'row'}}>
              <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={this.imageFadeIn.bind(this)}><Text style={styles.btnTxt}>图片淡入</Text></TouchableHighlight>
              <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={this.imageFadeOut.bind(this)}><Text style={styles.btnTxt}>图片淡出</Text></TouchableHighlight>
            </View>
            <View style={{flexDirection:'row'}}>
              <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={this.showImage.bind(this)}><Text style={styles.btnTxt}>立即显示</Text></TouchableHighlight>
              <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={this.hideImage.bind(this)}><Text style={styles.btnTxt}>立即隐藏</Text></TouchableHighlight>
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
  animateText:{fontSize:24,position:'absolute'},
  animatedImage:{width:360, height:225, marginVertical:10}
});
