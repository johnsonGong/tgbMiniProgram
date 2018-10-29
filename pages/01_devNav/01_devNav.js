// pages/01_devNav/01_devNav.js
/**
 * 开发-页面快速导航.
 * 
 * @author gonglong-20181025
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageList: [{
        name: 'wx开始页面',
        url: 'index/index'
      },
      {
        name: '微信授权',
        url: 'common/authorisation/authorisation'
      },
      {
        name: '营销首页',
        url: 'taxELoan/home/home'
      },
      {
        name: '注册',
        url: 'taxELoan/regist/regist'
      },
      {
        name: '身份识别(证件+人脸)',
        url: 'common/identification/identification'
      },
      {
        name: '信息完善',
        url: 'taxELoan/infoFill/infoFill'
      },
      {
        name: '个税核实',
        url: 'taxELoan/taxCheck/taxCheck'
      },
      {
        name: '额度测算',
        url: 'taxELoan/caculate/caculate'
      },
      {
        name: '马上放款',
        url: 'taxELoan/loanForm/loanForm'
      },
      {
        name: '结束办理',
        url: 'taxELoan/result/result'
      },
      {
        name: '个人中心',
        url: ''
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 导航指定页面.
   * 
   * @param {String} pageUrl 页面地址.
   * 
   */
  bindNavPageTo: function(event) {
    // console.log('navPageTo --> 页面切换，pageUrl：' )
    var pageUrl = event.target.dataset.pageurl
    if (pageUrl === '') {
      // wx.hideToast()
      wx.showToast({
        title: '还未完成!',
        icon: 'loading',
        duration: 3000
      })
    } else {
      pageUrl = '../' + pageUrl
      console.log('navPageTo --> 页面切换，pageUrl：' + pageUrl)
      wx.navigateTo({
        url: pageUrl
      })
    }

  },
  cancelAuth: function () {
    //取消授权
  
    wx.openSetting({
      success(res) {
        console.log('cancelAuth -->success')
      },
      fail(res) {
        console.log('cancelAuth -->fail')
      }
    })
  }
})