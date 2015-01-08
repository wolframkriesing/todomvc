/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React */
var app = app || {};

(function () {
	'use strict';

	app.TodoClearButton = React.createClass({

		render: function () {
      var props = this.props;
      var completedCount = props.completedCount;

			if (completedCount > 0) {
				return (
					<button
						id="clear-completed"
						onClick={props.onClearCompleted}>
						Clear completed ({completedCount})
					</button>
				);
			}
			return (<div></div>);
		}
	});
})();
