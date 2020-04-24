const path = require("path");
process.env["NODE_CONFIG_DIR"] = path.join(__dirname,"Api","config") ;
process.env['PROD_SERVER'] = 'localhost';
process.env['JWT_SECRET'] = 'testPowertAppg';
process.env['DB_USER'] = 'root';
process.env['DB_PASSWORD'] = 'Dhana@231';
