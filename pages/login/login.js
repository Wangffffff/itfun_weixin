// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
  },
  swichNav: function(e) {
    console.log(e)
    var that = this;
    if (this.data.currentTab == e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    const data = {
      grant_type: "password",
      client_id: 'c60de69e571fae852bea53e347a2be36503ebba84247a054cb7eb6549d161ac9',
      client_secret: "d8491d666ee8749bc348eb25035ed0195dbd6cff586327ba9304013eb0d92734",
      username: e.detail.value.username,
      password: e.detail.value.password
    }

    wx.request({
      url: `https://itfun.tv/oauth/token.json`,
      method: 'POST',
      data: data,
      success: (res) => {
        console.log(res)
        if (res.data.access_token) {
          wx.setStorageSync('token_type', res.data.token_type),
            wx.setStorageSync('access_token', res.data.access_token)
          wx.switchTab({
            url: '../mine/mine'
          })
        }
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