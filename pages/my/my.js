Page({
  data: {
    log:false,
    avatarUrl:"",
    nickName:"",
  },
  //每次进入页面刷新界面
  onshow(){  
    this.onLoad()
  },
  // 登录
  onShow(){
    let user = wx.getStorageSync('user')
    if(user!=""){
      this.setData({
        log:true,
        avatarUrl:user.avatarUrl,
        nickName:user.nickName,
      })
    }
  },
  // 登出
  logOut(){
    this.setData({ 
      log:false,
    })
    wx.setStorageSync('user',null)
  },
  showPop() {
    if (this.data.about === "none") {
      this.setData({
        about: "block"
      })
    } else {
      this.setData({
        about: "none"
      })
    }
  },
  onShareAppMessage:function(){
    return {
      title:"足迹地图分享",
    }
  }
})