/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
var app = app || {};

(function () {
	'use strict';

	app.TodoApp = React.createClass({

		render: function () {
			var props = this.props;
			var stats = props.stats;
			return (
				<div>
					<header id="header">
						<h1>todos</h1>
						<app.TodoInput model={props.model} />
					</header>

					<app.TodoItems
						model={props.model}
						todos={props.todos}
						checked={stats.activeCount === 0}
					/>

					<app.TodoFooter
						count={stats.activeCount}
						completedCount={stats.completedCount}
						filters={this.props.filters}
						onClearCompleted={props.clearCompleted}
					/>
				</div>
			);
		}
	});
})();
