/**
 * 注册。
 * 微信用户注册 营销平台.
 * 【业务逻辑】
 * 1. 同意服务协议-单独页面，阅读 并电子签名；
 * 2.表单数据合法性验证;
 * 
 * 位置: pages/taxELoan/regist/regist.js
 * 
 * @author gonglong-20181026
 * 
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wxUserInfo: {
      nickName: '姓名',
      avatarUrl: '../../assets/icons/test-user.jpg'
    },
    formData: {
      phone: '',
      // 验证码
      vCode: '',
      // 同意协议.
      agreeFlg: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var infoData = wx.getStorageSync('userInfo');
    this.setData({
      wxUserInfo: infoData
    });
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
   * 确认( 提交 )注册信息。
   * 
   * @author gonglong-20181026.
   * 
   */
  bindSubmit: function () {
    wx.showToast({
      title: '注册成功!',
      duration: 2000
    });
    setTimeout(function(){
      wx.redirectTo({
        url: '../../common/identification/identification',
      })
    }, 2000)
    
  }
})