<template>
  <div class="home">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide><img class="w-100" src="../assets/images/1.jpg" alt=""></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/images/2.jpg" alt=""></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/images/3.jpg" alt=""></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/images/4.jpg" alt=""></swiper-slide>
      <swiper-slide><img class="w-100" src="../assets/images/5.jpg" alt=""></swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-4 pb-4" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->

    <div class="nav-icons bg-white mt-3 pt-3 text-dark-1 text-center">
      <div class=" d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-story"></i>
          <div class="by-2">故事站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm d-flex text-center jc-center">
        <i class="sprite sprite-arrow mr-2"></i>
        <span class="fs-lg ">收起</span> 
      </div>
    </div>
    <!-- end of nav icons -->
    
    <m-card-list icon="round_menu_fill" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <div class="py-3" v-for="(news,i) in category.newsList" :key="i">
          <span>[{{news.categoryName}}]</span>
          <span>|</span>
          <span>{{news.title}}</span>
          <span>{{news.date}}</span>
        </div>
      </template>

    </m-card-list>
    <m-card icon="round_menu_fill" title="英雄列表"></m-card>
    <m-card icon="round_menu_fill" title="精彩视频"></m-card>
    <m-card icon="round_menu_fill" title="图文攻略"></m-card>
    <m-card icon="round_menu_fill" title="英雄列表"></m-card>
    <m-card icon="round_menu_fill" title="英雄列表"></m-card>


</div>
</template>

<script>

export default {
  data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.pagination-home'
          },
          // Some Swiper option/callback...
        },
        newsCats:[
            {
            name:'热门',
            newsList: new Array(5).fill(true).map(v=>({
                categoryName:'公告',
                title:'费时间到了啊',
                date:'06/01'            
            }))
          },
          {
            name:'新闻',
            newsList: new Array(5).fill(true).map(v=>({
                categoryName:'新闻',
                title:'费时间到了啊',
                date:'06/01'            
            }))
          },
          {
            name:'热门',
            newsList: new Array(5).fill(true).map(v=>({
                categoryName:'公告',
                title:'费时间到了啊',
                date:'06/01'            
            }))
          },
          {
            name:'公告',
            newsList: new Array(5).fill(true).map(v=>({
                categoryName:'公告',
                title:'费时间到了啊',
                date:'06/01'            
            }))
          },
          {
            name:'赛事',
            newsList: new Array(5).fill(true).map(v=>({
                categoryName:'公告',
                title:'费时间到了啊',
                date:'06/01'            
            }))
          },
        ]
      }
    },
}
</script>

<style lang="scss">
@import '../assets/scss/variables';


  .pagination-home{
    .swiper-pagination-bullet{
      // opacity: 1;
  background: black;
  &.swiper-pagination-bullet-active{
    background: map-get($colors, 'info' );
  }
}

  }

  .nav-icons{
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    .nav-item{
      width:25%;
      border-right: 1px solid $border-color;
      &:nth-child(4n){
        border-right: none;
      }
    }
  }



</style>
