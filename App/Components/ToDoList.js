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
			selectedTab:true
		}
	}
	renderToDos(){
		console.log("renderToDos works");
		return(
			<View>
				<Text style={styles.test}>Hello World</Text>
				<Text style={styles.test}>Hello World</Text>
				<Text style={styles.test}>Hello World</Text>
			</View>
		);
	}
	render(){
		console.log("route works");
		return(
			<TabBarIOS
		        tintColor="white"
		        barTintColor="darkslateblue">
		        <TabBarIOS.Item
		        	selected={this.state.selectedTab}
		        	systemIcon="contacts"
		        	onPress={() => console.log("click works")}>
		        	<View style={styles.container}>
		        		{this.renderToDos()}
		        	</View>
		        </TabBarIOS.Item>
		        <TabBarIOS.Item
		        	selected={this.state.selectedTab === 'greenTab'}
		        	systemIcon="more">Test2
		        </TabBarIOS.Item>
		        <TabBarIOS.Item
		        	selected={this.state.selectedTab === 'redTab'}
		        	systemIcon="featured">Test2
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