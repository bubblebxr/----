let ID="6cc20b0164f2954800b5b4d547990f25"
Page({
  data:{
    feedlist:{},
    suggest:"",
  },
  // 展示已有反馈与建议
  onLoad(options){
    wx.cloud.callFunction({
      name:"getFeedback",
    })
    .then(res=>{
      // console.log("获取反馈成功",res.result.data)
      this.setData({
        feedlist:res.result.data[0].detail,
      })
      console.log("feedlist=",this.data.feedlist)
    })
    .catch(res=>{
      console.log("获取反馈失败",res)
    })
  },
  // 获取建议与反馈
  getFeed(eve){
    this.setData({
      suggest:eve.detail.value
    })
    console.log("获取评论成功",eve.detail.value)
  },
  // 提交反馈到数据库
  submit(){
    let suggest=this.data.suggest
    if(suggest.length<5){
      wx.showToast({
        icon:"none",
        title:"建议不能少于5个文字哦~",
      })
      return
    }
    let suggestItem={}
    suggestItem.tickle=false
    suggestItem.question=suggest
    suggestItem.solution=""
    let feedlist1=this.data.feedlist
    feedlist1.push(suggestItem)
    console.log("添加后的建议数组",feedlist1)
    wx.cloud.callFunction({
      name:"submit",
      data:{
        feedlist:feedlist1,
        id:ID,
      }
    }).then(res=>{
      console.log("发表成功",res)
      this.setData({
        feedlist:feedlist1,
        suggest:""
      })
    }).catch(res=>{
      console.log("发表失败",res)
    })
  }
})