<template>
  <div class="back">
    <swiper ref="mySwiper" :options="swiperOptions" >
      <swiper-slide v-for="banner in banners" :key="banner.id"><img :src="banner"/></swiper-slide>
      <div class="swiper-pagination "  slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
    </swiper>
    <img src="../../assets/dilireba.png"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { reactive, ref, computed } from '@vue/composition-api';
export default {
  name: 'Page',
  data() {
  return {
    banners:[
      '../../assets/dilireba.png',
      '../../assets/dilireba.png',
      '../../assets/dilireba.png'
    ],
    swiperOptions: {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable:true,
      },
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      // 如果需要滚动条
      scrollbar: '.swiper-scrollbar',
      // Some Swiper option/callback...
    }
}
  },
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.$swiper
  //   }
  // },
  // mounted() {
  //   console.log('Current Swiper instance object', this.swiper)
  //   this.swiper.slideTo(3, 1000, false)
  // }
}
</script>

<style lang="scss" scoped>
.back{
  width: 100%;
  height: 450px;
  // background: url("../../assets/dilireba.png") no-repeat;
  background-position: center;
}
</style>
