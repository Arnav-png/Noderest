const tscommon = require("../models/Incidence.model")



// add Incidence data
exports.addIncidence = (req, res) => {
  var sid = req.body.sid;
  const userid = req.body.userid;
  const staffid = req.body.staffid;
  const classdivid = req.body.classdivid;
  const fieldId = req.body.fieldId

  tscommon.addIncidence(
    sid,
    userid,
    staffid,
    classdivid,
    req.body.month,
    fieldId,
    (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Something went wrong.",
        });
      else res.send(data);
    }
  );
};
  
  // get All Incidence Data view reoprt
  exports.viewReport = (req, res) => {
    var sid = req.body.sid;
    let toDate = req.body.toDate;
    let fromDate = req.body.fromDate;
    tscommon.viewReport(
      sid, toDate, fromDate,
      (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Something went wrong.",
          });
        else res.send(data);
      }
    );
  };
  