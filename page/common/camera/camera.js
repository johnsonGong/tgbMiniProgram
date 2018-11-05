/**
 * page/common/camera/camera.js
 * 组件: 拍照。
 * 
 * [业务逻辑]
 * 1.进入组件，判断授权情况(scope.camera)，如"未授权"则执行 申请授权；
 * 2.可切换摄像头: 前置/后置;
 * 3.拍照，预览本地照片;
 * 4. 确定，返回主页面(ps: 后续操作由主页面执行，如：上传。)；
 * 5. ps: 因返回数据，切换回主页面，暂时感觉还是做成 组件较好。
 * 
 * @author gonglong-[2018/11/02 15:45, yyyy/MM/dd HH:mm]
 */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 前置或后置，值为 front, back
    changeCount: 0,
    position: ["back", "front"],
    // 闪光灯, auto, on, off
    flash: "off",
    src: "",
    parentPage: {
      face: "../identifyCard/identifyCard",
      card: "../identifyFace/identifyFace"
    },
    queryFiled: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(obj) {
    var queryObj = obj
    console.log("queryObj:" + JSON.stringify(queryObj))
    if (typeof queryObj["page"] !== "undefined") {
      // 存在
      this.setData({
        queryFiled: queryObj["page"]
      })
    }
    this.ctx = wx.createCameraContext()
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
   * 用户不允许使用摄像头时触发.
   * 
   * 
   */
  bindCameraError: function(obj) {
    console.log("用户不允许使用摄像头!--权限")
  },
  /**
   * 检查权限.
   * 
   */
  checkAuthCamera: function() {
    wx.getSetting({
      success: res => {
        if (!res.authSetting['scope.camera']) {
          this.applyAuthCamera()
        }
      },
      fail: res => {
        wx.showModal({
          title: '提示',
          content: '获取权限(getSetting)失败!',
        })
        console.log('getSetting--> Fail!')
      }
    })
  },
  /**
   * 申请拍照权限.
   * 
   */
  applyAuthCamera: function() {
    wx.authorize({
      scope: "scope.camera",
      success: function(res) {
        wx.showModal({
          title: '操作提示',
          content: '已获授权，请继续拍照。',
          showCancel: false
        })
      },
      fail: function(errorObj) {
        wx.showModal({
          title: '操作提示',
          content: '未授权，不可拍照！',
          showCancel: false
        })
        // TODO -- 退出本页面(组件)
      }
    })
  },
  /**
   * 拍照.
   * 
   */
  takePhoto: function() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
        // app.globalData.imgLocal = res.tempImagePath
        console.log("tempImagePath:\n" + res.tempImagePath)
        wx.setStorageSync("imgCamera", res.tempImagePath)
      }
    })
  },
  /**
   * 切换摄像头: 前置/后置.
   * 
   */
  changePostion: function() {
    var tmpCount = this.data.changeCount
    tmpCount = (tmpCount + 1) % 2
    console.log("tmpCount -->" + tmpCount)
    this.setData({
      changeCount: tmpCount
    })
  },
  /**
   * 确认上传
   * 
   */
  bindUpload: function() {
    // TODO-上传成功后，返回上级页面。
    wx.showLoading({
      title: '上传中',
    });
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        success: "success",
        title: '上传成功!',
      })
    }, 1500)

    setTimeout(() => {
      wx.hideToast();
      wx.navigateBack({
        delta: 1
      })
    }, 3000)
  }

})