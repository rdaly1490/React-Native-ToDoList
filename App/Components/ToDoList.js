var React = require("react-native");
var TabBar = require("./TabBar");

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
			selectedTab: "ActiveToDos"
		}
	}
	renderToDos(){
		return(
			<View>
				<Text style={styles.test}>Hello World</Text>
				<Text style={styles.test}>Hello World</Text>
				<Text style={styles.test}>Hello World</Text>
			</View>
		);
	}
	renderSubmitForm(){
		return(
			<View>
				<Text style={styles.test}>Hello Submit</Text>
				<Text style={styles.test}>Hello Submit</Text>
				<Text style={styles.test}>Hello Submit</Text>
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
  	marginTop: 50
  }
});

module.exports = ToDoList;