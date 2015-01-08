/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */
var app = app || {};

(function () {
	'use strict';

	app.TodoFooter = React.createClass({

		render: function () {
			var completedCount = this.props.completedCount;
			var count = this.props.count;
      if (count || completedCount) {
				return this._renderFooterContent(count, completedCount);
			}
			return this._renderEmptyFooter();
		},

		_renderEmptyFooter: function() {
			return (<footer></footer>);
		},

		_renderFooterContent: function(count, completedCount) {
			var activeTodoWord = app.Utils.pluralize(count, 'item');
			return (
				<footer id="footer">
					<span id="todo-count">
						<strong>{count}</strong> {activeTodoWord} left
					</span>
					
					<app.TodoFilters
						filters={this.props.filters}
					/>

					<app.TodoClearButton
						completedCount={completedCount}
						onClearCompleted={this.props.onClearCompleted}
					/>
				</footer>
			);

		}
	});
})();
