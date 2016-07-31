import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, Navigator, DrawerLayoutAndroid} from 'react-native';

import LayoutAnimationPage from './Page/LayoutAnimationPage';

import AnimatedPage from './Page/AnimatedPage';
import AnimatedTextPage from './Page/AnimatedTextPage';
import AnimatedImagePage from './Page/AnimatedImagePage'
;
import GetLayoutPage from './Page/GetLayoutPage';
import GetTranslateTransformPage from './Page/GetTranslateTransformPage';

import AnimatedTimingPage from './Page/AnimatedTimingPage';

import AnimatedSpringPage from './Page/AnimatedSpringPage';

import TestPageOne from './Page/TestPageOne';
import TestPageTwo from './Page/TestPageTwo';
import TestPageThree from './Page/TestPageThree';
import TestPageFour from './Page/TestPageFour';

class rnAnimate extends Component {
  constructor(props){
    super(props);
  }

  openDrawer(){
      this.refs['DRAWER'].openDrawer();
  };

  closeDrawer(){
      this.refs['DRAWER'].closeDrawer();
  }

  goTo(n) {
      nav.push({
          id: n.id,
      });
      this.closeDrawer();
  }

  renderScene(route, nav) {
    switch (route.id){
        case 'LayoutAnimationPage':
            return (<LayoutAnimationPage navigator={nav} {...this.props} {...route.passProps} goTo={this.goTo.bind(this)} />);
            break;
        case 'AnimatedPage':
            return (<AnimatedPage navigator={nav} {...this.props} {...route.passProps} goTo={this.goTo.bind(this)} />);
            break;
        case 'AnimatedTextPage':
            return (<AnimatedTextPage navigator={nav} {...this.props} {...route.passProps} goTo={this.goTo.bind(this)} />);
            break;
        case 'AnimatedImagePage':
            return (<AnimatedImagePage navigator={nav} {...this.props} {...route.passProps} goTo={this.goTo.bind(this)} />);
            break;
        case 'GetLayoutPage':
            return (<GetLayoutPage navigator={nav} {...this.props} {...route.passProps} goTo={this.goTo.bind(this)} />);
            break;
        case 'GetTranslateTransformPage':
            return (<GetTranslateTransformPage navigator={nav} {...this.props} {...route.passProps} goTo={this.goTo.bind(this)} />);
            break;
        case 'AnimatedTimingPage':
            return (<AnimatedTimingPage navigator={nav} {...this.props} {...route.passProps} goTo={this.goTo.bind(this)} />);
            break;
        case 'AnimatedSpringPage':
            return (<AnimatedSpringPage navigator={nav} {...this.props} {...route.passProps} goTo={this.goTo.bind(this)} />);
            break;

        case 'TestPageOne':
            return (<TestPageOne navigator={nav} {...this.props} {...route.passProps} />);
            break;
        case 'TestPageTwo':
            return (<TestPageTwo navigator={nav} {...this.props} {...route.passProps} />);
            break;
        case 'TestPageThree':
            return (<TestPageThree navigator={nav} {...this.props} {...route.passProps} />);
            break;
        case 'TestPageFour':
            return (<TestPageFour navigator={nav} {...this.props} {...route.passProps} />);
            break;
    }
}

  render() {
    var navigationView = (
          <View style={styles.container}>
              <Text style={styles.menuTitle}>React Native Animate</Text>
              <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id:'LayoutAnimationPage'})}><Text style={styles.menuItem}>LayoutAnimationPage</Text></TouchableHighlight>

              <View style={styles.divider}></View>

              <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id:'AnimatedPage'})}><Text style={styles.menuItem}>Animated.Value - Animated.View</Text></TouchableHighlight>
              <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id:'AnimatedTextPage'})}><Text style={styles.menuItem}>Animated.Value - Animated.Text</Text></TouchableHighlight>
              <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id:'AnimatedImagePage'})}><Text style={styles.menuItem}>Animated.Value - Animated.Image</Text></TouchableHighlight>
              <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id:'GetLayoutPage'})}><Text style={styles.menuItem}>Animated.ValueXY - GetLayout</Text></TouchableHighlight>
              <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id:'GetTranslateTransformPage'})}><Text style={styles.menuItem}>Animated.ValueXY - GetTranslateTransform</Text></TouchableHighlight>
              <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id:'AnimatedTimingPage'})}><Text style={styles.menuItem}>Animated.Timing</Text></TouchableHighlight>
              <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id:'AnimatedSpringPage'})}><Text style={styles.menuItem}>Animated.spring</Text></TouchableHighlight>

          </View>
    );

    return (
      <DrawerLayoutAndroid
          ref={'DRAWER'}
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.left}
          renderNavigationView={() => navigationView}>

          <View style={styles.container}>
              <Navigator
                  initialRoute={{id:'AnimatedSpringPage'}}
                  ref={((nav) => { global.nav = nav })}
                  renderScene={this.renderScene.bind(this)}
                  configureScene={(route) => {
                      if (route.sceneConfig) {
                        return route.sceneConfig;
                      }
                      return Navigator.SceneConfigs.FloatFromRight;
                  }}
              />
          </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container:{flex:1},
  divider:{height:1,backgroundColor:'#ccc',margin:10},
  menuTitle:{marginTop: 16, marginBottom:16, color:'#4f4f4f', fontSize: 20, textAlign: 'center' },
  menuItem:{flex:1, alignItems:'center',justifyContent:'center', flexDirection:'column', margin:10},
  menuText:{fontSize:18}
});

AppRegistry.registerComponent('rnAnimate', () => rnAnimate);
