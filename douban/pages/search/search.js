// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key:'',
    movies:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  getKey:function(e){
    
    this.setData({ key: e.detail.value }) 
    console.log(this.data.key)
  },
  searchKey:function(){
    var thispage=this
    console.log("可以案列")
    wx.request({
      url: 'https://api.douban.com/v2/movie/search?q='+this.data.key, 
    data: {},
    header: {
      'content-type': 'application/text'
    },
    success: function (res) {
      thispage.setData({ movies: res.data.subjects })
    }
  })
  }
  
})