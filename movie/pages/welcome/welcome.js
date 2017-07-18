// pages/welcome/welcome.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters:{

    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var inTheatersURL = app.globalData.doubanBase+app.globalData.inTheaters+
    "?start=0&count=10";
    console.log(inTheatersURL);
    this.getMovieListData(inTheatersURL,"inTheaters","影院热映");
    // this.getMovieListData(comingSoonURL,"comingSoonURL","即将上映");

  },
  getMovieListData: function (url, settedKey, categoryTitle) {
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 10000
      });
      var that = this;
      // 请求电影数据
      wx.request({
        url: url,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {
          "content-type": "json"
        }, // 设置请求的 header
        success: function (res) {
          // 组装电影数据
          var data = res.data;
          console.log(data);
        }
      })
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
