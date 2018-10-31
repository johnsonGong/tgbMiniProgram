/**
 * 个人中心。
 * 
 * 【业务】
 * 1. 展示 三峡贝；
 * 2. 兑奖?
 * 
 * @author gonglong-[2018/10/30 14:00, 2018/10/30 16:40 ]
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
    bankUserInfo: {
      phone: '13012341234',
      isRegist: false
    },
    qrCode: '../../assets/icons/qr-code.jpg',
    adList: ['/image/99_ad.png']
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

  }
})