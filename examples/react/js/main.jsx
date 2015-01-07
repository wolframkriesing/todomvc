/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
var app = app || {};

(function () {
	'use strict';

	var model = new app.TodoModel('react-todos');

	var TodoApp = app.TodoApp;
	function render() {
		React.render(
			<TodoApp model={model}/>,
			document.getElementById('todoapp')
		);
	}

	model.subscribe(render);
	render();
})();
