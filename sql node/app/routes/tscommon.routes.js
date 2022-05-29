// const path = require("path");

module.exports = (app) => {
  const tscommon = require("../controllers/tscommon.controller.js");
  const LinksPay = require("../controllers/LinksPay.controller.js")
  const { addIncidence, viewReport} = require("../controllers/Incidence.controller.js");
  const { addStudentlog, getStudentlog } = require("../controllers/studentlog.controller.js");

  var router = require("express").Router();

  // upload file
  // const multer = require('multer')

  // const storage = multer.diskStorage({
  //   destination: "./src/image/",
  //   filename: (req, file, cb) =>{
  //     return cb(null, `${file.fieldname} ${Date.now()}${path.extname(file.originalname)}`)
  //   }
  // })

  // const upload = multer({
  //   storage: storage
  // })


  // Get list of academic years
  router.post("/getacadyear", tscommon.getacadyear);
  router.post('/registerUser', tscommon.registerUser)
  router.post("/getstudentdetails", tscommon.getstudentdetails);
  router.post("/getalldiv", tscommon.getalldiv);
  router.post("/getallclass", tscommon.getallclass);
  router.post("/addIncidence",addIncidence);
  router.post("/viewreport", viewReport);
  router.post("/addStudentlog", addStudentlog)
  router.post("/getStudentlog", getStudentlog);
  app.use("/api/tscommon", router);
};
