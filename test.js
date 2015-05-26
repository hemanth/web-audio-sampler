'use strict';
var assert = require('assert');
var webAudioSampler = require('./');

it('should throw an error', function() {
  assert.throws(function() {
    webAudioSampler('http://h3manth.com/meow.ogg')
  }, Error);
});

//TODO: Emulate browser.
