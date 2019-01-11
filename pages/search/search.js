// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses:[]
  },
  search:function(e){
    console.log(e.detail.value)
    let keyword= e.detail.value.keyword
    wx.request({
      url: `https://itfun.tv/api/v1/search.json?q=${keyword}`,
      success:(res)=>{
        console.log(res)
        this.setData({
          courses:res.data.courses
        })
      }
    })
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

  }
})