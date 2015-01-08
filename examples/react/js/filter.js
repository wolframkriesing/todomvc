/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
/*global React, Router*/
var app = app || {};

(function () {
  'use strict';

  class Filter {
    constructor() {
      this._by = [
        {url: '#/', linkText: 'All'},
        {url: '#/active', linkText: 'Active', criteria: function(todo) { return !todo.completed }},
        {url: '#/completed', linkText: 'Completed', criteria: function(todo) { return todo.completed }}
      ];
      this._current = 0;
    }

    setCurrent(index) {
      this._current = index;
    }

    applyOn(todos) {
      var criteria = this._by[this._current].criteria;
      if (criteria) {
        return todos.filter(criteria);
      }
      return todos;
    }

    getViewValues() {
      var currentIndex = this._current;
      return this._by.map(function(by, idx) {
        return {url: by.url, linkText: by.linkText, selected: idx === currentIndex};
      });
    }
  }

  app.Filter = Filter;
})();