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
			if (this._anythingToShow()) {
				return this._renderFooterContent();
			}
			return this._renderEmptyFooter();
		},

		_anythingToShow: function() {
			return this.props.count || this.props.completedCount;
		},

		_renderEmptyFooter: function() {
			return (<footer></footer>);
		},

		_renderFooterContent: function() {
			return (
				<footer id="footer">
					<app.TodoStats count={this.props.count} />
					
					<app.TodoFilters filters={this.props.filters} />

					<app.TodoClearButton
						completedCount={this.props.completedCount}
						onClearCompleted={this.props.onClearCompleted}
					/>
				</footer>
			);

		}
	});
})();
