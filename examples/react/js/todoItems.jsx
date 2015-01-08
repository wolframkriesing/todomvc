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

	app.TodoItems = React.createClass({

		getInitialState: function () {
			return {
				editing: null
			};
		},

		toggleAll: function (event) {
			var checked = event.target.checked;
			this.props.model.toggleAll(checked);
		},

		edit: function (todo, callback) {
			// refer to todoItem.js `handleEdit` for the reasoning behind the
			// callback
			this.setState({editing: todo.id}, function () {
				callback();
			});
		},

		save: function (todoToSave, text) {
			this.props.model.save(todoToSave, text);
			this.setState({editing: null});
		},

		cancel: function () {
			this.setState({editing: null});
		},

		render: function () {
			var model = this.props.model;
      var todos = model.todos;

			var shownTodos = todos.filter(function (todo) {
				switch (this.props.nowShowing) {
				case app.ACTIVE_TODOS:
					return !todo.completed;
				case app.COMPLETED_TODOS:
					return todo.completed;
				default:
					return true;
				}
			}, this);

			var todoItems = shownTodos.map(function (todo) {
				return (
					<app.TodoItem
						key={todo.id}
						todo={todo}
						onToggle={model.toggle.bind(model, todo)}
						onDestroy={model.destroy.bind(model, todo)}
						onEdit={this.edit.bind(this, todo)}
						editing={this.state.editing === todo.id}
						onSave={this.save.bind(this, todo)}
						onCancel={this.cancel}
					/>
				);
			}, this);

			return (
				<section id="main">
					<input
						id="toggle-all"
						type="checkbox"
						onChange={this.toggleAll}
						checked={this.props.checked}
					/>
					<ul id="todo-list">
						{todoItems}
					</ul>
				</section>
			);
		}
	});
})();
