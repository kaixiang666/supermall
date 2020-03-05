<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物车</div></nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <recommend-view :recommends='recommends'></recommend-view>
    <feature-view/>
    <tab-contro :tabcontro="['流行','新款','精选']" class="tabcontro"></tab-contro>
    <goods-list :goods = "goods['pop'].list" />
    <ul>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
    </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'
import TabContro from 'components/content/tabcontro/TabContro'
import GoodsList from 'components/content/goods/GoodsList'
import {getHomeMultidata,getHomeGoods} from 'network/home.js'

export default {
  name:'Home',
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabContro,
    GoodsList
  },
  data() {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      }
    }
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata()
    
    //2.请求首页商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods:{
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page+1
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  }
}
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-tint);
    color:#fff; 
  }
  #home{
    padding-top: 44px;
    width: 100%;
  }
  .tabcontro{
    position: sticky;
    top: 44px;
    background-color: #fff;
  }
</style>