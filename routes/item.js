var express = require('express');
var router = express.Router();
var mysql = require('mysql')

var connection = mysql.createPool({
  host:"localhost",
  user:"root",//administrator
  password:"123456",
  database:'jgr'

})
/* GET home page. */
router.get('/list', function(req, res, next) {
  connection.query("SELECT id,name FROM baobao",function(err,rows,fields){
    res.header('Access-Control-Allow-Origin',"*")
    res.send(rows)
  })
});
router.post('/detail', function(req, res, next) {
  var abc=req.body.abc
  connection.query('SELECT * FROM baobao WHERE id='+abc,function(err,rows,feilds){
    res.header("Access-Control-Allow-Origin","*")
    res.send(rows)
  })
  
});

module.exports = router;
