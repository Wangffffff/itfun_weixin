// pages/chapters/chapters.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    chapter: {},
    article: '',
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // let id = options.id
    // wx.request({
    //   url: `https://itfun.tv/api/v1/chapters/${id}.json`,
    //   success: (res) => {
    //     console.log(res)
    //     let data = app.towxml.toJson(
    //       res.data.chapter.body, // `markdown`或`html`文本内容
    //       'markdown' // `markdown`或`html`
    //     );
    //     //设置文档显示主题，默认'light'
    //     // data.theme = 'dark';
    //     //设置数据
    //     this.setData({
    //       body: data
    //     });
    //   }
    // })
    wx.request({
      url: `https://itfun.tv/api/v1/chapters/${options.id}.json`,
      success: (res) => {
        console.log(res)
        let data = app.towxml.toJson(
          res.data.chapter.body,               // `markdown`或`html`文本内容
          'markdown'              // `markdown`或`html`
        );
        this.setData({
          chapter: res.data.chapter,
          article: data,
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