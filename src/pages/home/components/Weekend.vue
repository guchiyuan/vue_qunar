<template>
  <div>
    <div class="title">
      周末去哪儿呢？
    </div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
          
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: '//img1.qunarzz.com/sight/p0/1601/93/93fc9519bd1959b890.img.jpg_600x330_77ca8bd8.jpg',
        title: '牛首山',
        desc: '在周末让我们放飞自我'
      },{
        id: '0002',
        imgUrl: '//img1.qunarzz.com/sight/p0/1601/93/93fc9519bd1959b890.img.jpg_600x330_77ca8bd8.jpg',
        title: '牛首山',
        desc: '在周末让我们放飞自我'
      },{
        id: '0003',
        imgUrl: '//img1.qunarzz.com/sight/p0/1601/93/93fc9519bd1959b890.img.jpg_600x330_77ca8bd8.jpg',
        title: '牛首山',
        desc: '在周末让我们放飞自我'
      }]
    }

  }
}
</script>

<style lang="stylus" scoped>
  .title
    height .8rem
    line-height .8rem
    text-indent .2rem
    background #eee
  .item-img-wrapper
    overflow hidden
    height 0
    padding-bottom 55%
    .item-img
      width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .32rem
    .item-desc
      line-height .4rem
      color #ccc

</style>


