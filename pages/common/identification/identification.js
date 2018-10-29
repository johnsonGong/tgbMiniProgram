// pages/common/identification/identification.js
/**
 * 识别身份(身份证、人脸)。
 * 
 * [业务逻辑]:
 * 1. 身份证: 调用接口OCR;
 *    根据身份证数据，后台判定是否为本行'持卡用户'.
 *    是：继续下一步人脸识别；
 *    否：弹框提示消息，'请到柜台办理开户'，
 *           ps: 后续增加线上预约，线上开户。
 * 2.人脸识别;
 * 
 * 代码位置: 
 * pages/common/identification/identification.js
 * 
 * @author gonglong-20181026
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stepBarInfo: {
      num: 2
    }
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
   * 开始人脸识别.
   * 
   */
  bindStartFaceIdentify: function () {
    wx.showToast({
      title: '人脸识别成功!',
      duration: 2000
    });
    setTimeout(function () {
      wx.redirectTo({
        url: '../../taxELoan/infoFill/infoFill',
      })
    }, 2000)
  }
})