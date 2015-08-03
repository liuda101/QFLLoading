'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Animated
} = React;


var Status1 = React.createClass({
  getInitialState: function() {
    return {
      bounceValue1: new Animated.Value(0.1),
      bounceValue2: new Animated.Value(1)
    };
  },
  componentDidMount: function() {
    this._beginAnimate1();
    this._beginAnimate2();
  },
  _beginAnimate1: function(index) {
    var self = this;
    
    Animated.timing(self.state.bounceValue1, {
      toValue: 1,
      duration: 700,
      
    }).start(function() {
      Animated.timing(self.state.bounceValue1, {
        toValue: 0.1,
        duration: 700,
        
      }).start(function() {
        self._beginAnimate1();
      });
    });
  },
  _beginAnimate2: function(index) {
    var self = this;
    
    Animated.timing(self.state.bounceValue2, {
      toValue: 0.1,
      duration: 700,
      
    }).start(function() {
      Animated.timing(self.state.bounceValue2, {
        toValue: 1,
        duration: 700,
        
      }).start(function() {
        self._beginAnimate2();
      });
    });
  },
  render: function() {
    return (
      <View style={[this.props.style]}>
        <Animated.View style={[styles.spinner, styles.spinner1, {transform: [{scale: this.state.bounceValue1}]}]}></Animated.View>
        <Animated.View style={[styles.spinner, styles.spinner2, {transform: [{scale: this.state.bounceValue2}]}]}></Animated.View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  spinner: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    top: 0,
    left: 0
  },
  spinner1: {
    backgroundColor: '#389938'
  },
  spinner2: {
    backgroundColor: '#30dd30'
  }
});

module.exports = Status1;