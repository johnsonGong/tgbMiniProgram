// pages/taxELoan/home/home.js

//获取应用实例
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 微信提供的用户信息.
    wxUserInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var route = this.route
    console.log('当前页面路径-route:' + route)
    var infoData = wx.getStorageSync('userInfo')
    console.log('infoData:' + JSON.stringify(infoData))
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 获取用户在本系统中的信息，是否已注册. --TODO 等后台接口.
   *
   *  
   */
  getUserRegistInfo: function () {

  }
})