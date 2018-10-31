/**
 * 计算额度。
 * 
 * [位置]
 * pages/taxELoan/caculate/caculate.js
 * 
 * [业务逻辑]
 * 风控数据接口；
 * 成功：进入下一步 "马上放款"
 * 失败：提示消息，退出.
 * 
 * @author gonglong-[2018/10/29 16:40, 2018/10/29 17:00]
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
  onLoad: function(options) {
    this.getRiskManagementData()
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
    wx.hideLoading()
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
   * 调用风控接口.
   * 
   * 
   */
  getRiskManagementData: function() {
    wx.showLoading({
      title: '加载中...',
    })

    setTimeout(() => {
      wx.hideLoading();

      wx.showToast({
        title: '计算成功!',
        duration: 5500
      })

    }, 6000)

    setTimeout(() => {
      wx.navigateTo({
        url: '../loanForm/loanForm',
      })
    }, 6500)


  }
})