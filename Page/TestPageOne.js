import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native';

export default class TestPageOne extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      boxes:[1],
      w_width: Dimensions.get('window').width,
      w_height: Dimensions.get('window').height
    }
  }

  componentWillMount(){
    LayoutAnimation.spring();
  }

  btnPress(index){
    this.state.boxes.push({id: this.state.index});
    this.state.index++;
  }


  _btnRender(index){
    return (
      <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.btnPress(index)}>
        <Text style={styles.menuItem}>按钮{index}</Text>
      </TouchableHighlight>
    );
  }

  _rectRender(index){
    return (
      <View style={styles.box}>
        <Text>C</Text>
      </View>
    );
  }



  render() {
    return (
        <View>
        <Text style={styles.welcome}>
          This is a TestPageOne
        </Text>

        <View style={styles.boxContainer}>
          {
            this.state.boxes.map((elem, index) => {
              return (
                <View key={index} style={styles.box}>
                  <Text>C</Text>
                </View>
              );
            })
          }
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  boxContainer:{

  },
  box: {
    flex:1
  }
});
