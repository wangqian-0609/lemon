
var express = require('express');
var router = express.Router();
var classApi = require("./classifyApi")//抛出后引入
/*查看自定义分类*/
router.get('/api/getCustom',classApi.custom);
/*添加分类*/
router.post('/api/addCustom',classApi.addCustom);
/*查找分类接口 */
router.get('/api/getClassify',classApi.getClassify);
module.exports = router;
