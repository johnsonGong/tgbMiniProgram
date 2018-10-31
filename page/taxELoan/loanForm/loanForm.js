// pages/taxELoan/loanForm/loanForm.js
/**
 * 马上放款.
 * 
 *  ps: 使用 卢丽丽 的页面.
 * 
 * @author gonglong-[2018/10/29 17:50, ]
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loanInfo: [
      { leftinfo: "授信额度", rightinfo: "200,000.00" },
      { leftinfo: "已用额度", rightinfo: "200,000.00" },
      { leftinfo: "可用额度", rightinfo: "200,000.00" },
    ],
    use: ["购物", "消费"],
    useIndex: 0,
    isAgree: false,
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
   * 确认.
   * 
   */
  bindConfirm: function () {
    wx.navigateTo({
      url: '../result/result',
    })
  },
  /**
   * 不满意额度，线下联系.
   * 
   */
  bindContactOffline: function () {
    wx.showModal({
      title: '操作提示',
      content: '[不满意额度，线下联系]--暂不明确业务逻辑！',
    })
  },
  /**
   * 想想再说.
   * 
   */
  bindThinkMore: function () {
    wx.showModal({
      title: '操作提示',
      content: '[想想再说]--暂不明确业务逻辑！',
    })
  }
})