<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
      <div class="icon" v-for="item of page" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl">
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </div>
      </swiper-slide>
    </swiper>


  </div>
</template>



<script>
export default {
  name: 'HomeIcons',
  props:{
    list: Array
  },
  data() {
    return {
      swiperOption:{
        autoplay: false
      }
      // iconsList: [{
      //   id: '0001',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
      //   desc: '景点门票'
      // }, {
      //   id: '0002',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
      //   desc: '必游榜单'
      // }, {
      //   id: '0003',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
      //   desc: '踏青赏花'
      // }, {
      //   id: '0004',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
      //   desc: '一日游'
      // },{
      //   id: '0005',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
      //   desc: '景点门票'
      // }, {
      //   id: '0006',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
      //   desc: '必游榜单'
      // }, {
      //   id: '0007',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
      //   desc: '踏青赏花'
      // }, {
      //   id: '0008',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
      //   desc: '一日游'
      // }, {
      //   id: '0009',
      //   imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
      //   desc: '三日游'
      // }]
    }
  },
  computed:{
    pages () {
      const pages = []
      this.list.forEach((item,index) => {
        const page = Math.floor(index/8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      });
      return pages
    }
  }
}


</script>

<style lang="stylus" scoped>
  @imoport '~styles/varibles.styl'
  @imoport '~styles/mixins.styl'
  .icons >>> .swiper-container
      height 0
      padding-bottom 50%
     
  .icon
      position relative
      overflow hidden
      float left
      width 25%
      height 0
      padding-bottom 25%

  .icon-img
      position absolute
      top 0
      bottom .44rem
      left 0
      right 0
    
      box-sizing border-box
      padding .1rem
      .icon-img-content
          height 100%
          display block
          margin 0 auto 

  .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .98rem
      text-align center
      color $darkTextColor
      ellipsis ()

</style>


