/**
 * components/stepBar.js.
 * 
 * 组件: 顶部[业务步骤]栏.
 * 
 * 备注:
 * 1. 定义外部参数的格式;
 * 2.更新数据的唯一合法方式, setData;
 * 3.TODO-使用 外部全局样式 weui
 * 
 * @author gonglong-[2018/10/29 09:18, 2018/10/29 10:15]
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 当前步骤
    currenStep: {
      type: Number,
      value: 1
    }
  },

  externalClasses: [],

  /**
   * 组件的初始数据
   */
  data: {
    // 总共显示 四步;
    stepList: [{
        txt: "人脸识别",
      css: "step-flex__item step-item"
      },
      {
        txt: "信息完善",
        css: ""
      },
      {
        txt: "个税核实",
        css: ""
      },
      {
        txt: "额度测算",
        css: ""
      }
    ],
    newStepList: []
  },
  create: function () {
    // 此处未能获取 传入参数;
  },
  attached: function () {
    // console.log("声明周期--attached!");
    // console.log("currenStep:" + this.data.currenStep);
    this.initStep(this.data.currenStep)
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 初始化本次展示的【状态】.
     * 
     * @param {Number} num 当前步骤;
     */
    initStep: function (num) {
      var tmpCss = "step-flex__item step-item"
      var tmpList = this.data.stepList
      var len = tmpList.length
      for (var i = 0; i < len; i++) {
        if (i < num && (num - i) === 1) {
          // 当前所在的步骤.
          tmpList[i].css = tmpCss + " active"
        } else if (i < num) {
          // 已完成的步骤
          tmpList[i].css = tmpCss + " done"
        } else {
          tmpList[i].css = tmpCss
        }
      }
      // 更新数据-实时更新页面.
      this.setData({
        stepList: tmpList
      })
    }
  }
})