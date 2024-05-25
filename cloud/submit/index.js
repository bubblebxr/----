// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env:"bxr-9gc8orxf1bdb5402" }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  return await cloud.database().collection("feedback").doc(event.id)
    .update({
      data:{
        detail:event.feedlist
      }
    })
    .then(res=>{
      console.log("建议添加成功",res)
      return res
    })
    .catch(res=>{
      console.log("建议添加失败",res)
      return res
    })
}