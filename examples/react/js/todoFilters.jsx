/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */
var app = app || {};

(function () {
	'use strict';

	app.TodoFilters = React.createClass({

		render: function () {
			// React idiom for shortcutting to `classSet` since it'll be used often
			var cx = React.addons.classSet;
			var nowShowing = this.props.nowShowing;
			return (
				<ul id="filters">
					{this._renderFilterLine('#/', 'All', cx({selected: nowShowing === app.ALL_TODOS}))}
					{' '}
  				{this._renderFilterLine('#/active', 'Active', cx({selected: nowShowing === app.ACTIVE_TODOS}))}
				  {' '}
  				{this._renderFilterLine('#/completed', 'Completed', cx({selected: nowShowing === app.COMPLETED_TODOS}))}
				</ul>
			);
		},

		_renderFilterLine: function(url, what, className) {
			return (
				<li>
					<a href={url} className={className}>{what}</a>
				</li>
			);
		}
	});
})();
