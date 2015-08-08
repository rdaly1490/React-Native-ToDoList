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
			selectedTab: true
		}
	}
	renderToDos(){
		return(
			<View style={styles.tabContent}>
				<Text style={styles.test}>Hello There</Text>
				<Text style={styles.test}>Hello There</Text>
				<Text style={styles.test}>Hello There</Text>
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
		        {this.renderToDos}
		        </TabBarIOS.Item>
		        <TabBarIOS.Item
		        	systemIcon="more">Test2
		        </TabBarIOS.Item>
		        <TabBarIOS.Item
		        	systemIcon="featured">Test2
		        </TabBarIOS.Item>
		    </TabBarIOS>	
		);
	}
};

var styles = StyleSheet.create({
  container: {
	
  },
  listContainer: {
  	flex: 1,
  },
  test: {
	fontSize: 30,
	textAlign: 'center',
	marginTop: 80,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  }
});

module.exports = ToDoList;