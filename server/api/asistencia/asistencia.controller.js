'use strict';

var _ = require('lodash');
var Asistencia = require('./asistencia.model');

// Get list of asistencias
exports.index = function(req, res) {
  Asistencia.find(function (err, asistencias) {
    if(err) { return handleError(res, err); }
    return res.json(200, asistencias);
  });
};

// Get a single asistencia
exports.show = function(req, res) {
  Asistencia.findById(req.params.id, function (err, asistencia) {
    if(err) { return handleError(res, err); }
    if(!asistencia) { return res.send(404); }
    return res.json(asistencia);
  });
};

// Creates a new asistencia in the DB.
exports.create = function(req, res) {
  Asistencia.create(req.body, function(err, asistencia) {
    if(err) { return handleError(res, err); }
    return res.json(201, asistencia);
  });
};

// Updates an existing asistencia in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Asistencia.findById(req.params.id, function (err, asistencia) {
    if (err) { return handleError(res, err); }
    if(!asistencia) { return res.send(404); }
    var updated = _.merge(asistencia, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, asistencia);
    });
  });
};

// Deletes a asistencia from the DB.
exports.destroy = function(req, res) {
  Asistencia.findById(req.params.id, function (err, asistencia) {
    if(err) { return handleError(res, err); }
    if(!asistencia) { return res.send(404); }
    asistencia.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}