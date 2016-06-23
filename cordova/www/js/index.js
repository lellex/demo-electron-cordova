var app = {

    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {

        window.Reader.init({
          container: 'container',
          tts: window.ttsCordova,
          text: 'Bonjour, bienvenue sur cette démonstration d\'une application Cordova !'
        });

    }
};

app.initialize();
