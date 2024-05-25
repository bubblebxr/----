// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env:"bxr-9gc8orxf1bdb5402" }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  return cloud.database().collection("feedback").get()
  .then(res=>{
    console.log("获取景点成功",res)
    return res
  })
  .catch(res=>{
    console.log("获取景点失败",res)
    return
  })
}