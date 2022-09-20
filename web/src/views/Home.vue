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
    <m-card icon="round_menu_fill" title="新闻资讯">
      <div class="card-body pt-3">
        <div class="nav jc-between">
          <div class="nav-item active">
            <div class="nav-link ">热门</div>
          </div>
          <div class="nav-item">
            <div class="nav-link ">新闻</div>
          </div> 
          <div class="nav-item">
            <div class="nav-link ">新闻</div>
          </div> 
          <div class="nav-item">
            <div class="nav-link ">新闻</div>
          </div> 
          <div class="nav-item">
            <div class="nav-link ">新闻</div>
          </div> 
        </div>
        <div class="pt-3">
          <swiper >
            <swiper-slide v-for="m in 5" :key="m">
              <div class="py-3" v-for="n in 5" :key="n">
                <span>[新闻]</span>
                <span>|</span>
                <span>表达杰弗里啊是大家考虑反抗类毒素</span>
                <span>06/02</span>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </m-card>
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
        }
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
