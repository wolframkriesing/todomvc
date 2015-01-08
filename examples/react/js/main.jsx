/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
var app = app || {};

(function () {
	'use strict';

	var filterData = [
		{url: '/', linkText: 'All'},
		{url: '/active', linkText: 'Active', criteria: function(todo) { return !todo.completed }},
		{url: '/completed', linkText: 'Completed', criteria: function(todo) { return todo.completed }}
  ];
  var filter = new app.Filter(filterData);

	function startRouter() {
		var routerData = {};
		filterData.forEach(function(f, idx) {
			routerData[f.url] = updateViewFilteredBy.bind(null, idx);
		});
		var router = new Router(routerData);
		router.init(filterData[0].url);
	}

	function updateViewFilteredBy(index) {
		filter.setCurrent(index);
		updateView();
	}

	function _getTodoStats(todos) {
		var activeCount = todos.filter(function(todo) { return !todo.completed}).length;
		return {
			activeCount: activeCount,
			completedCount: todos.length - activeCount
		};
	}

	var todoApp;
	function updateView() {
		todoApp.setProps({
			model: model,
			todos: filter.applyOn(model.todos),
			filters: filter.getViewValues(),
			stats: _getTodoStats(model.todos)
		})
	}

	var model = new app.TodoModel('react-todos');
	model.subscribe(updateView);
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
