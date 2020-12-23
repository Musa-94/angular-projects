const path = require('path');
const express = require('express');

class App {
  constructor(mySQL) {
    this._mySQL = mySQL;

    this._app = express();
    this._app.use(express.json());
    this._app.use(express.static(path.resolve(__dirname, '../dist')));

    this._app.get('/getusers', this.onGetAllUsers);

    this._app.put('/edituser', this.onEditUser);

    this._app.post('/adduser', this.onAddUser);

    this._app.delete('/deleteuser', this.onDeleteUser);

    this._db = null;
    this.init();
  }

  init = () => {
    this._db = this._mySQL.onConnection();
    this._db.connect(err => {
      if(err) {
        console.log('Error CONNECTED', err);
      } else {
        console.log('MYSQL CONNECTED');
      }
    });
  }

  onGetAllUsers = (req, res) => {
    this._db.query('select * from users', (err, users, fields) => {
      if(err) {
        console.log('Error 500', err)
      } else {
        res.send(users);
      }
    })
  }

  onAddUser = (req, res) => {
    const {
      id,
      age,
      last_name,
      first_name,
    } = req.body;

    this._db.query(`INSERT INTO users VALUES ("${first_name}", "${last_name}", "${age}", "${id}")`,
      (err, result) => {
        if(err) {
          console.log('ERROR DB', err)
        } else {
          res.send({ insert: 'success' });
        }
      }
    )
  }

  onDeleteUser = (req, res) => {
    const { id } = req.body;

    this._db.query(`DELETE FROM users WHERE id = ${id}`,
      (err, result) => {
        if(err) {
          console.log('ERROR DB', err)
        } else {
          res.send({ insert: 'delete success' });
        }
      }
    )
  }

  onEditUser = (req, res) => {
    const {
      id,
      first_name,
    } = req.body;

    this._db.query(`UPDATE users SET first_name = '${first_name}' WHERE id = ${id}`,
      (err, result) => {
        if(err) {
          console.log('ERROR DB', err)
        } else {
          res.send({ insert: 'update success' });
        }
      }
    )
  }

  getApp = () => this._app;
}

module.exports = App;
