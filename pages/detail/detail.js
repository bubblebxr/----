let shoucang=false
let dianzan=false
let ID=""
let city={}

Page({
  // 调取云数据库务必要修改权限！！！
  data:{
    detail:"",
    imgUrl:"https://6278-bxr-9gc8orxf1bdb5402-1320348595.tcb.qcloud.la/unsave.png",
    dianUrl:"https://6278-bxr-9gc8orxf1bdb5402-1320348595.tcb.qcloud.la/unlike.png",
    pinglun:[],
    content:""
  },
  // 加载详情页
  onLoad(options){
    ID=options.id
    // console.log("options=",options)
    // console.log("详情接受的id",ID)
    if(wx.getStorageSync('user')==""){
      //
    }else if(ID=="0375964d64eaf96002adcd600a70e732"){
      city=wx.getStorageSync('anhui')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="97c427db64eafdd702a9c8d76924504a"){
      city=wx.getStorageSync('aomen')
      console.log("anmen")
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="f5b547c464eafde902ad470a42e6e944"){
      city=wx.getStorageSync('beijing')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="43e67d8d64ec777a0003fb474eca2fd8"){
      city=wx.getStorageSync('chongqing')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="9ffab92d64ec77e50005daad6d012fce"){
      city=wx.getStorageSync('fujian')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="9ffab92d64ec781e0005dfb301ff7058"){
      city=wx.getStorageSync('gansu')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="9ffab92d64ec78880005ead11debeee8"){
      city=wx.getStorageSync('guangdong')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="aefa8b0064ec789e0004f92273d75c1f"){
      city=wx.getStorageSync('guangxi')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="9ffab92d64ec78b40005f0842c743de1"){
      city=wx.getStorageSync('guizhou')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="aefa8b0064ec78ca0004fbb501692d28"){
      city=wx.getStorageSync('hainan')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="413fd65864ec7a0800066a4e1865548e"){
      city=wx.getStorageSync('hebei')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="43e67d8d64ec7a3000045b06273f2dcd"){
      city=wx.getStorageSync('henan')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="e8d27cb364ec7a5800060bd870bc3d06"){
      city=wx.getStorageSync('heilongjiang')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="1c8c691964ec7a6c0005d3712dfc17c2"){
      city=wx.getStorageSync('hubei')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="9a50441564ec7a83000449620ff6df1a"){
      city=wx.getStorageSync('hunan')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="1c8c691964ec7a970005d66436845daf"){
      city=wx.getStorageSync('jilin')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="43e67d8d64ec7b0000047378273bad6c"){
      city=wx.getStorageSync('jiangsu')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="6cc20b0164ec7b1400064d4b635aa04c"){
      city=wx.getStorageSync('jiangxi')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="43e67d8d64ec7b2c00047846270dc305"){
      city=wx.getStorageSync('liaoning')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="aefa8b0064ec7b440005375d15e14e5b"){
      city=wx.getStorageSync('neimenggu')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="1c8c691964ec7b5c0005e7be1486ede8"){
      city=wx.getStorageSync('ningxia')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="9ffab92d64ec7be500064bac0a453a07"){
      city=wx.getStorageSync('qinghai')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f6"){
      city=wx.getStorageSync('shandong')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f1"){
      city=wx.getStorageSync('shanxi')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f2"){
      city=wx.getStorageSync('shanxi3')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f3"){
      city=wx.getStorageSync('shanghai')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f4"){
      city=wx.getStorageSync('sichuan')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f5"){
      city=wx.getStorageSync('taiwan')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f7"){
      city=wx.getStorageSync('tianjin')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f8"){
      city=wx.getStorageSync('xizang')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f9"){
      city=wx.getStorageSync('xianggang')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f0"){
      city=wx.getStorageSync('xinjiang')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c010"){
      city=wx.getStorageSync('yunnan')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c011"){
      city=wx.getStorageSync('zhejiang')
      shoucang=city.shoucang
      dianzan=city.dianzan
    }
    wx.cloud.database().collection("citylist").doc(options.id).get()
    .then(res=>{
      console.log("详情页成功",res)
      // console.log("shoucang=",shoucang)
      // console.log("dianzan=",dianzan)
      this.setData({
        detail:res.data,
        imgUrl:shoucang?"https://6278-bxr-9gc8orxf1bdb5402-1320348595.tcb.qcloud.la/save.png":"https://6278-bxr-9gc8orxf1bdb5402-1320348595.tcb.qcloud.la/unsave.png",
        dianUrl:dianzan?"https://6278-bxr-9gc8orxf1bdb5402-1320348595.tcb.qcloud.la/like.png":"https://6278-bxr-9gc8orxf1bdb5402-1320348595.tcb.qcloud.la/unlike.png",
        pinglun:res.data.pinglun
      })
    })
    .catch(res=>{
      console.log("详情页失败",res)
    })
  },
  // 点击收藏图标
  clickMe(){
    let user = wx.getStorageSync('user')
    if(user==""){
      wx.showToast({
        icon:"none",
        title:"请您先登录~",
      })
      return
    }
    this.setData({
      imgUrl:shoucang?"https://6278-bxr-9gc8orxf1bdb5402-1320348595.tcb.qcloud.la/unsave.png":"https://6278-bxr-9gc8orxf1bdb5402-1320348595.tcb.qcloud.la/save.png"
    })
    shoucang=!shoucang
    city.shoucang=!city.shoucang
    if(ID=="0375964d64eaf96002adcd600a70e732"){
      wx.setStorageSync('anhui',city)
    }else if(ID=="97c427db64eafdd702a9c8d76924504a"){
      wx.setStorageSync('aomen',city)
    }else if(ID=="f5b547c464eafde902ad470a42e6e944"){
      wx.setStorageSync('beijing',city)
    }else if(ID=="43e67d8d64ec777a0003fb474eca2fd8"){
      wx.setStorageSync('chongqing',city)
    }else if(ID=="9ffab92d64ec77e50005daad6d012fce"){
     wx.setStorageSync('fujian',city)
    }else if(ID=="9ffab92d64ec781e0005dfb301ff7058"){
      wx.setStorageSync('gansu',city)
    }else if(ID=="9ffab92d64ec78880005ead11debeee8"){
      wx.setStorageSync('guangdong',city)
    }else if(ID=="aefa8b0064ec789e0004f92273d75c1f"){
      wx.setStorageSync('guangxi',city)
    }else if(ID=="9ffab92d64ec78b40005f0842c743de1"){
      wx.setStorageSync('guizhou',city)
    }else if(ID=="aefa8b0064ec78ca0004fbb501692d28"){
      wx.setStorageSync('hainan',city)
    }else if(ID=="413fd65864ec7a0800066a4e1865548e"){
      wx.setStorageSync('hebei',city)
    }else if(ID=="43e67d8d64ec7a3000045b06273f2dcd"){
      wx.setStorageSync('henan',city)
    }else if(ID=="e8d27cb364ec7a5800060bd870bc3d06"){
      wx.setStorageSync('heilongjiang',city)
    }else if(ID=="1c8c691964ec7a6c0005d3712dfc17c2"){
      wx.setStorageSync('hubei',city)
    }else if(ID=="9a50441564ec7a83000449620ff6df1a"){
      wx.setStorageSync('hunan',city)
    }else if(ID=="1c8c691964ec7a970005d66436845daf"){
      wx.setStorageSync('jilin',city)
    }else if(ID=="43e67d8d64ec7b0000047378273bad6c"){
      wx.setStorageSync('jiangsu',city)
    }else if(ID=="6cc20b0164ec7b1400064d4b635aa04c"){
      wx.setStorageSync('jiangxi',city)
    }else if(ID=="43e67d8d64ec7b2c00047846270dc305"){
      wx.setStorageSync('liaoning',city)
    }else if(ID=="aefa8b0064ec7b440005375d15e14e5b"){
      wx.setStorageSync('neimenggu',city)
    }else if(ID=="1c8c691964ec7b5c0005e7be1486ede8"){
      wx.setStorageSync('ningxia',city)
    }else if(ID=="9ffab92d64ec7be500064bac0a453a07"){
      wx.setStorageSync('qinghai',city)
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f6"){
      wx.setStorageSync('shandong',city)
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f1"){
      wx.setStorageSync('shanxi',city)
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f2"){
      wx.setStorageSync('shanxi3',city)
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f3"){
      wx.setStorageSync('shanghai',city)
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f4"){
      wx.setStorageSync('sichuan',city)
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f5"){
      wx.setStorageSync('taiwan',city)
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f7"){
      wx.setStorageSync('tianjin',city)
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f8"){
      wx.setStorageSync('xizang',city)
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f9"){
      wx.setStorageSync('xianggang',city)
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c0f0"){
      wx.setStorageSync('xinjiang',city)
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c010"){
      wx.setStorageSync('yunnan',city)
    }else if(ID=="43e67d8d64ec7bf600048c6f2423c011"){
      wx.setStorageSync('zhejiang',city)
    }
  },
  //获取用户评论
  getContent(eve){
    this.setData({
      content:eve.detail.value
    })
    console.log("获取评论成功",eve.detail.value)
  },
  // 发表评论
  submitCom(){
    let content=this.data.content
    if(content.length<3){
      wx.showToast({
        icon:"none",
        title:"评论不能少于3个文字哦~",
      })
      return
    }
    let pinglunItem={}
    let name=""
    let avatarUrl=""
    let user = wx.getStorageSync('user')
    if(user==""){
      name="匿名用户"
      avatarUrl="https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0"
    }else{
      name=user.nickName
      avatarUrl=user.avatarUrl
    }
    pinglunItem.name=name
    console.log("name=",name)
    pinglunItem.content=content
    pinglunItem.avatarUrl=avatarUrl
    let pinglun1=this.data.pinglun
    pinglun1.push(pinglunItem)
    console.log("添加后的评论数组",pinglun1)
    // 发表提示信息
    wx.showLoading({
      title:"正在发表中....",
    })
    wx.cloud.callFunction({
      name:"caozuo",
      data:{
        action:"fabiao",
        pinglun:pinglun1,
        id:ID,
      }
    }).then(res=>{
      console.log("发表成功",res)
      this.setData({
        pinglun:pinglun1,
        content:""
      })
      // 隐藏提示信息
      wx.hideLoading()
    }).catch(res=>{
      console.log("发表失败",res)
      wx.hideLoading()
    })
  },
})