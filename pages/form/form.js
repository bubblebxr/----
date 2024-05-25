let name=""
let grade=""
let ticket=""
let intro=""
let ID=""
let img=""
let jingdian=[]
Page({
  data:{
    city:"",
    imgUrl:"https://6278-bxr-9gc8orxf1bdb5402-1320348595.tcb.qcloud.la/uploadimg.png"
  },
  // 获取城市和ID
  bandleChange(e){
    let city1 = e.detail.value;
    this.setData({
      city:city1
    })
    if(city1=="安徽"){
      ID="0375964d64eaf96002adcd600a70e732"
    }else if(city1=="澳门"){
      ID="97c427db64eafdd702a9c8d76924504a"
    }else if(city1=="北京"){
      ID="f5b547c464eafde902ad470a42e6e944"
    }else if(city1=="重庆"){
      ID="43e67d8d64ec777a0003fb474eca2fd8"
    }else if(city1=="福建"){
      ID="9ffab92d64ec77e50005daad6d012fce"
    }else if(city1=="甘肃"){
      ID="9ffab92d64ec781e0005dfb301ff7058"
    }else if(city1=="广东"){
      ID="9ffab92d64ec78880005ead11debeee8"
    }else if(city1=="广西"){
      ID="aefa8b0064ec789e0004f92273d75c1f"
    }else if(city1=="贵州"){
      ID="9ffab92d64ec78b40005f0842c743de1"
    }else if(city1=="海南"){
      ID="aefa8b0064ec78ca0004fbb501692d28"
    }else if(city1=="河北"){
      ID="413fd65864ec7a0800066a4e1865548e"
    }else if(city1=="河南"){
      ID="43e67d8d64ec7a3000045b06273f2dcd"
    }else if(city1=="黑龙江"){
      ID="e8d27cb364ec7a5800060bd870bc3d06"
    }else if(city1=="湖北"){
      ID="1c8c691964ec7a6c0005d3712dfc17c2"
    }else if(city1=="湖南"){
      ID="9a50441564ec7a83000449620ff6df1a"
    }else if(city1=="吉林"){
      ID="1c8c691964ec7a970005d66436845daf"
    }else if(city1=="江苏"){
      ID="43e67d8d64ec7b0000047378273bad6c"
    }else if(city1=="江西"){
      ID="6cc20b0164ec7b1400064d4b635aa04c"
    }else if(city1=="辽宁"){
      ID="43e67d8d64ec7b2c00047846270dc305"
    }else if(city1=="内蒙古"){
      ID="aefa8b0064ec7b440005375d15e14e5b"
    }else if(city1=="宁夏"){
      ID="1c8c691964ec7b5c0005e7be1486ede8"
    }else if(city1=="青海"){
      ID="9ffab92d64ec7be500064bac0a453a07"
    }else if(city1=="山东"){
      ID="43e67d8d64ec7bf600048c6f2423c0f6"
    }else if(city1=="山西"){
      ID="43e67d8d64ec7bf600048c6f2423c0f1"
    }else if(city1=="陕西"){
      ID="43e67d8d64ec7bf600048c6f2423c0f2"
    }else if(city1=="上海"){
      ID="43e67d8d64ec7bf600048c6f2423c0f3"
    }else if(city1=="四川"){
      ID="43e67d8d64ec7bf600048c6f2423c0f4"
    }else if(city1=="台湾"){
      ID="43e67d8d64ec7bf600048c6f2423c0f5"
    }else if(city1=="天津"){
      ID="43e67d8d64ec7bf600048c6f2423c0f7"
    }else if(city1=="西藏"){
      ID="43e67d8d64ec7bf600048c6f2423c0f8"
    }else if(city1=="香港"){
      ID="43e67d8d64ec7bf600048c6f2423c0f9"
    }else if(city1=="新疆"){
      ID="43e67d8d64ec7bf600048c6f2423c0f0"
    }else if(city1=="云南"){
      ID="43e67d8d64ec7bf600048c6f2423c010"
    }else if(city1=="浙江"){
      ID="43e67d8d64ec7bf600048c6f2423c011"
    }
    console.log("ID=",ID)
    wx.cloud.callFunction({
      name:"submitForm",
      data:{
        action:"jingdian",
        id:ID,
      },
      success(res){
        jingdian=res.result.data[0].jingdian
        console.log("获取景点成功",jingdian)
        
      },
      fail(res){
        console.log("获取景点失败",res)
      }
    })
  },
  // 获取景区名称
  getName(event){
    console.log("获取景区名称成功",event.detail.value)
    name=event.detail.value
  },
  // 获取景区等级
  getGrade(event){
    console.log("获取景区等级成功",event.detail.value)
    grade=event.detail.value
  },
  // 获取景区门票
  getTicket(event){
    console.log("获取门票价格成功",event.detail.value)
    ticket=event.detail.value
  },
  // 获取景区简介
  getIntro(event){
    console.log("获取简要介绍成功",event.detail.value)
    intro=event.detail.value
  },
  //选择照片
  upload(){
    let that=this;
    wx.chooseImage({
      count:1,
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success(res){
        console.log("选择成功",res)
        // const tempFilePaths=res.tempFilePaths
        that.uploadImg(res.tempFilePaths[0]);
      }
    })
  },
  // 上传照片到云数据库
  uploadImg(fileUrl){
    wx.cloud.uploadFile({
      //上传至云端的路径,如果只显示第一张就每次换名字
      cloudPath:new Date().getTime()+'.png',
      //小程序临时文件路径
      filePath:fileUrl,
      success:res=>{
        img=res.fileID
        console.log("上传成功",img)
        this.setData({
          imgUrl:res.fileID
        })
      },
      fail:console.error
    })
  },
  // 提交表单
  submit(){
    let jingdianItem={}
    jingdianItem.name=name
    jingdianItem.star=grade
    jingdianItem.ticket=ticket
    jingdianItem.img=img
    jingdianItem.intro=intro
    jingdian.push(jingdianItem)
    console.log("添加后的景点",jingdian)
    wx.showLoading({
      title:"正在上传中....",
    })
    wx.cloud.callFunction({
      name:"submitForm",
      data:{
        action:"upload",
        id:ID,
        jingdian:jingdian,
      },
    })
    .then(res=>{
      console.log("景点上传成功",res)
      wx.hideLoading()
      wx.navigateTo({
        url:"/pages/detail/detail?id="+ID,
      })
    })
    .catch(res=>{
      console.log("景点上传失败",res)
      wx.hideLoading()
    })
  }
})