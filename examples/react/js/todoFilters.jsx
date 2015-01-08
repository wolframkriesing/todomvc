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
			return (
				<ul id="filters">{this.props.filters.map(this._renderOne)}</ul>
			);
		},

		_renderOne: function(data) {
			return (
				<li>
					<a href={data.url} className={data.selected ? 'selected' : ''}>
						{data.linkText}
					</a>
				</li>
			);
		}
	});
})();
