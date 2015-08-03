/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  NavigatorIOS
} = React;

var Dimensions = require('Dimensions');

var DEVICE_HEIGHT = Dimensions.get('window').height;
var DEVICE_WIDTH = Dimensions.get('window').width;

var LoadingStatus = require('./Loading/index');


var ALL_STATUS = [{
  title: '',
  component: 'Status1'
}];

var LoadingList = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    };
  },
  componentDidMount: function() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(ALL_STATUS)
    });
  },
  render: function() {
    return (
      <ListView 
        renderRow={this._renderRow}
        dataSource={this.state.dataSource}/>
    );
  },

  _renderRow: function(rowData, section, row) {
    var Status = LoadingStatus[rowData.component];
    return (
      <View style={styles.row}>
        <Status style={styles.loadingStatus} />
      </View>
    );
  }
});

var QFLLoading = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        shadowHidden={true}
        style={styles.container}
        initialRoute={{
          title: 'Loading Status',
          component: LoadingList
        }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc'
  },
  loadingStatus: {
    width: 50,
    height: 50
  }
});

AppRegistry.registerComponent('QFLLoading', () => QFLLoading);
