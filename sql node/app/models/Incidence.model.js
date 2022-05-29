
const tscommon = function (tscommon) {
  this.sid = tscommon.sid;
};

// SELECT DISTINCT a.userid,a.createdDate, GROUP_CONCAT(a.value) as "v" FROM `k6kb9_pri_studentlog_data` as a JOIN `k6kb9_pri_studentlog_fields` as b ON b.id = a.fieldid ORDER by a.userid;
// view report on Teacher Incidence Form
tscommon.viewReport = async (sid, toDate, fromDate, result) => {
  const sql = await require("./db.js")(sid);
  let query = `SELECT id.*,pif.field_name,cd.div_name,CONCAT(ssi.fname,' ',ssi.mname,' ',ssi.lname) as student_name FROM k6kb9_pri_incidence_data as id JOIN k6kb9_pri_incidence_fields as pif ON pif.id = id.fieldId JOIN
     k6kb9_pri_students_static_info as ssi ON ssi.user_id = id.userid JOIN k6kb9_pri_studentclassmappingby_acad as scm ON scm.user_id = ssi.user_id JOIN k6kb9_academic_master as ac ON ac.acadid = ssi.acad_id AND ac.is_current = 1 JOIN k6kb9_classdiv as cd ON cd.id = scm.classdiv_id WHERE DATE_FORMAT(id.month,'%Y-%m-%d') BETWEEN '${toDate}' AND '${fromDate}' ORDER BY month DESC `;

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

// Add incidence data into incidence data table
tscommon.addIncidence = async (
  sid,
  userid,
  classdivid,
  staffid,
  month,
  fieldId,
  result
) => {
  const sql = await require("./db.js")(sid);
  let query1 = `INSERT INTO k6kb9_pri_incidence_data (userid, classdiv_id, staffid, fieldId, value,month) VALUES`;

  let vals = "";
  Object.keys(userid).forEach(function (key) {
    Object.keys(fieldId).forEach(function (key1) {
      vals += `(${userid[key]},${staffid},${classdivid},${key1},'${fieldId[key1]}','${month}'),`;
    });
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

module.exports = tscommon;
