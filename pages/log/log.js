const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
let nickName=""
let imgUrl=""
let anhui={}
let aomen={}
let beijing={}
let chongqing={}
let fujian={}
let gansu={}
let guangdong={}
let guangxi={}
let guizhou={}
let hainan={}
let hebei={}
let henan={}
let heilongjiang={}
let hubei={}
let hunan={}
let jilin={}
let jiangsu={}
let jiangxi={}
let liaoning={}
let neimenggu={}
let ningxia={}
let qinghai={}
let shandong={}
let shanxi={}
let shanxi3={}
let shanghai={}
let sichuan={}
let taiwan={}
let tianjin={}
let xizang={}
let xianggang={}
let xinjiang={}
let yunnan={}
let zhejiang={}
Page({
  data: {
    avatarUrl: defaultAvatarUrl,
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
      avatarUrl,
    })
    imgUrl=this.data.avatarUrl
    console.log("imgUrl=",imgUrl)
  },
  getNickname(event){
    console.log("获取昵称成功",event.detail.value)
    nickName=event.detail.value
  },
  login(){
    if(wx.getStorageSync('enlighten')==""){
      anhui.shoucang=false
      anhui.dianzan=false
      wx.setStorageSync('anhui',anhui)
      aomen.shoucang=false
      aomen.dianzan=false
      wx.setStorageSync('aomen',aomen)
      beijing.shoucang=false
      beijing.dianzan=false
      wx.setStorageSync('beijing',beijing)
      chongqing.shoucang=false
      chongqing.dianzan=false
      wx.setStorageSync('chongqing',chongqing)
      fujian.shoucang=false
      fujian.dianzan=false
      wx.setStorageSync('fujian',fujian)
      gansu.shoucang=false
      gansu.dianzan=false
      wx.setStorageSync('gansu',gansu)
      guangdong.shoucang=false
      guangdong.dianzan=false
      wx.setStorageSync('guangdong',guangdong)
      guangxi.shoucang=false
      guangxi.dianzan=false
      wx.setStorageSync('guangxi',guangxi)
      guizhou.shoucang=false
      guizhou.dianzan=false
      wx.setStorageSync('guizhou',guizhou)
      hainan.shoucang=false
      hainan.dianzan=false
      wx.setStorageSync('hainan',hainan)
      hebei.shoucang=false
      hebei.dianzan=false
      wx.setStorageSync('hebei',hebei)
      henan.shoucang=false
      henan.dianzan=false
      wx.setStorageSync('henan',henan)
      heilongjiang.shoucang=false
      heilongjiang.dianzan=false
      wx.setStorageSync('heilongjiang',heilongjiang)
      hubei.shoucang=false
      hubei.dianzan=false
      wx.setStorageSync('hubei',hubei)
      hunan.shoucang=false
      hunan.dianzan=false
      wx.setStorageSync('hunan',hunan)
      jilin.shoucang=false
      jilin.dianzan=false
      wx.setStorageSync('jilin',jilin)
      jiangsu.shoucang=false
      jiangsu.dianzan=false
      wx.setStorageSync('jiangsu',jiangsu)
      jiangxi.shoucang=false
      jiangxi.dianzan=false
      wx.setStorageSync('jiangxi',jiangxi)
      liaoning.shoucang=false
      liaoning.dianzan=false
      wx.setStorageSync('liaoning',liaoning)
      neimenggu.shoucang=false
      neimenggu.dianzan=false
      wx.setStorageSync('neimenggu',neimenggu)
      ningxia.shoucang=false
      ningxia.dianzan=false
      wx.setStorageSync('ningxia',ningxia)
      qinghai.shoucang=false
      qinghai.dianzan=false
      wx.setStorageSync('qinghai',qinghai)
      shandong.shoucang=false
      shandong.dianzan=false
      wx.setStorageSync('shandong',shandong)
      shanxi.shoucang=false
      shanxi.dianzan=false
      wx.setStorageSync('shanxi',shanxi)
      shanxi3.shoucang=false
      shanxi3.dianzan=false
      wx.setStorageSync('shanxi3',shanxi3)
      shanghai.shoucang=false
      shanghai.dianzan=false
      wx.setStorageSync('shanghai',shanghai)
      sichuan.shoucang=false
      sichuan.dianzan=false
      wx.setStorageSync('sichuan',sichuan)
      taiwan.shoucang=false
      taiwan.dianzan=false
      wx.setStorageSync('taiwan',taiwan)
      tianjin.shoucang=false
      tianjin.dianzan=false
      wx.setStorageSync('tianjin',tianjin)
      xizang.shoucang=false
      xizang.dianzan=false
      wx.setStorageSync('xizang',xizang)
      xianggang.shoucang=false
      xianggang.dianzan=false
      wx.setStorageSync('xianggang',xianggang)
      xinjiang.shoucang=false
      xinjiang.dianzan=false
      wx.setStorageSync('xinjiang',xinjiang)
      yunnan.shoucang=false
      yunnan.dianzan=false
      wx.setStorageSync('yunnan',yunnan)
      zhejiang.shoucang=false
      zhejiang.dianzan=false
      wx.setStorageSync('zhejiang',zhejiang)
    }
    let user={}
    user.nickName=nickName
    user.avatarUrl=imgUrl
    console.log("user=",user)
    wx.setStorageSync("user",user)
    if(user!=''){
      wx.showToast({
        title:"登录成功",
      })
    }
    wx.switchTab({
      url:"/pages/my/my",
    })
  },
})