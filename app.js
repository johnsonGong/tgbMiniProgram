//app.js
App({
  onLaunch: function (obj) {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    this.getUserAuthSetting()
  },
  /**
   * 小程序启动，或从后台进入前台显示时.
   */
  onShow: function (obj) {
    console.log('onShow:' + JSON.stringify(obj))
    // 用以获取 query, 后续设定营销关系。
    this.query = obj.query;
    wx.showModal({
      title: '营销关系',
      content: 'query:' + JSON.stringify(this.query),
    })
    // wx.clearStorage()
  },
  globalData: {
    userInfo: null,
    openid: null,
    query: null
  },
  /**
   * 获取用户权限设置数据，判定是否已授予指定权限: scope.userInfo;
   *
   */
  getUserAuthSetting() {
    // 获取登录凭证
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          // wx.getUserInfo({
          //   success: res => {
          //     // 可以将 res 发送给后台解码出 unionId
          //     this.globalData.userInfo = res.userInfo

          //     // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
          //     // 所以此处加入 callback 以防止这种情况
          //     if (this.userInfoReadyCallback) {
          //       this.userInfoReadyCallback(res)
          //     }
          //   }
          // })
        }
      }
    })
  },
  /**
   * 获取用户openId.(参考官方demo)
   * lazy loading openid.
   *
   */
  getUserOpenId(callback) {
    const self = this

    if (self.globalData.openid) {
      callback(null, self.globalData.openid)
    } else {
      wx.login({
        success(data) {
          wx.request({
            url: openIdUrl,
            data: {
              code: data.code
            },
            success(res) {
              console.log('拉取openid成功', res)
              self.globalData.openid = res.data.openid
              callback(null, self.globalData.openid)
            },
            fail(res) {
              console.log('拉取用户openid失败，将无法正常使用开放接口等服务', res)
              callback(res)
            }
          })
        },
        fail(err) {
          console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务', err)
          callback(err)
        }
      })
    }
  }
})
