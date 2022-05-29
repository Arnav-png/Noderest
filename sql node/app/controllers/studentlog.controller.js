const tscommon = require("../models/Studentlog.model")


// add comments to the student_data
exports.addStudentlog= (req, res) => {
    var sid = req.body.sid;
    let staffid = req.body.staffid;
    let userid =  req.body.userid;
    let FieldId = req.body.FieldId
  
   
    tscommon.addStudentlog(
      sid,
      userid,
      staffid,
      FieldId,
      (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Something went wrong..",
          });
        else res.send(data);
      }
    );
  };
  
  
  // 
  exports.getStudentlog = (req, res) => {
    var sid = req.body.sid;
    let userid = req.body.userid
   
    tscommon.getStudentlog(
      sid, userid,req.body.staff_id,
      (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Something went wrong..",
          });
        else res.send(data);
      }
    );
  };