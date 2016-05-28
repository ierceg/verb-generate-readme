'use strict';

var includes = {

  /**
   * Usage
   */
  
  'usage': [
    '```js',
    '// node.js',
    'var {%= alias %} = require(\'{%= name %}\');',
    '// es6',
    'import {%= alias %} from \'{%= name %}\';',
    '```'
  ].join('\n'),

  /**
   * Install
   */
  
  'install': [
    'Install with [npm](https://www.npmjs.com/):',
    '',
    '```sh',
    '$ npm install {%= name %}',
    '```'
  ].join('\n'),

  'install-npm': [
    'Install with [npm](https://www.npmjs.com/):',
    '',
    '```sh',
    '$ npm install {%= name %}{%= ((typeof save !== "undefined" && save === true) ? " --save" : "") %}',
    '```'
  ].join('\n'),

  'install-global': [
    'Install globally with [npm](https://www.npmjs.com/)',
    '',
    '```sh',
    '$ npm install -g {%= name %}',
    '```'
  ].join('\n'),

  'install-dev': [
    'Install as a `devDependency` with [npm](https://www.npmjs.com/):',
    '',
    '```sh',
    '$ npm install {%= name %} --save-dev',
    '```'
  ].join('\n'),

  'install-bower': [
    'Install with [bower](http://bower.io/)',
    '',
    '```sh',
    '$ bower install {%= name %}{%= save === true ? " --save" : "" %}',
    '```'
  ].join('\n'),

  /**
   * Related
   */
  
  'highlight': [
    '{% if (verb.related && verb.related.highlight) { %}',
    'You might also be interested in [{%= verb.related.highlight %}]({%= pkg(verb.related.highlight, "homepage") %}).',
    '{% } %}',
    ''
  ].join('\n'),

  'related-list': [
    '{% if (verb.related && verb.related.list && verb.related.list.length) { %}',
    '{%= verb.related.description || "You might also be interested in these projects:" %} ',
    '',
    '{%= related(verb.related.list) %}  ',
    '{% } %}'
  ].join('\n'),

  /**
   * Upgrading
   */
  
  'upgrading': [
    '**Clear your cache and re-install**',
    '',
    'If you\'re currently running {%= name %} v{%= previous("minor", version) %} or lower, please do the following to clear out old versions of {%= name %}, so that the latest version of {%= name %} will install properly:',
    '',
    '```bash',
    '$ npm cache clean && npm i -g {%= name %}',
    '```'
  ].join('\n'),

  /**
   * Tests
   */

  'coverage': [
    '## Code coverage',
    'As of {%= date() %}',
    '{%= coverage("coverage/summary.txt") %}'
  ].join('\n'),

  'tests': [
    'Install dev dependencies:',
    '',
    '```sh',
    '$ npm install -d && npm test',
    '```'
  ].join('\n'),

  /**
   * Build docs
   */
  
  'generate-docs': [
    'Generate readme and API documentation with [verb][]:',
    '',
    '```sh',
    '$ npm install -g verb verb-readme-generator && verb',
    '```'
  ].join('\n'),

  /**
   * Authors
   */
  
  'author': [
    '**{%= author.name %}**',
    '',
    '+ [github/{%= author.username %}](https://github.com/{%= author.username %})',
    '+ [twitter/{%= author.twitter %}](http://twitter.com/{%= author.twitter %})'
  ].join('\n'),

  'authors': [
    '{% authors.forEach(function(author) { %}',
    '{%= include("author", {author: author}) %}',
    '{% }) %}'
  ].join('\n'),

  'contributing': 'Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/{%= owner %}/{%= name %}/issues/new).',
  // \n\nIf this project doesn\'t do what you need, [please let us know]({%= bugs.url %})!

  'footer': '_This file was generated by [{%= runner.name %}]({%= (runner.url || runner.homepage) %}), v{%= runner.version %}, on {%= date() %}._'
};

includes['build-docs'] = includes['generate-docs'];
includes.upgrade = includes.upgrading;

module.exports = includes;
