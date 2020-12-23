const App = require('./App');
const MySQL = require('./config/db_connection');
const Server = require('./Service');

function init() {
  const port = 8080 || process.env.PORT;

  const mySQL = new MySQL();
  const app = new App(mySQL);
  const server = new Server(port, app);

  server.start();
}

init();
