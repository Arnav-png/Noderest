
// constructor
const tscommon = function (tscommon) {
  this.sid = tscommon.sid;
};

// Insert values into studentlog_data
tscommon.addStudentlog = async (sid, userid, staffid, FieldId, result) => {
  const sql = await require("./db.js")(sid);
  let query1 = `INSERT INTO k6kb9_pri_studentlog_data (userid,staff_id,fieldid,value) VALUES`;

  console.log(FieldId);
  let vals = "";
  Object.keys(FieldId).forEach(function (key) {
    vals += `(${userid},${staffid},${key},'${FieldId[key]}'),`;
  });

  vals = vals.replace(/,\s*$/, "");
  let query = query1.concat(" ", vals);
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

// get student_log data
tscommon.getStudentlog = async (sid, userid, staff_id, result) => {
  const sql = await require("./db.js")(sid);

   let query = `SELECT a.userid,a.fieldid,a.staff_id,a.createdDate,c.fname,b.field_name,a.value,d.first_name,d.last_name FROM k6kb9_pri_studentlog_data
    as a JOIN k6kb9_pri_studentlog_fields as b ON b.id = a.fieldid JOIN k6kb9_pri_students_static_info as c ON c.user_id = a.userid 
    JOIN k6kb9_pri_staff_details as d ON d.staff_id = a.staff_id WHERE a.staff_id = ${staff_id} AND a.userid = ${userid}`;

  //  let query = `SELECT a.userid,GROUP_CONCAT( a.fieldid separator ',') as fields,a.staff_id,a.createdDate,c.fname,GROUP_CONCAT( b.field_name separator ',') as fields_name,GROUP_CONCAT( a.value separator ',') as field_value ,d.first_name,d.last_name FROM k6kb9_pri_studentlog_data as a JOIN k6kb9_pri_studentlog_fields as b ON b.id = a.fieldid JOIN k6kb9_pri_students_static_info as c ON c.user_id = a.userid JOIN k6kb9_pri_staff_details as d ON d.staff_id = a.staff_id WHERE a.staff_id = ${staff_id} AND a.userid = ${userid} GROUP BY a.userid `;

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

module.exports = tscommon;



