import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight, Navigator, DrawerLayoutAndroid} from 'react-native';

import LayoutAnimationPage from './Page/LayoutAnimationPage';
import AnimatedPage from './Page/AnimatedPage';
import AnimatedTextPage from './Page/AnimatedTextPage';
import AnimatedImagePage from './Page/AnimatedImagePage';
import PositionAnimatedViewPage from './Page/PositionAnimatedViewPage';

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
        case 'PositionAnimatedViewPage':
            return (<PositionAnimatedViewPage navigator={nav} {...this.props} {...route.passProps} goTo={this.goTo.bind(this)} />);
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
              <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id:'AnimatedPage'})}><Text style={styles.menuItem}>AnimatedPage</Text></TouchableHighlight>
              <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id:'AnimatedTextPage'})}><Text style={styles.menuItem}>AnimatedTextPage</Text></TouchableHighlight>
              <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id:'AnimatedImagePage'})}><Text style={styles.menuItem}>AnimatedImagePage</Text></TouchableHighlight>
              <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id:'PositionAnimatedViewPage'})}><Text style={styles.menuItem}>PositionAnimatedViewPage</Text></TouchableHighlight>
              <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id:'TestPageOne'})}><Text style={styles.menuItem}>TestPageOne</Text></TouchableHighlight>
              <TouchableHighlight underlayColor="#0a8acd" activeOpacity={1} onPress={() => this.goTo({id:'TestPageTwo'})}><Text style={styles.menuItem}>TestPageTwo</Text></TouchableHighlight>
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
                  initialRoute={{id:'PositionAnimatedViewPage'}}
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
  menuTitle:{marginTop: 16, marginBottom:16, color:'#4f4f4f', fontSize: 20, textAlign: 'center' },
  menuItem:{flex:1, alignItems:'center',justifyContent:'center', flexDirection:'column', margin:10},
  menuText:{fontSize:18}
});

AppRegistry.registerComponent('rnAnimate', () => rnAnimate);
