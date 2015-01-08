/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
var app = app || {};

(function () {
	'use strict';

	var model = new app.TodoModel('react-todos');

	function render() {
		var todoApp = React.render(
			<app.TodoApp
				model={model}
			/>,
			document.getElementById('todoapp')
		);
		startRouter(todoApp);
	}

	function startRouter(todoApp) {
		var router = new Router({
			'/': todoApp.setState.bind(todoApp, {nowShowing: app.ALL_TODOS}),
			'/active': todoApp.setState.bind(todoApp, {nowShowing: app.ACTIVE_TODOS}),
			'/completed': todoApp.setState.bind(todoApp, {nowShowing: app.COMPLETED_TODOS})
		});
		router.init('/');
	}

	model.subscribe(render);
	render();
})();
