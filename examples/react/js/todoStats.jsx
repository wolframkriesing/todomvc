/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */
var app = app || {};

(function () {
	'use strict';

	app.TodoStats = React.createClass({

		render: function () {
			var count = this.props.count;
			var name = app.Utils.pluralize(count, 'item');
			return (
        <span id="todo-count">
          <strong>{count}</strong> {name} left
        </span>
			);

		}
	});
})();
