# web-audio-sampler [![Build Status](https://travis-ci.org/hemanth/web-audio-sampler.svg?branch=master)](https://travis-ci.org/hemanth/web-audio-sampler)

> Web audio util, that will help you sample audio.


## Install

```
$ npm install --save web-audio-sampler
```


## Usage

```js
var webAudioSampler = require('web-audio-sampler'),
audioURL = 'http://h3manth.com/meow.ogg';

webAudioSampler(audioURL, function(player){
	player.start(1); // Player is an AudioContext
});
```


## API

### webAudioSampler(url, cb)

#### url

*Required*  
Type: `string`

Audio URL

#### cb

*Require*
Type: `function`  

Callback function.


## License

MIT © [Hemanth.HM](http://h3manth.com)
