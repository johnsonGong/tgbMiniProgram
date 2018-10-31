// pages/taxELoan/infoFill/infoFill.js
/**
 * 信息完善.
 * pages/taxELoan/infoFill/infoFill.js
 * 
 * 【业务逻辑】
 * 展示：银行内部调取用户数据;
 * 完善字段：手机验证码，职业，地址(居住地址 不一定为 户口地址);
 * 
 * @author gonglong-[2018/10/29 10:35, 2018/10/29 104:30]
 * 
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 手机号
    phone: ""
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
   * 点击[下一步], 提交信息表单. 
   * 
   */
  bindSubmitInfo: function() {
    console.log("bindSubmitInfo --> ");

    wx.showToast({
      title: '提交成功!',
      duration: 1500
    })
    setTimeout(() => {
      wx.navigateTo({
        url: '../taxCheck/taxCheck',
      })
    }, 1600)

  },
  /**
   * 表单字段: 手机号.
   * 
   * @param {Object} event
   * 
   */
  bindblurPhone: function (event) {
    var phoneNo = event.detail.value
    console.log("手机号--》" + phoneNo)
    this.setData({
      phone:  phoneNo
    })
  },
  /**
   * 检查表单合法性、完整性。
   * 
   */
  checkFormValid: function () {
    if (this.data.phone.length > 0 ) {
      // TODO 手机号码格式检查。

    } else {
      wx.showModal({
        title: '操作提示',
        content: '请输入合法数据！-- DEMO,只需输入手机号即可。',
      })
    }
  }
})