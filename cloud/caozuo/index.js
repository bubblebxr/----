// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env:"bxr-9gc8orxf1bdb5402" }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  if(event.action=="shoucang"){
    return await cloud.database().collection("citylist").doc(event.id)
    .update({
      data:{
        // 将云数据库中shoucang的值改为js中收藏的值
        shoucang:event.shoucang
      }
    })
    .then(res=>{
      console.log("改变收藏状态成功",res)
      return res
    })
    .catch(res=>{
      console.log("改变收藏状态失败",res)
      return res
    })
  }else if(event.action=="fabiao"){
    return await cloud.database().collection("citylist").doc(event.id)
    .update({
      data:{
        // 将云数据库中shoucang的值改为js中收藏的值
        pinglun:event.pinglun
      }
    })
    .then(res=>{
      console.log("评论成功",res)
      return res
    })
    .catch(res=>{
      console.log("评论失败",res)
      return res
    })
  }
}