/*
 * git_test
 * https://github.com/bvodden/git_test
 *
 * Copyright (c) 2017 Bryan Vodden
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.git_test = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.git_test = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.git_test.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.git_test.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].git_test = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
