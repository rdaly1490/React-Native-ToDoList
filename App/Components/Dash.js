var React = require("react-native");
var TabBar = require("./TabBar");
var SubmitToDos = require("./SubmitToDos");
var ToDoComponent = require("./ToDoComponent");
var api = require("../Utils/api");

var {
	View,
	Text,
	StyleSheet,
	TabBarIOS
} = React;

class ToDoList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			selectedTab: "ActiveToDos",
			todoList: this.props.todos
		}
	}
	renderToDos(){
		api.getTodos(this.props.username)
			.then((res) => {
				console.log(res);
				this.setState({
					todoList: res
				});
			});
		return(
			<View style={styles.testTwo}>
				<ToDoComponent username={this.props.username} todos={this.state.todoList}/>
			</View>
		);
	}
	renderSubmitForm(){
		return(
			<View style={styles.testTwo}>
				<SubmitToDos username={this.props.username} />
			</View>
		);
	}
	renderHistory(){
		return(
			<View>
				<Text style={styles.test}>Hello History</Text>
				<Text style={styles.test}>Hello History</Text>
				<Text style={styles.test}>Hello History</Text>
			</View>
		);
	}
	render(){
		return(
			<TabBarIOS
		        tintColor="white"
		        barTintColor="darkslateblue">
		        <TabBarIOS.Item
		        	selected={this.state.selectedTab === "ActiveToDos"}
		        	systemIcon="contacts"
		        	onPress={() => {
		        		this.setState({
		        			selectedTab: "ActiveToDos"
		        		});
		        	}}>
	        	<View style={styles.container}>
	        		{this.renderToDos()}
	        	</View>
		        </TabBarIOS.Item>

		        <TabBarIOS.Item
		        	selected={this.state.selectedTab === 'SubmitToDo'}
		        	systemIcon="more"
		        	onPress={() => {
		        		this.setState({
		        			selectedTab: "SubmitToDo"
		        		});
		        	}}>
	        	<View style={styles.container}>
	        		{this.renderSubmitForm()}
	        	</View>
		        </TabBarIOS.Item>

		        <TabBarIOS.Item
		        	selected={this.state.selectedTab === 'completedToDos'}
		        	systemIcon="featured"
		        	onPress={() => {
		        		this.setState({
		        			selectedTab: "completedToDos"
		        		});
		        	}}>
		        <View style={styles.container}>
	        		{this.renderHistory()}
	        	</View>
		        </TabBarIOS.Item>
		    </TabBarIOS>	
		);
	}
};

var styles = StyleSheet.create({
  container: {
	flex: 1
  },
  listContainer: {
  	flex: 1,
  },
  test: {
	fontSize: 30,
	textAlign: 'center',
	marginTop: 80,
  },
  testTwo: {
  	marginTop: 80
  }
});

module.exports = ToDoList;