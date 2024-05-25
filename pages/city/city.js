Page({
  data:{
    datalist:[],
  },
  onLoad(){
    wx.cloud.callFunction({
      name:"submitForm",
      data:{
        action:"city",
      },
    })
    .then(res=>{
      this.setData({
        datalist:res.result.data
      })
      console.log("城市获取成功",res.result.data)
    })
    .catch(res=>{
      console.log("城市获取失败",res.result.data)
    })
    // wx.cloud.database().collection("citylist").get()
    // .then(res=>{
    //   console.log("获取成功",res)
    //   this.setData({
    //     datalist:res.data
    //   })
    // })
    // .catch(res=>{
    //   console.log("获取失败",res)
    // })
  },
  goDetail(event){
    console.log("点击获取的数据",event.currentTarget.dataset.id._id)
    wx.navigateTo({
      url:"/pages/detail/detail?id="+event.currentTarget.dataset.id._id,
    })
  }
})