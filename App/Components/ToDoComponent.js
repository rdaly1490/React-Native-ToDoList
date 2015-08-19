var React = require("react-native");
var api = require("../Utils/api");

var {
	Text,
	View,
	StyleSheet,
	ListView,
	TouchableHighlight
} = React;

class ToDoComponent extends React.Component{
	constructor(props){
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});
		this.state = {
			dataSource: this.ds.cloneWithRows(this.props.todos)
		}
	}
	renderRow(rowData){
		return (
			<View>
				<View style={styles.rowContainer}>
					<TouchableHighlight
						style={styles.button}
						underlayColor="#88D4F5">
						<Text style={styles.textStyle}>{rowData}</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
	render(){
		return(
			<View style={styles.container}>
				<ListView
					dataSource={this.state.dataSource}
					automaticallyAdjustContentInsets={false}
					renderRow={this.renderRow} 
					renderSeperator={() => <View style={styles.seperator}></View>} />
			</View>
		);
	}
};

var styles = StyleSheet.create({

 container: {
    flex: 1,
    flexDirection: 'column',
  },
  seperator: {
    height: 3,
    backgroundColor: 'black',
    flex: 1,
    marginLeft: 15
  },
  rowContainer: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  textStyle: {
  	fontSize: 30
  },
  button: {
    height: 60,
    backgroundColor: '#48BBEC',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  }

 });

module.exports = ToDoComponent;