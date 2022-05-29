const tscommon = require("../models/tscommon.model.js");


// Retrieve all Tutorials from the database (with condition).
exports.getacadyear = (req, res) => {
  var sid = req.body.sid;
  tscommon.getacadyear(req.body.sid, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    else res.send(data);
  });
};

// GET ALL STUDENT DETAILS
exports.getstudentdetails = (req, res) => {
  var sid = req.body.sid;

  tscommon.getstudentdetails(sid, req.body.division, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    else res.send(data);
  });
};

// GET ALL DIV
exports.getalldiv = (req, res) => {
  var sid = req.body.sid;

  tscommon.getalldiv(req.body.sid, req.body.class_id, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    else res.send(data);
  });
};

// GET ALL CLASS
exports.getallclass = (req, res) => {
  var sid = req.body.sid;

  tscommon.getallclass(req.body.sid, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    else res.send(data);
  });
};


exports.getstaffname = (req, res) => {
  var sid = req.body.sid;
  const staffid = req.body.staffid


  tscommon.getstaffname(sid, staffid, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    else res.send(data);
  });
};


exports.registerUser = (req, res) => {
  var sid = req.body.sid;
  var name = req.body.name;
  var contact = req.body.contact;
  var email = req.body.email;
  var password = req.body.password;
  tscommon.registerUser(req.body.sid, name, contact, email, password, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

