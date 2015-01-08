/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
var app = app || {};

(function () {
	'use strict';

	var todoApp;
	function startRouter() {
		var router = new Router({
			'/': showAllItems,
			'/active': showActiveItems,
			'/completed': showCompletedItems
		});
		router.init('/');
	}

	function getAllTodos() {
		return model.todos;
	}
	function getActiveTodos() {
		return model.todos.filter(function(todo) { return !todo.completed });
	}
	function getCompletedTodos() {
		return model.todos.filter(function(todo) { return todo.completed });
	}

	function showAllItems() {
		todoApp.setState({nowShowing: app.ALL_TODOS});
		todoApp.setProps({todos: getAllTodos()});
	}
	function showActiveItems() {
		todoApp.setState({nowShowing: app.ACTIVE_TODOS});
		todoApp.setProps({todos: getActiveTodos()});
	}
	function showCompletedItems() {
		todoApp.setState({nowShowing: app.COMPLETED_TODOS});
		todoApp.setProps({todos: getCompletedTodos()});
	}

	function update() {
		todoApp.setProps({model: model, todos: model.todos});
	}

	var model = new app.TodoModel('react-todos');
	model.subscribe(update);
	todoApp = React.render(
		<app.TodoApp
			model={model}
			todos={model.todos}
			clearCompleted={model.clearCompleted.bind(model)}
		/>,
		document.getElementById('todoapp')
	);
	startRouter(todoApp);
})();
