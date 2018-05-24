<template>
  <div>
    <div class="title">
      热门推荐
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>  
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201305/22/273c38aa938ad97dc8d65eac.jpg_200x200_1f49d1ec.jpg',
        title: '中山陵',
        desc: '南京欢迎你，中山陵是你的后花园'
      },{
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201305/22/273c38aa938ad97dc8d65eac.jpg_200x200_1f49d1ec.jpg',
        title: '中山陵',
        desc: '南京欢迎你，中山陵是你的后花园'
      },{
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201305/22/273c38aa938ad97dc8d65eac.jpg_200x200_1f49d1ec.jpg',
        title: '中山陵',
        desc: '南京欢迎你，中山陵是你的后花园'
      },{
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201305/22/273c38aa938ad97dc8d65eac.jpg_200x200_1f49d1ec.jpg',
        title: '中山陵',
        desc: '南京欢迎你，中山陵是你的后花园'
      },{
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201305/22/273c38aa938ad97dc8d65eac.jpg_200x200_1f49d1ec.jpg',
        title: '中山陵',
        desc: '南京欢迎你，中山陵是你的后花园'
      }]
    }
  }
}

</script>

<style lang="stylus" scoped>
  .title
    background #eee
    line-height .8rem
    text-indent .2rem
    margin-top .2rem
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      height 1.7rem
      width 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
      .item-desc
        line-height .4rem
        color #ccc
      .item-btn
        margin-top .2rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #fff

</style>


