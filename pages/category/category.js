// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    height: 0,
    courses: [],
    categories: [],
  },
  swichNav: function(e) {
    console.log(e)
    var that = this;
    if (this.data.currentTab == e.target.dataset.index) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.index
      })
      wx.request({
        url: `http://itfun.tv/api/v1/categories/${e.target.dataset.slug}.json`,
        success: (res) => {
          console.log(res)
          var length = res.data.courses.length
          this.setData({
            courses: res.data.courses,
            height: 500 * length
          })
        }
      })
    }
  }, //如果是当前页就不执行，不是当前页就请求读取当前页面

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url: `http://itfun.tv/api/v1/categories.json`,
      success: (res) => {
        console.log(res)
        this.setData({
          categories: res.data.categories
        })
      }
    }) //获取每一页的data-slug的值，进行绑定
    wx.request({
      url: `http://itfun.tv/api/v1/categories/front_end.json`,
      success: (res) => {
        console.log(res)
        var length = res.data.courses.length
        this.setData({
          courses: res.data.courses,
          height: 500 * length
        })
      }
    }) //第一页要点击才显示

  },
  bindChange: function(e) {
    console.log(e)
    this.setData({
      currentTab: e.detail.current
    }) //切换页面
  },
  stopTouchMove: function() {
    return false
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