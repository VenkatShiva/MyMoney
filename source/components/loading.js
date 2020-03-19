import React, {Component} from 'react';
import styles from '../styles/styles';

// console.log('styles',styles);
import {
  Text,
  ActivityIndicator,
  Animated,
  Dimensions
} from 'react-native';
import { connect } from "react-redux";

const dimensions = Dimensions.get('window');
class Loading extends Component {
  state = {
    x: new Animated.Value(+dimensions.width),
  };
  componentDidMount(){
    this.props.persistance ? null :
    Animated.spring(this.state.x, {
      toValue: 0,
      speed: 2
    }).start();
    setTimeout(()=>{
      // console.log("props here-->",this.props);
      if(!this.props.persistance){
        if(this.props.isLoggedIn){
          this.props.navigation.navigate('landing');
        }else{
          this.props.navigation.navigate('authentication');
        }
      }
    },1000)
  }
  componentWillUnmount(){
    Animated.spring(this.state.x, {
      toValue: -dimensions.width,
      speed: 2
    }).start();
  }
  render() {
    return (
      <Animated.View style={[styles.centerAlign,{transform:[{translateX: this.props.persistance ? 0 : this.state.x}]}]}>
         <ActivityIndicator size="large" color="#000" />
          {this.props.persistance ? null :
          <Text style={[styles.defaultText,{fontWeight:"800",fontSize:30}]}>MyMoney</Text>
          }
      </Animated.View>
    );
  }
}
const mapStateToProps =  state => {
  return {
    isLoggedIn: state.authReducer.loggedIn,
  };
};
export default connect(mapStateToProps,null)(Loading);