var React = require("react-native");

var {
	Text,
	View,
	StyleSheet,
	TextInput,
	TouchableHighlight
} = React;

class SubmitToDos extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			newToDo: ""
		}
	}
	onToDoChange(event){
		this.setState({
			newToDo: event.nativeEvent.text
		});
	}
	onSubmitPressed(){
		var ToDoObject = {
			ToDo: this.state.newToDo,
			completed: false
		};
		console.log("submitted", ToDoObject);
		this.setState({
			newToDo: ""
		});
	}
	render(){
		return(
			<View>
				<TextInput
					value = {this.state.newToDo}
					style={styles.toDoInput}
					onChange = {this.onToDoChange.bind(this)}
					placeholder="Enter a New ToDo!" />
				<TouchableHighlight 
					style={styles.button}
					underlayColor='#99d9f4'
					onPress={this.onSubmitPressed.bind(this)}>
				  <Text style={styles.buttonText}>Submit</Text>
				</TouchableHighlight>
			</View>
		);
	}
};

var styles = StyleSheet.create({

  toDoInput: {
	height: 36,
	padding: 4,
	marginRight: 5,
	flex: 4,
	fontSize: 18,
	borderWidth: 1,
	borderColor: '#48BBEC',
	borderRadius: 8,
	color: '#48BBEC'
  },
  buttonText: {
	fontSize: 18,
	color: 'white',
	alignSelf: 'center'
  },
  button: {
  	marginTop: 20,
	height: 36,
	flex: 1,
	flexDirection: 'row',
	backgroundColor: '#48BBEC',
	borderColor: '#48BBEC',
	borderWidth: 1,
	borderRadius: 8,
	marginBottom: 10,
	alignSelf: 'stretch',
	justifyContent: 'center'
  },

 });

module.exports = SubmitToDos;