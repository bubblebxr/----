let ID=""
Page({
  data:{
    city1:""
  },
  getSearch(event){
    this.setData({
      city1:event.detail.value,
    })
    console.log("获取城市成功",this.data.city1)
    if(this.data.city1=="安徽"){
      ID="0375964d64eaf96002adcd600a70e732"
    }else if(this.data.city1=="澳门"){
      ID="97c427db64eafdd702a9c8d76924504a"
    }else if(this.data.city1=="北京"){
      ID="f5b547c464eafde902ad470a42e6e944"
    }else if(this.data.city1=="重庆"){
      ID="43e67d8d64ec777a0003fb474eca2fd8"
    }else if(this.data.city1=="福建"){
      ID="9ffab92d64ec77e50005daad6d012fce"
    }else if(this.data.city1=="甘肃"){
      ID="9ffab92d64ec781e0005dfb301ff7058"
    }else if(this.data.city1=="广东"){
      ID="9ffab92d64ec78880005ead11debeee8"
    }else if(this.data.city1=="广西"){
      ID="aefa8b0064ec789e0004f92273d75c1f"
    }else if(this.data.city1=="贵州"){
      ID="9ffab92d64ec78b40005f0842c743de1"
    }else if(this.data.city1=="海南"){
      ID="aefa8b0064ec78ca0004fbb501692d28"
    }else if(this.data.city1=="河北"){
      ID="413fd65864ec7a0800066a4e1865548e"
    }else if(this.data.city1=="河南"){
      ID="43e67d8d64ec7a3000045b06273f2dcd"
    }else if(this.data.city1=="黑龙江"){
      ID="e8d27cb364ec7a5800060bd870bc3d06"
    }else if(this.data.city1=="湖北"){
      ID="1c8c691964ec7a6c0005d3712dfc17c2"
    }else if(this.data.city1=="湖南"){
      ID="9a50441564ec7a83000449620ff6df1a"
    }else if(this.data.city1=="吉林"){
      ID="1c8c691964ec7a970005d66436845daf"
    }else if(this.data.city1=="江苏"){
      ID="43e67d8d64ec7b0000047378273bad6c"
    }else if(this.data.city1=="江西"){
      ID="6cc20b0164ec7b1400064d4b635aa04c"
    }else if(this.data.city1=="辽宁"){
      ID="43e67d8d64ec7b2c00047846270dc305"
    }else if(this.data.city1=="内蒙古"){
      ID="aefa8b0064ec7b440005375d15e14e5b"
    }else if(this.data.city1=="宁夏"){
      ID="1c8c691964ec7b5c0005e7be1486ede8"
    }else if(this.data.city1=="青海"){
      ID="9ffab92d64ec7be500064bac0a453a07"
    }else if(this.data.city1=="山东"){
      ID="43e67d8d64ec7bf600048c6f2423c0f6"
    }else if(this.data.city1=="山西"){
      ID="43e67d8d64ec7bf600048c6f2423c0f1"
    }else if(this.data.city1=="陕西"){
      ID="43e67d8d64ec7bf600048c6f2423c0f2"
    }else if(this.data.city1=="上海"){
      ID="43e67d8d64ec7bf600048c6f2423c0f3"
    }else if(this.data.city1=="四川"){
      ID="43e67d8d64ec7bf600048c6f2423c0f4"
    }else if(this.data.city1=="台湾"){
      ID="43e67d8d64ec7bf600048c6f2423c0f5"
    }else if(this.data.city1=="天津"){
      ID="43e67d8d64ec7bf600048c6f2423c0f7"
    }else if(this.data.city1=="西藏"){
      ID="43e67d8d64ec7bf600048c6f2423c0f8"
    }else if(this.data.city1=="香港"){
      ID="43e67d8d64ec7bf600048c6f2423c0f9"
    }else if(this.data.city1=="新疆"){
      ID="43e67d8d64ec7bf600048c6f2423c0f0"
    }else if(this.data.city1=="云南"){
      ID="43e67d8d64ec7bf600048c6f2423c010"
    }else if(this.data.city1=="浙江"){
      ID="43e67d8d64ec7bf600048c6f2423c011"
    }else{
      wx.showToast({
        icon:"none",
        title:"您所输入的城市查询不到，请重新输入~",
      })
    }
    if(ID!=""){
      this.setData({
        city1:"",
      })
      wx.navigateTo({
        url:"/pages/detail/detail?id="+ID,
      })
      ID=""
    }
  }
})