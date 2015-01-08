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
			'/': todoApp.setState.bind(todoApp, {nowShowing: app.ALL_TODOS}),
			'/active': todoApp.setState.bind(todoApp, {nowShowing: app.ACTIVE_TODOS}),
			'/completed': todoApp.setState.bind(todoApp, {nowShowing: app.COMPLETED_TODOS})
		});
		router.init('/');
	}

	function update() {
		todoApp.setProps({model: model});
	}

	var model = new app.TodoModel('react-todos');
	model.subscribe(update);
	todoApp = React.render(
		<app.TodoApp
			model={model}
			clearCompleted={model.clearCompleted.bind(model)}
		/>,
		document.getElementById('todoapp')
	);
	startRouter(todoApp);
})();
