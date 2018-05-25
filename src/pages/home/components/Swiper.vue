<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

  
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return{
      swiperOption:{
        pagination:'.swiper-pagination',
        loop: true
      },
      // swiperList:[
      //   {id:'0001',imgUrl:'http://img1.qunarzz.com/piao/fusion/1805/b2/ea3845efcd579802.jpg_750x200_f2131e39.jpg'},
      //   {id:'0002',imgUrl:'http://img1.qunarzz.com/piao/fusion/1805/de/47d98076af29f202.jpg_750x200_7888b7c9.jpg'}
      // ]
      
    }
  },
  props:{
    list: Array
  },
  computed:{
    showSwiper () {
      return this.list.length
    }
  }
}

</script>

<style lang="stylus" scoped>
.wrapper >>>.swiper-pagination-bullet-active
    background #fff
// 撑开位置防止内容抖动
.wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 26.67% 
    background #eee
    .swiper-img
        width 100%
</style>


