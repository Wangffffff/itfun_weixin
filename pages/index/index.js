//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    slide_courses:[],
    currentSwiper:0,
    new_courses:[],
    likes_courses:[],
    recommended_courses:[]
  },
  swiperChange:function(e){
    console.log(e)
    this.setData({
      currentSwiper:e.detail.current
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.request({
      url:'https://itfun.tv/api/v1/home.json',
      success:(res)=>{
        console.log(res)
        this.setData({ 
          slide_courses: res.data.slide_courses,
          new_courses: res.data.new_courses,
          likes_courses: res.data.likes_courses,
          recommended_courses: res.data.recommended_courses
          });
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