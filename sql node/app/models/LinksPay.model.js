const LinksPay = function (LinksPay) {
  this.sid = LinksPay.sid;
};


LinksPay.walletCreated = async (sid, walletUsername, result) => {
  const sql = await require("./db.js")(sid);
  console.log(walletUsername)
  var query = `UPDATE lp72_users SET walletFlag=1 WHERE walletUsername=${walletUsername}`;

  console.log(query)

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Linkspay: ", res);
    result(null, res);
  });
};

LinksPay.getWalletFlag = async (sid, walletUsername, result) => {
  const sql = await require("./db.js")(sid);

  var query = `SELECT walletFlag From lp72_users WHERE walletUsername=${walletUsername}`;


  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Linkspay: ", res);
    result(null, res);
  });
};

LinksPay.getUserType = async (sid, walletUsername, result) => {
  const sql = await require("./db.js")(sid);

  var query = `SELECT type From lp72_users WHERE walletUsername=${walletUsername}`;



  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Linkspay: ", res);
    result(null, res);
  });
};

LinksPay.getUserName = async (sid, walletUsername, result) => {
  const sql = await require("./db.js")(sid);

  var query = `SELECT name From lp72_users WHERE walletUsername=${walletUsername}`;
  console.log("aa",query)

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Linkspay: ", res);
    result(null, res);
  });
};

LinksPay.getMerchantList = async (sid, result) => {
  const sql = await require("./db.js")(sid);

  var query = `SELECT name,mobilenumber FROM lp72_users WHERE type=1 AND walletFlag=1`;


  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Linkspay: ", res);
    result(null, res);
  });
};

LinksPay.getCustomerList = async (sid, result) => {
  const sql = await require("./db.js")(sid);

  var query = `SELECT name,mobilenumber FROM lp72_users WHERE type=2`;

  console.log("jn",query)
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Linkspay: ", res);
    result(null, res);
  });
};

LinksPay.getwalletId = async (sid, walletUsername, result) => {
  const sql = await require("./db.js")(sid);

  var query = `SELECT walletId From lp72_users WHERE walletUsername=${walletUsername}`;


  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Linkspay: ", res);
    result(null, res);
  });
};

LinksPay.getUserDetails = async (sid, walletUsername, result) => {
  const sql = await require("./db.js")(sid);

  var query = `SELECT walletId,name,mobilenumber From lp72_users WHERE walletUsername=${walletUsername}`;


  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("Linkspay: ", res);
    result(null, res);
  });
};

module.exports = LinksPay;

LinksPay.getWalletidAndName = async (sid, result) => {
  const sql = await require("./db.js")(sid);

  var query = `SELECT walletId,name From lp72_users`;

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Linkspay: ", res);
    result(null, res);
  });
};

module.exports = LinksPay;