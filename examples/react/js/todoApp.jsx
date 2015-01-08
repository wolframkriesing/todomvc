/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
var app = app || {};

(function () {
	'use strict';

	app.ALL_TODOS = 'all';
	app.ACTIVE_TODOS = 'active';
	app.COMPLETED_TODOS = 'completed';

	var ENTER_KEY = 13;

	app.TodoApp = React.createClass({
		getInitialState: function () {
			return {
				nowShowing: app.ALL_TODOS
			};
		},

		handleNewTodoKeyDown: function (event) {
			if (event.which !== ENTER_KEY) {
				return;
			}

			event.preventDefault();

			var val = this.refs.newField.getDOMNode().value.trim();

			if (val) {
				this.props.model.addTodo(val);
				this.refs.newField.getDOMNode().value = '';
			}
		},

		render: function () {
			var props = this.props;
      var model = props.model;
      var todos = model.todos;

			var activeTodoCount = todos.reduce(function (accum, todo) {
				return todo.completed ? accum : accum + 1;
			}, 0);

			var completedCount = todos.length - activeTodoCount;

			var nowShowing = this.state.nowShowing;
			var filters = [
				{url: '#/', linkText: 'All', selected: nowShowing === app.ALL_TODOS},
				{url: '#/active', linkText: 'Active', selected: nowShowing === app.ACTIVE_TODOS},
				{url: '#/completed', linkText: 'Completed', selected: nowShowing === app.COMPLETED_TODOS}
			];

			return (
				<div>
					<header id="header">
						<h1>todos</h1>
						<input
							ref="newField"
							id="new-todo"
							placeholder="What needs to be done?"
							onKeyDown={this.handleNewTodoKeyDown}
							autoFocus={true}
						/>
					</header>

					<app.TodoItems
						model={model}
						todos={props.todos}
						checked={activeTodoCount === 0}
					/>

					<app.TodoFooter
						count={activeTodoCount}
						completedCount={completedCount}
						filters={filters}
						onClearCompleted={props.clearCompleted}
					/>
				</div>
			);
		}
	});
})();
