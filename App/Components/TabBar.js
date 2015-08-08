var React = require("react-native");

var {
	Text,
	View,
	TabBarIOS,
	StyleSheet
} = React;

class TabBar extends React.Component{
	render(){
		return(
			<TabBarIOS
		        tintColor="white"
		        barTintColor="darkslateblue">
		        <TabBarIOS.Item
		        	systemIcon="contacts">Test
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

module.exports = TabBar;