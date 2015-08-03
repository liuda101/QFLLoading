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
      bounceValue1: new Animated.Value(0.01),
      opacity: new Animated.Value(0)
    };
  },
  componentDidMount: function() {
    this._beginAnimate();
  },
  _beginAnimate: function(index) {
    var self = this;
    
    self.state.bounceValue1.setValue(0.01);
    self.state.opacity.setValue(0);

    Animated.parallel([
      Animated.timing(self.state.bounceValue1, {
        toValue: 1,
        duration: 500,
        delay: 100
      }),
      Animated.timing(self.state.opacity, {
        toValue: 0.8,
        duration: 500,
        delay: 100
      })
    ]).start(function() {
      Animated.timing(self.state.opacity, {
        toValue: 0,
        duration: 200
      }).start(function() {
        self._beginAnimate();
      });
    });
  },
  render: function() {
    return (
      <View style={[this.props.style]}>
        <Animated.View style={[styles.spinner, {transform: [{scale: this.state.bounceValue1}], opacity: this.state.opacity}]}></Animated.View>
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
    left: 0,
    opacity: 0,
    backgroundColor: '#30dd30'
  }
});

module.exports = Status1;