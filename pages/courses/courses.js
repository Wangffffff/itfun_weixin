// pages/chapters/chapters.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course: {},
    chapters: [],
    teacher: {},
    relation_courses: [],
    isFold: true,
  },
  showAll: function(e) {
    this.setData({
      isFold: !this.data.isFold,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let id = options.id
    wx.request({
      url: `https://itfun.tv/api/v1/courses/${id}.json`,
      success: (res) => {
        console.log(res)
        this.setData({
          course: res.data.course,
          chapters: res.data.chapters,
          teacher: res.data.teacher,
          relation_courses: res.data.relation_courses
        })
      }
    })
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