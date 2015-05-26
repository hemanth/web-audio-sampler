'use strict';

var isUrl = function(url) {
  return /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/.test(url);
};

module.exports = function(url, cb) {

  if (typeof AudioContext !== 'function' || typeof fetch !== 'function') {
    throw new Error("Please get a better browser!");
  }

  if (typeof cb !== 'function') {
    throw new Error("Callback function is missing!");
  }
  if (!isUrl(url)) {
    throw new Error("Not a valid URL " + url);
  }

  var audioContext = new AudioContext();
  fetch(url).then(function() {
    return response.arrayBuffer();
  }).then(function() {
    var player = audioContext.createBufferSource()
    player.buffer = buffer
    player.connect(audioContext.destination)
    return cb(player);
  });

};
