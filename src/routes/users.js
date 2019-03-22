var express = require('express');
var router = express.Router();
var userApi = require("./userApi")//抛出后引入
/* GET users listing. */
router.get('/getUser',userApi);//不是首页，所以在postman上测试时  路径加users
module.exports = router;
