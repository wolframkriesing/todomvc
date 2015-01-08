/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
var app = app || {};

(function () {
	'use strict';

	var ENTER_KEY = 13;

	app.TodoInput = React.createClass({

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

		render: function() {
			return (
				<input
					ref="newField"
					id="new-todo"
					placeholder="What needs to be done?"
					onKeyDown={this.handleNewTodoKeyDown}
					autoFocus={true}
				/>
			);
		}

	});
})();
