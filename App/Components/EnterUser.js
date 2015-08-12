var React = require("react-native");
var Dash = require("./Dash");
var api = require("../Utils/api");

var {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableHighlight,
	ActivityIndicatorIOS
} = React;

class EnterUser extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isLoading: false,
			error: false,
			username: ""
		}
	}
	handleChange(event){
		this.setState({
			username: event.nativeEvent.text
		});
	}
	handleSubmit(){
		if(this.state.username === "" || this.state.username === " "){
			this.setState({
				error: "Invalid Username"
			});
		}
		else {
			this.setState({
				isLoading: true,
				error: false
			});
			api.getTodos(this.state.username)
				.then((res) => {
					this.props.navigator.push({
						title: this.state.username+"'s ToDos" || "Select an Option",
							component: Dash,
							passProps: {username: this.state.username}
					});
					this.setState({
						isLoading:false,
						error:false,
						username:""
					});
				});
		}
	}
	render(){
		var showErr = (
			this.state.error ? <View style={styles.error}><Text style={styles.errorColor}>{this.state.error}</Text></View> : <View></View>
		);
		return(
			<View style={styles.mainContainer}>
				<Text style={styles.title}>Enter A UserName</Text>
				<TextInput
					style={styles.searchInput}
					value={this.state.username}
					onChange={this.handleChange.bind(this)} />
				<TouchableHighlight
					style={styles.button}
					onPress={this.handleSubmit.bind(this)}
					underlayColor="white">
						<Text style={styles.buttonText}>ENTER</Text>
				</TouchableHighlight>
				<View style={styles.error}>
				<ActivityIndicatorIOS
					style={styles.loading}
					animating={this.state.isLoading}
					color="#fff"
					size="large"></ActivityIndicatorIOS></View>
				{showErr}
			</View>
		);
	}
};

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#22253E'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  error: {
  	alignItems: 'center',
    justifyContent: 'center'
  },
  errorColor: {
  	color: "white"
  }
});

module.exports = EnterUser;