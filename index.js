var Alexa = require('alexa-sdk');
var languageStrings = require('./config/languages');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.resources = languageStrings;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {
  'LaunchRequest': function () {
        this.emit('WelcomeIntent');
    },

    'WelcomeIntent': function () {
        this.emit(':ask', SAY_WELCOME_MESSAGE, SAY_HELP);
    },

    'BusTimesIntent': function () {
        this.emit(':ask', SAY_WHAT_SERVICE, SAY_HELP);
    },

    'NextBusIntent': function () {
        this.emit(':ask', SAY_WHAT_SERVICE, SAY_HELP);
    }
};
