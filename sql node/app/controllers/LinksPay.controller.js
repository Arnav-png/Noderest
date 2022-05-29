const LinksPay = require("../models/LinksPay.model.js");


exports.walletCreated = (req, res) => {

  var walletUsername = req.body.walletUsername;
  LinksPay.walletCreated(req.body.sid, walletUsername, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

exports.getWalletFlag = (req, res) => {

  var walletUsername = req.body.walletUsername;

  LinksPay.getWalletFlag(req.body.sid, walletUsername, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

exports.getUserType = (req, res) => {

  var walletUsername = req.body.walletUsername;

  LinksPay.getUserType(req.body.sid, walletUsername, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

exports.getUserName = (req, res) => {

  var walletUsername = req.body.walletUsername;

  LinksPay.getUserName(req.body.sid, walletUsername, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

exports.getMerchantList = (req, res) => {

  LinksPay.getMerchantList(req.body.sid, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};
exports.getCustomerList = (req, res) => {

  LinksPay.getCustomerList(req.body.sid, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

exports.getwalletId = (req, res) => {
  var walletUsername = req.body.walletUsername;

  LinksPay.getwalletId(req.body.sid,walletUsername, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};


exports.getUserDetails = (req, res) => {
  var walletUsername = req.body.walletUsername;

  LinksPay.getUserDetails(req.body.sid,walletUsername, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

exports.getWalletidAndName = (req, res) => {
  
  LinksPay.getWalletidAndName(req.body.sid, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};
