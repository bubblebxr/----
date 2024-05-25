Page({
  data:{
    enlighten:[],
    unlog:true,
    imgUrl:"",
  },
  onLoad(){
    let user = wx.getStorageSync('user')
    if(user!=null){
      this.setData({
        unlog:false
      })
    }else{
      this.setData({
        unlog:true
      })
    }
    console.log("unlog=",this.data.unlog)
    let lit = wx.getStorageSync('enlighten')
    this.setData({
      enlighten:lit,
    }),
    console.log("enlighten=",this.data.enlighten)
  },
  creatImg:function(e){
    console.log("item=",e)
  }
})