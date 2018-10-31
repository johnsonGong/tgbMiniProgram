// pages/taxELoan/home/home.js

/**
 * 税e贷首页.
 * 【业务逻辑】
 * 1.用户授权微信小程序后进入首页；
 * 2.判断此微信用户(appid)是否已注册 营销平台，并根据注册情况展示不同的用户信息。
 * 3.点击'马上申请'，
 *    已注册: 正常进入业务流程（贷款七步）；
 *    未注册: 进入注册页面.
 * 
 * @author gonglong-[20181025:1830-xxx]
 */
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bankUserInfo: {
      phone: '13012341234',
      isRegist: false
    },
    adList: ["/image/bg-apply.png"],
    products: [{
        name: '税e贷',
        id: 'tax_110',
        // 综合授信额度(General credit limit), 单位：万(RMB)
        limit: '30',
        // time term, 还款期限
        timeTerm: '1'
      },
      {
        name: '税X贷',
        id: 'tax_120',
        limit: '10',
        timeTerm: '3'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var route = this.route
    console.log('当前页面路径-route:' + route)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    var infoData = wx.getStorageSync('userInfo')
    console.log('infoData:' + JSON.stringify(infoData))
    this.setData({
      wxUserInfo: infoData
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(obj) {
    console.log("转发分享, webViewUrl:" + obj.webViewUrl)
    console.log("this.route:" + this.route)
    // page/taxELoan/home/home
    var tmpObj = {
      title: "自定义-TGB",
      path: "/" + this.route + "?openid=123"
    }
    return tmpObj
  },
  /**
   * 获取用户在本系统中的信息，是否已注册. --TODO 等后台接口.
   *
   *  
   */
  getUserRegistInfo: function() {

  },
  /**
   * 马上申请.
   * 根据 "是否注册",执行不同业务逻辑.
   *  已注册: 正常进入业务流程；
   *  未注册: 进入注册页面.
   * 
   */
  bindApply: function(event) {
    var bankUserInfo = this.data.bankUserInfo
    if (bankUserInfo.isRegist) {
      // 已注册
      // 进入 '贷款七步' 之 识别身份(身份证、人脸)
    } else {
      // 未注册
      // 进入 注册页面
      wx.showToast({
        title: '您还未注册，即将跳转注册页面。',
        icon: 'none',
        mask: true,
        duration: 2500
      })
      setTimeout(
        function() {
          wx.navigateTo({
            url: '../regist/regist',
          })
        }, 2500)
    }
  }
})