require('!style!css!./../css/style.css');

const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({
  _play: function() {
    console.log('play');
    this.props.speak(this.props.text);
  },

  render: function() {
    return (
      <div>
        <h1>Texte à lire</h1>
        <p>"{this.props.text}"</p>
        <button onClick={this._play}>Lire le texte</button>
      </div>
    );
  }
});

const Reader = {
  init: function(options) {
    this.options = options;

    ReactDOM.render(
      <App speak={options.tts.speak} text={options.text} />,
      document.getElementById(options.container)
    );
  }
};

module.exports = Reader;
