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
			if (props.completedCount > 0) {
				return (
					<button
						id="clear-completed"
						onClick={props.onClearCompleted}>
						Clear completed ({props.completedCount})
					</button>
				);
			}
			return (<div></div>);
		}
	});
})();
