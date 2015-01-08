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
			'/': showAllClicked,
			'/active': showActiveClicked,
			'/completed': showCompletedClicked
		});
		router.init('/');
	}

	function getDefaultFilters() {
		return [
			{url: '#/', linkText: 'All', selected: false},
			{url: '#/active', linkText: 'Active', selected: false},
			{url: '#/completed', linkText: 'Completed', selected: false}
		];
	}

	function getAllFilter() {
		var filters = getDefaultFilters();
		filters[0].selected = true;
		return filters;
	}
	function getActiveFilter() {
		var filters = getDefaultFilters();
		filters[1].selected = true;
		return filters;
	}
	function getCompletedFilter() {
		var filters = getDefaultFilters();
		filters[2].selected = true;
		return filters;
	}

	function filterForActiveTodos(todos) {
		return todos.filter(function(todo) { return !todo.completed });
	}
	function filterForCompletedTodos(todos) {
		return todos.filter(function(todo) { return todo.completed });
	}

	function showAllClicked() {
		updateViewWithTodos(model.todos, getAllFilter());
	}
	function showActiveClicked() {
		updateViewWithTodos(filterForActiveTodos(model.todos), getActiveFilter());
	}
	function showCompletedClicked() {
		updateViewWithTodos(filterForCompletedTodos(model.todos), getCompletedFilter());
	}

	function updateViewWithTodos(todos, filters) {
		todoApp.setProps({
			model: model,
			todos: todos,
			filters: filters
		});
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
			filters={getAllFilter()}
			clearCompleted={model.clearCompleted.bind(model)}
		/>,
		document.getElementById('todoapp')
	);
	startRouter(todoApp);
})();
