/**
 * 个税核实.
 * 
 * [位置]
 * pages/taxELoan/taxCheck/taxCheck.js
 * 
 * @author gonglong-[2018/10/29 14:40, 2018/10/29 16:40]
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 短信 授权码 -- Authorisation.
    authorisationCode: "",
    // 个税信息.
    taxInfo: null
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
   * 获取授权码--发送短信. TODO-倒计时。
   * 
   */
  bindSendCode: function() {
    wx.showLoading({
      title: '加载中',
      mask: true
    })

    setTimeout(() => {
      wx.hideLoading();
      // 重置授权码
      this.setData({
        authorisationCode: ""
      })
      wx.showToast({
        title: '发送成功!',
        icon: "success",
        mask: true
      })
    }, 1000)
  },
  /**
   *  监听输入: 授权码.
   * 
   */
  bindAuthorisationCode: function(event) {
    var tmpVal = event.detail.value
    console.log("授权码:" + tmpVal)
    this.setData({
      authorisationCode: tmpVal
    })
  },
  /**
   * 按钮: 验证。
   * 
   * 获取个人缴税记录.
   * 
   */
  bindGetTaxInfo: function() {
    if (this.data.authorisationCode.length > 0) {
      wx.showLoading({
        title: '验证中',
      });
      setTimeout(() => {
        wx.hideLoading();
        this.setData({
          taxInfo: {
            list: []
          }
        })
      }, 1000)
    } else {
      wx.showToast({
        title: '请输入授权码',
        icon: 'none',
        mask: true,
        duration: 1500
      })
    }

  },
  /**
   * 按钮:确认无误.
   * 
   */
  bindConfirmBtn: function() {
    wx.showLoading({
      mask: true,
      title: '加载中...',
    })
    setTimeout(() => {
      wx.hideLoading();

      wx.navigateTo({
        url: '../caculate/caculate',
      })
    }, 1000)

  },
  /**
   * 信息有误.
   * 
   */
  bindInfoErrorBtn: function() {
    wx.hideLoading();
  }
})