/*
Welcome to JP Learning
*/
const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;

const EventsSchema = new Schema({
  uuid: String,
  highpressure: String,
  lowpressure: String,
  cooler: String,
  currentpower: String,
  currentamp: String,
  currentvolt: String,
  currentfrequency: String,
  currentPF: String,
  waterflow: String,
  waterpressure: String,
  watertemp: String,
  airflow: String,
  
});

module.exports = mongoose.model('Events', EventsSchema);