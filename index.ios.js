'use strict';

var React = require('react-native');
var ToDoList = require("./App/Components/ToDoList");

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
	        component: ToDoList,
	        title: 'My To-Do List',
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
