var api = {
	getNotes(username){
		username = "rdaly1490";
		var url = `https://todolist-app.firebaseio.com/${username}.json`;
		return fetch(url)
				.then((res) => res.json());
	},
	addTodo(username, todo){
		username = "rdaly1490";
		var url = `https://todolist-app.firebaseio.com/${username}.json`;
		return fetch(url, {
			method: "post",
			body: JSON.stringify(todo)
		}).then((res) => res.json());
	}
};

module.exports = api;