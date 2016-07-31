import React, { Component } from 'react';
import { StyleSheet, Text, View , Dimensions, TouchableHighlight, Image, Animated} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class GetTranslateTransformPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      boxContainerWidth: width-20,
      boxContainerHeight: 200,
      boxWidth:100,
      boxHeight:60,
      currentPositionX:0,
      currentPositionY:0,
      positionAnimation: new Animated.ValueXY({x:0, y:0})
    };
  }

  transformBox(direction){
    switch(direction){
      case 'reset':
        Animated.timing(
          this.state.positionAnimation,
          {toValue: {x:this.state.currentPositionX, y:0}}
        ).start(() => this.setState({currentPositionY:0}));
        break;
      case 'up':
        Animated.timing(
          this.state.positionAnimation,
          {toValue: {x:this.state.currentPositionX, y:-100}}
        ).start(() => this.setState({currentPositionY:-100}));
        break;
      case 'down':
        Animated.timing(
          this.state.positionAnimation,
          {toValue: {x:this.state.currentPositionX, y:100}}
        ).start(() => this.setState({currentPositionY: 100}));
        break;
      case 'left':
        if(this.state.currentPositionX == 0){
          return false;
        }
        Animated.timing(
          this.state.positionAnimation,
          {toValue: {x:0, y:this.state.currentPositionY}}
        ).start(() => this.setState({currentPositionX: 0, currentPositionY: this.state.currentPositionY}));
        break;
      case 'right':
        if(this.state.currentPositionX == this.state.boxContainerWidth-this.state.boxWidth){
          return false;
        }
        Animated.timing(
          this.state.positionAnimation,
          {toValue: {x:this.state.boxContainerWidth-this.state.boxWidth, y:this.state.currentPositionY}}
        ).start(() => this.setState({currentPositionX: this.state.boxContainerWidth-this.state.boxWidth}));
        break;
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>位置动画（Animated.ValueXY）</Text>

        <View style={{padding:10, borderWidth:1, borderColor:'#ccc'}}>

          <Animated.View style={[{transform: this.state.positionAnimation.getTranslateTransform()}, {width:this.state.boxWidth, height:this.state.boxHeight,backgroundColor:'#0a8acd',justifyContent:'center'}]}>
            <Text style={styles.btnTxt}>一个动画框</Text>
          </Animated.View>

          <View style={{flexDirection:'row'}}>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.transformBox('up')}><Text style={styles.btnTxt}>上</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.transformBox('down')}><Text style={styles.btnTxt}>下</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.transformBox('left')}><Text style={styles.btnTxt}>左</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.transformBox('right')}><Text style={styles.btnTxt}>右</Text></TouchableHighlight>
          </View>
          <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.transformBox('reset')}><Text style={styles.btnTxt}>还原上下</Text></TouchableHighlight>
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
