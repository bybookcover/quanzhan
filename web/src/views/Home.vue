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

</style>
