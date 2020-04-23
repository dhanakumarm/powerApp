const path = require("path");
process.env["NODE_CONFIG_DIR"] = path.join(__dirname,"Api","config") ;
//process.env.PROD_SERVER = '127';
const config = require("config");
const morgan = require("morgan");
const express = require("express");

const users = require("./Api/routes/users");
const app = express();


if (app.get('env') === "development") {
    app.use(morgan('tiny'));
    console.log("Morgan Enabled");    
}

app.use('/api/users',users);

// Middleware function example
app.use(function (req, res, next) {
    console.log("Authenticating...!");
    next();
});


app.get("/api", (req, res) => {
    res.send("Hello World...!");
    console.log("Hello World");
});

// Query string params
app.get("/api/posts/:id", (req, res) => {
    res.send(req.params.id);
});
// http://localhost:3000/api/user/4

// Query stting params with additional params
app.get("/api/user/:id", (req, res) => {
    res.send(req.query);
});
// http://localhost:3000/api/user/4?sortBy=id


const port = process.env.PORT || 3000;
app.listen(port, () => {
    //console.log(config.get("dbConfig.host"));
  console.log(`${config.get("name")} is Listening on port ${port} `);
});

