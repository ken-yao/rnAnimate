import React, { Component } from 'react';
import { StyleSheet, Text, View , Dimensions, TouchableHighlight, Image, Animated} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class positionAnimatedViewPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      boxContainerWidth: width-20,
      boxContainerHeight: 200,
      boxWidth:80,
      boxHeight:80,
      currentPositionX:0,
      currentPositionY:0,
      positionAnimation: new Animated.ValueXY({x:0, y:0})
    };
  }

  moveBox(direction){
    switch(direction){
      case 'up':
        if(this.state.currentPositionY == 0){
          return false;
        }
        this.state.positionAnimation.setValue({x: this.state.currentPositionX, y:this.state.boxContainerHeight-this.state.boxHeight});
        Animated.timing(
          this.state.positionAnimation,
          {toValue: {x:this.state.currentPositionX, y:0}}
        ).start(() => this.setState({currentPositionX: this.state.currentPositionX, currentPositionY:0}));
        break;
      case 'down':
        if(this.state.currentPositionY == this.state.boxContainerHeight-this.state.boxHeight){
          return false;
        }
        this.state.positionAnimation.setValue({x:this.state.currentPositionX, y:0})
        Animated.timing(
          this.state.positionAnimation,
          {toValue: {x:this.state.currentPositionX, y:this.state.boxContainerHeight-this.state.boxHeight}}
        ).start(() => this.setState({currentPositionX:this.state.currentPositionX, currentPositionY: this.state.boxContainerHeight-this.state.boxHeight}));
        break;
      case 'left':
        if(this.state.currentPositionX == 0){
          return false;
        }
        this.state.positionAnimation.setValue({x:this.state.currentPositionX,y:this.state.currentPositionY})
        Animated.timing(
          this.state.positionAnimation,
          {toValue: {x:0, y:this.state.currentPositionY}}
        ).start(() => this.setState({currentPositionX: 0, currentPositionY: this.state.currentPositionY}));
        break;
      case 'right':
        if(this.state.currentPositionX == this.state.boxContainerWidth-this.state.boxWidth){
          return false;
        }
        this.state.positionAnimation.setValue({x:0, y: this.state.currentPositionY});
        Animated.timing(
          this.state.positionAnimation,
          {toValue: {x:this.state.boxContainerWidth-this.state.boxWidth, y:this.state.currentPositionY}}
        ).start(() => this.setState({currentPositionX: this.state.boxContainerWidth-this.state.boxWidth, currentPositionY: this.state.currentPositionY}));
        break;
      default:
        return false;
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>位置动画（Animated.ValueXY）</Text>

        <View style={{flex:1, padding:10}}>
          <View style={{width:this.state.boxContainerWidth,height:this.state.boxContainerHeight,position:'relative',marginVertical:10, borderWidth:1,borderColor:'#ccc'}}>
            <Animated.View style={{width:this.state.boxWidth, height:this.state.boxHeight,position:'absolute',backgroundColor:'#dd3333',top:this.state.positionAnimation.y,left:this.state.positionAnimation.x}}>
            </Animated.View>
          </View>

          <View style={{width:this.state.boxContainerWidth,height:this.state.boxContainerHeight,position:'relative',marginVertical:10, borderWidth:1,borderColor:'#ccc'}}>
            <Animated.View style={[this.state.positionAnimation.getLayout(),{width:this.state.boxWidth, height:this.state.boxHeight,position:'absolute',backgroundColor:'#0a8acd'}]}>
            </Animated.View>
          </View>

          <View style={{flex:1,flexDirection:'row'}}>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.moveBox('up')}><Text style={styles.btnTxt}>上</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.moveBox('down')}><Text style={styles.btnTxt}>下</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.moveBox('left')}><Text style={styles.btnTxt}>左</Text></TouchableHighlight>
            <TouchableHighlight underlayColor="#0a8acd" style={styles.btn} onPress={() => this.moveBox('right')}><Text style={styles.btnTxt}>右</Text></TouchableHighlight>
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
