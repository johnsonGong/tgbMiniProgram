// 
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

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 按钮:确认无误.
   * 
   */
  bindConfirmBtn: function () {
    wx.showLoading({
      mask: true,
      title: 'loading...',
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
  bindInfoErrorBtn: function () {
    wx.hideLoading();
  }
})