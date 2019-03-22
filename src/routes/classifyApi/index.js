/*
 * @Author: mikey.wangqian 
 * @Date: 2019-03-21 16:14:01 
 * @Last Modified by: mikey.wangqian
 * @Last Modified time: 2019-03-21 20:50:32
 * @function [分类的业务逻辑]
 */
let mongo = require("mongodb-curd");
let  batabaseName = "lemon";
module.exports = {
    //查看自定义
    custom:function(req,res,next){
        mongo.find(batabaseName,"custom",function(result){
              if(!result){
                  res.send({code:0,msg:"error"})
              }else{
                  res.send({code:1,data:result})
              }
        })
    },
    //添加自定义分类
    addCustom:function(req,res,next){
        //获取前台数据
        let {icon,title,type,common} = req.body;
        if(!icon||!title||!type||!common){
            res.send({code:2,msg:"参数不完整"})
        }
        mongo.insert(batabaseName,"classify",req.body,function(result){
            if(!result){
                res.send({code:0,msg:"error"})
            }else{
                res.send({code:1,data:result})
            }
              
        })
    },
    //查找分类   
    getClassify:function(req,res,next){
       let {common,type} = req.query
        mongo.find(batabaseName,"classify",{
            "common":{$in:["y",common]},
            "type":type
        },function(result){
              if(!result){
                  res.send({code:0,msg:"error"})
              }else{
                  res.send({code:1,data:result})
              }
        })
    },
}