/**
 * 开发-页面快速导航.
 * pages/01_devNav/01_devNav.js
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
        back: "common/identification/identification",
        name: '身份识别(证件+人脸)-废弃',
        url: ''
      },
      {
        name: '信息完善-TODO',
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
        url: 'common/personalCenter/personalCenter'
      },
      {
        name: '识别-身份证(新版)',
        url: 'common/identifyCard/identifyCard'
      },
      {
        name: '识别-人脸(新版)',
        url: 'common/identifyFace/identifyFace'
      },
      {
        name: '拍照',
        url: 'common/camera/camera'
      },
      {
        name: '二维码',
        url: 'common/qrCode/qrCode'
      },
      {
        name: '重构样式,ing',
        url: 'common/demoLayout/demoLayout'
      },
      {
        name: '产品介绍',
        url: ''
      },
      {
        name: '常见问题',
        url: ''
      },
      {
        name: '密码键盘',
        url: ''
      },
      {
        name: '查看协议-组件',
        url: ''
      },
      {
        name: '倒计时-工具',
        url: ''
      },
      {
        name: '退出页面-未通过审核等',
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
      var dataIdx = event.target.dataset.idx
      // pageUrl = '../' + pageUrl
      console.log('navPageTo --> 页面切换，pageUrl：' + pageUrl)
      if (dataIdx === 10 || dataIdx === 2) {
        // "/page/common/personalCenter/personalCenter"
        wx.switchTab({
          url: "/page/" + pageUrl,
        })
      } else {
        wx.navigateTo({
          url: "../" + pageUrl
        })
      }
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