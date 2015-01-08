/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
var app = app || {};

(function () {
	'use strict';

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

		_renderItem: function(todo) {
			var model = this.props.model;
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
		},

		render: function () {
			var todos = this.props.todos;
			return (
				<section id="main">
					<input
						id="toggle-all"
						type="checkbox"
						onChange={this.toggleAll}
						checked={this.props.checked}
					/>
					<ul id="todo-list">
						{todos.map(this._renderItem, this)}
					</ul>
				</section>
			);
		}
	});
})();
