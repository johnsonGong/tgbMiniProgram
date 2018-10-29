/**
 * pages/common/authorisation/authorisation.js
 * 
 * 权限判定页面.
 * 【业务逻辑】
 * 进入小程序，首先判定是否已授权.
 * 已授权: 不等页面展示完毕，直接跳转至首页;
 * 未授权: 展示本页面内容.
 * 
 * ps: 判定过程中有loading效果
 * 
 * @author gonglong-2011025.
 */

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 授权用户操作次数(ps: 如果两次 '取消', 则退出小程序);
    times: 0,
    iconList: ['info', 'warn', 'warn'],
    // 提示文字
    txtTips: '请授权登陆重庆三峡银行小程序',
    userInfo: {},
    isApplyUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 第一个元素为首页，最后一个元素为当前页面
    // var pageList =  getCurrentPages()
    // var len = pageList.length
    // var route = pageList[len - 1].route
    // TODO- 版本兼容必要性调查( 基础库 >= 1.2.0)
    var route = this.route
    console.log('当前页面路径-route:' + route)

    this.checkUserAuth()
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  /**
   * 监测是否已授权. 
   * 
   * @author gonglong-20181025
   */
  checkUserAuth: function(userInfo) {
    console.log('userInfo -->')
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已授权; 
          // 1.获取用户信息并存入 app; 2. 跳转首页
          
          wx.getUserInfo({
            success: res=> {
              this.saveUserInfo(res.userInfo)
              this.goToHome()
            },
            fail: error => {
              // TODO--弹框显示
              console.warn('获取用户信息失败!')
            }
          })
        }else {
          // 未授权
          // 展示页面
          this.setData({
            isApplyUserInfo:true
          })
        }
        console.log('getSetting--> suc!')
      },
      fail: res => {
        console.log('getSetting--> Fail!')
      },
      complete: res => {
        wx.hideToast()
      }
    })

    wx.checkSession({
      success() {
        //session_key 未过期，并且在本生命周期一直有效
        console.log('session_key 未过期 -->')
      },
      fail() {
        // session_key 已经失效，需要重新执行登录流程
        console.log('session_key 已经失效 -->')
        // wx.login() //重新登录
      }
    })
    // 备注：为优化用户体验，使用 wx.getUserInfo 接口直接弹出授权框的开发方式将逐步不再支持。2018年4月30日开始
    // wx.getUserInfo
    // wx.authorize({
    //   scope: 'scope.userInfo',
    //   success() {
    //     // 用户已经同意小程序使用 用户信息，后续调用 wx.getUserInfo 接口不会弹窗询问
    //     console.log('授权反馈-YES!');
    //   },
    //   fail() {
    //     // 用户不同意
    //     console.log('授权反馈-NO!');
    //   }
    // })
  },
  /**
   * 申请授权.
   * 
   * @param {Object} cbObj 回调返回参数，同:wx.getUserInfo
   * 
   * @author gonglong-20181025
   */
  applyAuth: function (cbObj) {
    console.log('applyAuth-->')
    if (typeof cbObj.detail['userInfo'] !== 'undefined') {
      // 同意
      // 存入用户信息
      // app.globalData.userInfo
      app.globalData.userInfo = cbObj.detail['userInfo']
      console.log('userInfo:' + JSON.stringify(app.globalData.userInfo))
      this.saveUserInfo(cbObj.detail['userInfo'])
      this.goToHome()
    } else {
      // 拒绝
      // 计数器累计 加1
      var tmpTimes = this.data.times
      if (tmpTimes >= 1) {
        // 用户两次拒绝，退出小程序--TODO,无此接口(20181025-1730)
        var pageList =  getCurrentPages()
        wx.navigateBack({
          delta: pageList.length + 9
        })
      } else {
        // 再次挽留
        this.setData({
          times: tmpTimes + 1
        })
      }
    }
  },
  /**
   * 跳转至首页.
   * 
   */
  goToHome: function () {
    // 关闭所有页面, 打开到应用内的某个页面
    setTimeout(() => {
      wx.reLaunch({
        url: '../../taxELoan/home/home'
      })
    }, 2000)
  },
  /**
   * 保存用户信息 
   * 
   * @param {Object} infoData 用户信息
   * 
   */
  saveUserInfo: function (infoData) {
    console.log('%csaveUserInfo:' + JSON.stringify(infoData), 'background-color:yellow;')
    // TODO-- 数据的读写方式必须一致? 同步/异步
    // wx.setStorage({
    //   key: 'userInfo ',
    //   data: infoData
    // })
    // 备注: 最好使用同步方式
    wx.setStorageSync('userInfo', infoData)
  }
})