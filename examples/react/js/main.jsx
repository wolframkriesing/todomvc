/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
var app = app || {};

(function () {
	'use strict';

	var filter = new app.Filter();

	var todoApp;
	function startRouter() {
		var router = new Router({
			'/': showAllClicked,
			'/active': showActiveClicked,
			'/completed': showCompletedClicked
		});
		router.init('/');
	}

	function showAllClicked() {
		filter.setCurrent(0);
		update();
	}
	function showActiveClicked() {
		filter.setCurrent(1);
		update();
	}
	function showCompletedClicked() {
		filter.setCurrent(2);
		update();
	}

	function _getTodoStats(todos) {
		var activeCount = todos.reduce(function(accum, todo) {
      return todo.completed ? accum : accum + 1;
    }, 0);
		return {
			activeCount: activeCount,
			completedCount: todos.length - activeCount
		};
	}

	function update() {
		todoApp.setProps({
			model: model,
			todos: filter.applyOn(model.todos),
			filters: filter.getViewValues(),
			stats: _getTodoStats(model.todos)
		})
	}

	var model = new app.TodoModel('react-todos');
	model.subscribe(update);
	todoApp = React.render(
		<app.TodoApp
			model={model}
			todos={model.todos}
			filters={filter.getViewValues()}
			stats={_getTodoStats(model.todos)}
			clearCompleted={model.clearCompleted.bind(model)}
		/>,
		document.getElementById('todoapp')
	);
	startRouter(todoApp);
})();
