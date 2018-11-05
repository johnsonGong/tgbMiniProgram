// page/common/identifyCard/identifyCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    card: {
      zm: "../../assets/icons/idcard-zm.png",
      fm: "../../assets/icons/idcard-fm.png"
    },
    flg: "zm"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("识别身份证--onLoad!")
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
    console.group("识别身份证--onShow!")
    var tmpImg = wx.getStorageSync("imgCamera")
    console.log("tmpImg:" + tmpImg)
    console.log("flg:" + this.data.flg)
    console.groupEnd();

    var tmpCard = this.data.card
    if (tmpImg !== "") {
      tmpCard[this.data.flg] = tmpImg
      this.setData({
        card: tmpCard
      })
    }
    
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
   * 按钮: 确定。
   * 
   */
  bindCommit: function () {
    wx.showToast({
      title: '身份证识别成功!',
      mask: true,
      duration: 2000
    });
    setTimeout(function () {
      wx.navigateTo({
        url: '../identifyFace/identifyFace',
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
  bindTakePhoto: function (event) {
    var tmpType = event.target.dataset.type;
    console.log("bindTakePhoto-->tmpType:" + tmpType)
    this.setData({
      flg: tmpType
    })
    wx.navigateTo({
      url: '../camera/camera?page=card',
    })
  }
})