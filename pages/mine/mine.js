// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {},
    sex: {},
    currentTab: 0,
  },
  swichNav: function(e) {
    console.log(e)
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  bindChange: function(e) {
    console.log(e)
    this.setData({
      currentTab: e.detail.current
    }) //切换页面
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let token_type = wx.getStorageSync('token_type')
    let access_token = wx.getStorageSync('access_token')

    if (access_token) {
      wx.request({
        url: `https://itfun.tv/api/v1/users/me.json`,
        header: {
          'Authorization': `${token_type} ${access_token}`
        },
        success: (res) => {
          console.log(res)
          this.setData({
            user: res.data.user
          })
          switch (res.data.user.sex) {
            case 1:
              this.setData({
                sex: '男'
              })
              break;
            case 2:
              this.setData({
                sex: '女'
              })
              break;
            default:
              this.setData({
                sex: '其他'
              })
          }
        }
      })
    } else {
      wx.redirectTo({
        url: '../navigation/navigation'
      })
    }
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