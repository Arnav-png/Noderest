const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use('/static', express.static('public'));
app.use('/apidocs', express.static(__dirname + '/apidocs'));

/*var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));*/
app.use(cors({ credentials: true, origin: true }));
//app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
//app.use(cors({credentials: true, origin: 'https://marcopolo.prisms.in'}));
// app.use(cors({credentials: true}))
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, origin : true}));

// simple route

app.use(function (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: 'No credentials sent!' });
  }
  else {
    if (req.get('authorization') != '#$laksdfnlknoea#$@$%^&%$')
      return res.status(403).json({ error: 'Credentials are not correct!' });

  }
  next();
});

app.post("/", (req, res) => {
  res.json({ message: "Welcome to TS application." });
});

require("./app/routes/tscommon.routes.js")(app);
require("./app/routes/LinksPay.routes.js")(app);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
