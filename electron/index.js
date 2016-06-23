// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var ttsWebApi = require('tts.webapi');
var Reader = require('reader');

console.log(ttsWebApi);

Reader.init({
  container: 'container',
  tts: ttsWebApi,
  text: 'Bonjour, bienvenue sur cette démonstration d\'une application Electron !'
});
