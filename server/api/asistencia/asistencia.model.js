'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AsistenciaSchema = new Schema({
  name: String,
  isAssisting: Boolean,
  arrivalDate: Date,
  departureDate: Date
});

module.exports = mongoose.model('Asistencia', AsistenciaSchema);
