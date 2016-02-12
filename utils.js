'use strict';

var utils = require('lazy-cache')(require);
var fn = require;
require = utils;

/**
 * Lazily required module dependencies
 */

require('extend-shallow', 'extend');
require('get-pkg', 'getPkg');
require('get-value', 'get');
require('helper-apidocs', 'apidocs');
require('helper-copyright', 'copyright');
require('helper-date', 'date');
require('helper-issue', 'issue');
require('helper-reflinks', 'reflinks');
require('helper-related', 'related');
require = fn;

/**
 * Expose `utils` modules
 */

module.exports = utils;