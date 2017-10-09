// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[],
    name:'',
    hiddenLoading:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    var thispage=this
    console.log(params.type)
    thispage.setData({name:params.name})
    wx.request({
      url: 'https://api.douban.com/v2/movie/' + params.type,
      data: {   },
      header: {
        'content-type': 'application/texy'
      },
      success: function (res) {
        thispage.setData({movies:res.data.subjects})
        thispage.setData({ hiddenLoading:true})
      }
    })
  }
})