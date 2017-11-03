// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slider: [
      { picUrl: '../../images/m_banner/m_banner1.jpg' },
      { picUrl: '../../images/m_banner/m_banner8.jpg' },
      { picUrl: '../../images/m_banner/m_banner9.jpg' }
    ],
    objectcakeSizeArray: [
      {
        id: 0,
        name: '两英尺（1000人）',
        oldPrice: 998,
        newPrice: 198
      },
      {
        id: 1,
        name: '两百尺（1000人）',
        oldPrice: 298,
        newPrice: 98
      },
      {
        id: 2,
        name: '百英尺（1000人）',
        oldPrice: 998,
        newPrice: 98
      },
      {
        id: 3,
        name: '两百英尺（1000人）',
        oldPrice: 998,
        newPrice: 98
      }
    ],
    cakeSizeIndex: 0,
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      cakeSizeIndex: e.detail.value
    })
  },
  j_buynow: function () {
    wx.navigateTo({
      url: '../confirm_order/confirm_order',
    })
  },
  makeTelCall: function () {
    wx.makePhoneCall({
      phoneNumber: '400-658-1177',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.setData({
        type: options.id,
      });
      var that = this;
      // that.setData({
      //   mername: options.mername//options为页面路由过程中传递的参数
      // })
      // wx.setNavigationBarTitle({
      //   title: that.data.mername//页面标题为路由参数
      // })
      console.log(options.id);
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