'use strict';

var React = require('react-native');
var EnterUser = require("./App/Components/EnterUser");

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

var todoList = React.createClass({
  render: function() {
	return (
	    <NavigatorIOS
	      style={styles.container}
	      initialRoute={{
	        component: EnterUser,
	        title: 'ToDo App',
	        passProps: { myProp: 'foo' }
	      }} />
	);
  }
});

var styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('todoList', () => todoList);
