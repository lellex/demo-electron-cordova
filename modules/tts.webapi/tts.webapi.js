const voices = speechSynthesis.getVoices();

const ttsWebApi = {
  speak: function(text) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.voice = voices[0]; // Note: some voices don't support altering params
    // utterance.voiceURI = 'native';
    utterance.volume = 1; // 0 to 1
    utterance.rate = 1; // 0.1 to 10
    utterance.pitch = 1; //0 to 2
    utterance.lang = 'fr';
    utterance.text = text;
    speechSynthesis.speak(utterance);
  }
};

module.exports = ttsWebApi;
