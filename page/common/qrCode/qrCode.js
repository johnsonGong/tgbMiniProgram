  /**
   * 测试 微信二维码.
   * page/common/qrCode/qrCode.js
   * 
   * @author gonglong-20181105
   */
  Page({
    /**
     * 页面的初始数据
     */
    data: {
      color: "rgb(240, 98, 146)",
      squareColor: "",
      cachToken: ""
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
      this.setCodeColor()
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
    setCodeColor: function() {
      var tmpColor = this.data.color
      var tmpSquareColor = "background-color:" + tmpColor;
      this.setData({
        squareColor: tmpSquareColor
      })
    },
    /**
     * 修改颜色.
     * 
     */
    bindChangeColor: function(event) {
      var colorVal = event.detail.value;
      console.log("bindChangeColor-->" + colorVal);
      this.setData({
        color: colorVal
      })
      this.setCodeColor()
    },
    /**
     * 获取 微信二维码.
     * 
     */
    getWXcode: function() {
      var tmpToken = wx.getStorageSync("token");
      console.log("tmpToken:" + tmpToken)
      if (tmpToken === '') {
        this.getWXToken((token) => {
          this.getWXCodeUnlimit(token)
        })
      } else {
        this.getWXCodeUnlimit(tmpToken)
      }

    },
    getWXToken(cb) {
      wx.request({
        url: "https://api.weixin.qq.com/cgi-bin/token",
        data: {
          grant_type: "client_credential",
          appid: "wxf1f645831f1bcab1",
          secret: "060276e0571058d5c87e6d4ceeffdd76"
        },
        success(res) {
          var token = res.data.access_token
          console.log("获取 token 成功!\n" + JSON.stringify(res.data))
          wx.setStorageSync("token", token)
          cb(token)
        },
        fail(errorObj) {
          console.log("获取 token 失败!")
          wx.showModal({
            title: '操作提示',
            content: errorObj.errMsg,
          })
        }
      })
    },
    /**
     * 获取小 程序码.
     * 
     * 
     */
    getWXCodeUnlimit: function(token) {
      // var token = this.getStorageSync("token")
      wx.request({
        method: "POST",
        url: "https://api.weixin.qq.com/wxa/getwxacodeunlimit",
        data: {
          access_token: token,
          scene: "sanxiatgb",
          page: "page/devNav/devNav",
          width: 200,
          auto_color: false,
          line_color: this.data.color
        },
        success(res) {
          console.log("getwxacodeunlimit-->成功!")
          wx.showModal({
            title: '操作提示',
            content: res.data.errmsg
          })
        },
        fail(res) {
          console.log("getwxacodeunlimit-->失败!")
        }
      })
    }
  })