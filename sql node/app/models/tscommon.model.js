// constructor
const tscommon = function (tscommon) {
  this.sid = tscommon.sid;
};

tscommon.getacadyear = async (sid, result) => {
  const sql = await require("./db.js")(sid);
  let query =
    "SELECT acadid,academics,is_current,sequence FROM k6kb9_academic_master";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tscommon: ", res);
    result(null, res);
  });
};


tscommon.registerUser = async (sid, name, contact, email, password, result) => {
  const sql = await require("./db.js")(sid);
  // let query = "SELECT acadid,academics,is_current,sequence FROM k6kb9_academic_master";
  var query = `INSERT INTO k6kb9_alumni_auth (name, contact, email, password) VALUES ("${name}", "${contact}", "${email}", "${password}")`;

};
// Get student Details fname, lname, avtar
tscommon.getstudentdetails = async (sid, division, result) => {
  const sql = await require("./db.js")(sid);

  let query = `SELECT ssi.user_id,ssi.fname,ssi.lname, ssi.avatar FROM k6kb9_pri_students_static_info as ssi
   JOIN k6kb9_pri_studentclassmappingby_acad as sca ON sca.user_id = ssi.user_id JOIN k6kb9_academic_master as
    am ON am.acadid = sca.acad_id AND am.is_current = 1 WHERE sca.classdiv_id = ${division} `;

  console.log(query);
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tscommon: ", res);
    result(null, res);
  });
};

// Get All Div
tscommon.getalldiv = async (sid, class_id, result) => {
  const sql = await require("./db.js")(sid);
  let query = `SELECT id ,div_name  from k6kb9_classdiv where class = ${class_id}`;

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tscommon: ", res);
    result(null, res);
  });
};

// Get All class
tscommon.getallclass = async (sid, result) => {
  const sql = await require("./db.js")(sid);
  let query = "SELECT id,class_name,acad_id,section_id FROM k6kb9_class_master";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tscommon: ", res);
    result(null, res);
  });
};



// get User name 
tscommon.getstaffname = async (sid, staffid, result) => {
  const sql = await require("./db.js")(sid);
  let query = `SELECT first_name, middle_name, last_name from k6kb9_pri_staff_details where staff_id=${staffid}`;

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tscommon: ", res);
    result(null, res);
  });
};

module.exports = tscommon;
