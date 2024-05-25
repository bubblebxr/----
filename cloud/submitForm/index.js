// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env:"bxr-9gc8orxf1bdb5402" }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  if(event.action=="jingdian"){
    return cloud.database().collection("citylist").where({
      _id:event.id
    }).get()
    .then(res=>{
      console.log("获取景点成功",res)
      return res
    })
    .catch(res=>{
      console.log("获取景点失败",res)
      return
    })
  }else if(event.action=="upload"){
    return await cloud.database().collection("citylist").doc(event.id)
    .update({
      data:{
        // 将云数据库中shoucang的值改为js中收藏的值
        jingdian:event.jingdian
      }
    })
    .then(res=>{
      console.log("景点添加成功",res)
      return res
    })
    .catch(res=>{
      console.log("景点添加失败",res)
      return res
    })
  }else if(event.action=="city"){
    return cloud.database().collection("citylist").get()
    .then(res=>{
      console.log("获取景点成功",res)
      return res
    })
    .catch(res=>{
      console.log("获取景点失败",res)
      return
    })
  }
}