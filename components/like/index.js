// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like : {
      type: Boolean,
      value: false
    },
    count : {
      type: Number,
      value: 99      
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike : function (event) {
      let like = this.properties.like
      let count = this.properties.count
          
        this.setData({
          like : !like,
          count : like?--count:++count

        })
    }
  }
  
})
