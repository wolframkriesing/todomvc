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
			var model = this.props.model;
      var todos = model.todos;

			var activeTodoCount = todos.reduce(function (accum, todo) {
				return todo.completed ? accum : accum + 1;
			}, 0);

			var completedCount = todos.length - activeTodoCount;

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
						checked={activeTodoCount === 0}
						nowShowing={this.state.nowShowing}
					/>

					<app.TodoFooter
						count={activeTodoCount}
						completedCount={completedCount}
						nowShowing={this.state.nowShowing}
						onClearCompleted={model.clearCompleted.bind(model)}
					/>
				</div>
			);
		}
	});
})();
