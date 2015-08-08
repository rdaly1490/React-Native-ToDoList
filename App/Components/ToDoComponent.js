var React = require("react-native");

var {
	Text,
	View,
	StyleSheet
} = React;

class ToDoComponent extends React.Component{
	render(){
		return(
			<View>
				<Text style={styles.ToDoContainer}>Testingggg.....</Text>
			</View>
		);
	}
};

var styles = StyleSheet.create({

  ToDoContainer: {
  	paddingTop:50
  }

 });

module.exports = ToDoComponent;