// page/common/identifyFace/identifyFace.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scanFaceImg: "/image/face.png"
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
   * 按钮: 开始.
   * 
   * [业务逻辑]
   * 1. 拍照；
   * 2. 上传至服务器;
   * 3. 人脸识别结果;
   */
  bindTakePicture: function () {
    wx.showToast({
      title: '人脸证识别成功!',
      mask: true,
      duration: 2000
    });
    setTimeout(function () {
      wx.navigateTo({
        url: '../../taxELoan/infoFill/infoFill',
      })
    }, 2000)
  },
  /**
   * 拍照.
   * 
   * [业务逻辑]
   * 调用微信接口，拍摄照片。
   * 成功: 显示本地照片, 并立即上传至公司服务器;
   * 失败: 提示消息。
   * 
   * @author gonglong-[2018/11/02 14:30, xxx]
   */
  bindTakePhoto: function () {
    console.log("bindTakePhoto-->")
    wx.navigateTo({
      url: '../camera/camera?page=face',
    })
  }
})