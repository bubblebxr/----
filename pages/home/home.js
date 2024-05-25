let detailValue=[]
let per=0
Page({
  data: {
    get:false,
    count:0,
    percent:0,
    cityList: [{
      value: '安徽',
      selected: false,
      title: '安徽'
    }, {
      value: '澳门',
      selected: false,
        title: '澳门'
    }, {
      value: '北京',
      selected: false,
        title: '北京'
    }, {
      value: '重庆',
      selected: false,
        title: '重庆'
    }, {
      value: '福建',
      selected: false,
        title: '福建'
    }, {
      value: '甘肃',
      selected: false,
        title: '甘肃'
    }, {
      value: '广东',
      selected: false,
      title: '广东'
    }, {
      value: '广西',
      selected: false,
      title: '广西'
    }, {
      value: '贵州',
      selected: false,
      title: '贵州'
    }, {
      value: '海南',
      selected: false,
      title: '海南'
    }, {
      value: '河北',
      selected: false,
      title: '河北'
    }, {
      value: '河南',
      selected: false,
      title: '河南'
    }, {
      value: '黑龙江',
      selected: false,
      title: '黑龙江'
    }, {
      value: '湖北',
      selected: false,
      title: '湖北'
    }, {
      value: '湖南',
      selected: false,
      title: '湖南'
    }, {
      value: '吉林',
      selected: false,
      title: '吉林'
    }, {
      value: '江苏',
      selected: false,
      title: '江苏'
    }, {
      value: '江西',
      selected: false,
      title: '江西'
    }, {
      value: '辽宁',
      selected: false,
      title: '辽宁'
    }, {
      value: '内蒙古',
      selected: false,
      title: '内蒙古'
    }, {
      value: '宁夏',
      selected: false,
      title: '宁夏'
    }, {
      value: '青海',
      selected: false,
      title: '青海'
    }, {
      value: '山东',
      selected: false,
      title: '山东'
    }, {
      value: '山西',
      selected: false,
      title: '山西'
    }, {
      value: '陕西',
      selected: false,
      title: '陕西'
    }, {
      value: '上海',
      selected: false,
      title: '上海'
    }, {
      value: '四川',
      selected: false,
      title: '四川'
    }, {
      value: '台湾',
      selected: false,
      title: '台湾'
    }, {
      value: '天津',
      selected: false,
      title: '天津'
    }, {
      value: '西藏',
      selected: false,
      title: '西藏'
    }, {
      value: '香港',
      selected: false,
      title: '香港'
    }, {
      value: '新疆',
      selected: false,
      title: '新疆'
    }, {
      value: '云南',
      selected: false,
      title: '云南'
    }, {
      value: '浙江',
      selected: false,
      title: '浙江'
    }]
  },
  change(e) {
    let string = "cityList[" + e.target.dataset.index + "].selected"
    this.setData({
      [string]: !this.data.cityList[e.target.dataset.index].selected
    })
    detailValue = this.data.cityList.filter(it => it.selected).map(it => it.value)
    // console.log('所有选中的值为：', detailValue)
  },
  getData(){
    let user = wx.getStorageSync('user')
    if(user==""){
      wx.showToast({
        icon:"none",
        title:"请您先登录~",
      })
      return
    }
    wx.setStorageSync('enlighten',null)
    per=0
    this.setData({
      get:true,
      count:detailValue.length,
    })
    // console.log("get=",this.data.get),
    // console.log("count=",this.data.count)
    for(let i=0;i<detailValue.length;i++){
      if(detailValue[i]=="安徽"){
        per+=1.45
      }else if(detailValue[i]=="澳门"){
        per+=0.00026
      }else if(detailValue[i]=="北京"){
        per+=0.18
      }else if(detailValue[i]=="重庆"){
        per+=0.86
      }else if(detailValue[i]=="福建"){
        per+=1.3
      }else if(detailValue[i]=="甘肃"){
        per+=4.73
      }else if(detailValue[i]=="广东"){
        per+=1.88
      }else if(detailValue[i]=="广西"){
        per+=2.47
      }else if(detailValue[i]=="贵州"){
        per+=1.83
      }else if(detailValue[i]=="海南"){
        per+=0.35
      }else if(detailValue[i]=="河北"){
        per+=1.96
      }else if(detailValue[i]=="河南"){
        per+=1.74
      }else if(detailValue[i]=="黑龙江"){
        per+=5.02
      }else if(detailValue[i]=="湖北"){
        per+=1.94
      }else if(detailValue[i]=="湖南"){
        per+=2.21
      }else if(detailValue[i]=="吉林"){
        per+=1.95
      }else if(detailValue[i]=="江苏"){
        per+=1.07
      }else if(detailValue[i]=="江西"){
        per+=1.74
      }else if(detailValue[i]=="辽宁"){
        per+=1.52
      }else if(detailValue[i]=="内蒙古"){
        per+=11.46974
      }else if(detailValue[i]=="宁夏"){
        per+=0.69
      }else if(detailValue[i]=="青海"){
        per+=7.52
      }else if(detailValue[i]=="山东"){
        per+=1.6
      }else if(detailValue[i]=="山西"){
        per+=1.63
      }else if(detailValue[i]=="陕西"){
        per+=2.14
      }else if(detailValue[i]=="上海"){
        per+=0.07
      }else if(detailValue[i]=="四川"){
        per+=5.01
      }else if(detailValue[i]=="台湾"){
        per+=0.38
      }else if(detailValue[i]=="天津"){
        per+=0.12
      }else if(detailValue[i]=="西藏"){
        per+=12.8
      }else if(detailValue[i]=="香港"){
        per+=0.01
      }else if(detailValue[i]=="新疆"){
        per+=17.3
      }else if(detailValue[i]=="云南"){
        per+=4
      }else if(detailValue[i]=="浙江"){
        per+=1.06
      }
    }
    this.setData({
      percent:per,
    })
    wx.setStorageSync('enlighten',detailValue)
  }
})