/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
var app = app || {};

(function () {
  'use strict';

  //class Filter {
  //  constructor(filters) {
  function Filter(filters) {
    this._filters = filters;
    this._current = 0;
  }

  Filter.prototype = {

    setCurrent: function(index) {
      this._current = index;
    },

    applyOn: function(todos) {
      var criteria = this._filters[this._current].criteria;
      if (criteria) {
        return todos.filter(criteria);
      }
      return todos;
    },

    getViewValues: function() {
      var currentIndex = this._current;
      return this._filters.map(function(by, idx) {
        return {url: '#' + by.url, linkText: by.linkText, selected: idx === currentIndex};
      });
    }
  };

  app.Filter = Filter;
})();