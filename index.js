/*jshint esversion: 6, node: true*/
"use strict";
const Alexa = require('alexa-sdk');
const languageStrings = require('./config/languages');
const data = require('data');

const handlers = {

  'WelcomeIntent': function() {
    this.emit(":ask", this.t('SAY_WELCOME_MESSAGE'), this.t('SAY_HELP'));
  },

  'BusTimesIntent': function() {
    this.emit(":ask", this.t('SAY_WHAT_SERVICE'), this.t('SAY_HELP'));
  },

  'NextBusIntent': function() {
    this.emit(":ask", this.t('SAY_WHAT_SERVICE'), this.t('SAY_HELP'));
  },

  'AMAZON.HelpIntent': function () {
      this.emit(':ask', this.t('SAY_HELP'));
  },

  'AMAZON.StopIntent': function () {
      this.emit(':tell', this.t('SAY_GOODBYE'));
  },

  'AMAZON.CancelIntent': function () {
      this.emit(':tell', this.t('SAY_GOODBYE'));
  },

  'Unhandled': function() {
		this.emit(':tell', this.t("UNHANDLED_MESSAGE"));
  },

  'LaunchRequest': function() {
    this.emit("WelcomeIntent");
  }

};

exports.handler = function(event, context, callback) {
  const alexa = Alexa.handler(event, context);
  alexa.resources = languageStrings;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
