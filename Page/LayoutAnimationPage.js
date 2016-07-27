import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  LayoutAnimation,
  ToastAndroid,
  Platform,
  UIManager
} from 'react-native';

var {w_height, w_width} = Dimensions.get('window');

var CustomLayoutAnimation = {
  duration: 200,
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.curveEaseInEaseOut,
  },
};

export default class LayoutAnimationPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      boxes:[],
      width:80,
      height:40,
      backColor: '#dd3333',
      status:'初始'
    };

    if(Platform.OS === 'android'){
      console.log('android');
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  clearBoxes(){
    this.setState({
      boxes:[],
      width:80,
      height:40,
    });
  }

  btnPressAction(){
    if(this.state.boxes.length>5){
      ToastAndroid.show('数量超过限制', ToastAndroid.SHORT);
      return false;
    }else{
      this.setState({
        index: this.state.index+1,
      });
      this.state.boxes.push(this.state.index);
    }
  }

  btnPress_A(){
    LayoutAnimation.easeInEaseOut();
    this.btnPressAction();
  }

  btnPress_B(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.btnPressAction();
  }

  btnPress_C(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    this.btnPressAction();
  }

  callback(){
    this.setState({
      backColor: this.state.backColor === '#dd3333' ? '#0a8acd' : '#dd3333',
      status: '已缩放'
    });
  }

  zoomViewLinear(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear, this.callback());
    this.setState({
      width: this.state.width > w_width ? w_width : this.state.width + 50,
      height: this.state.height > 240 ? 280 : this.state.height + 40
    });
  }

  zoomViewSpring(){
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring, this.callback());
    this.setState({
      width: this.state.width > w_width ? w_width : this.state.width + 50,
      height: this.state.height > 240 ? 280 : this.state.height + 40
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>LayoutAnimation</Text>
        <TouchableHighlight style={styles.resetBtn} underlayColor="#dd3333" activeOpacity={1} onPress={this.clearBoxes.bind(this)}>
          <Text style={styles.btnTxt}>重置</Text>
        </TouchableHighlight>
        <View style={styles.btnContainer}>
          <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={this.btnPress_A.bind(this)}>
            <Text style={styles.btnTxt}>添加[效果一]</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={this.btnPress_B.bind(this)}>
            <Text style={styles.btnTxt}>添加[效果二]</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.btn} underlayColor="#0a8acd" activeOpacity={1} onPress={this.btnPress_C.bind(this)}>
            <Text style={styles.btnTxt}>添加[效果三]</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.boxContainer}>
          {
            this.state.boxes.map((elem, index) => {
              return (
                <View key={index} style={styles.box}>
                  <Text style={{textAlign:'center'}}>C</Text>
                </View>
              );
            })
          }
        </View>

        <View style={styles.divider}></View>

        <TouchableHighlight underlayColor='#0a8acd' style={{width:this.state.width, height:this.state.height,backgroundColor: this.state.backColor,padding:10,alignItems:'center',alignSelf:'center',justifyContent:'center'}} onPress={this.zoomViewLinear.bind(this)}>
            <View>
              <Text style={{textAlign:'center',color:'#fff'}}>点我呀</Text>
              <Text style={{textAlign:'center',color:'#fff'}}>{this.state.status}</Text>
            </View>
        </TouchableHighlight>

        <View style={styles.divider}></View>

        <TouchableHighlight underlayColor='#0a8acd' style={{width:this.state.width, height:this.state.height,backgroundColor: this.state.backColor,padding:10,alignItems:'center',alignSelf:'center',justifyContent:'center'}} onPress={this.zoomViewSpring.bind(this)}>
            <View>
              <Text style={{textAlign:'center',color:'#fff'}}>点我呀</Text>
              <Text style={{textAlign:'center',color:'#fff'}}>{this.state.status}</Text>
            </View>
        </TouchableHighlight>
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
  btnContainer:{flexDirection:'row'},
  boxContainer:{flexDirection:'row',alignItems:'flex-start',justifyContent:'center'},
  box: {flex:1,margin:8,backgroundColor:'#0a8acd'}
});
