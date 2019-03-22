/*
 * @Author: mikey.wangqian 
 * @Date: 2019-03-21 15:04:22 
 * @Last Modified by: mikey.wangqian
 * @Last Modified time: 2019-03-21 19:19:42
 * @function 用户接口逻辑业务
 */
let  Mongo = require('Mongodb-curd');
let  batabaseName = "lemon";
let  collcationName="user";
module.exports = function(req,res,next){
    //console.log(111)查用户
    Mongo.find(batabaseName,collcationName,function(result){
        console.log(result)
        if(!result){
           res.send({
               code:0,
               mes:"error"
            })
        }else{
            res.send({
               code:1,
               mes:"success",
               data:result
            })
        }
    })
}
