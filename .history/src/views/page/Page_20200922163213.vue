<template>
  <div class="back">
    <swiper ref="mySwiper" :options="swiperOptions" >
      <swiper-slide v-for="banner in banners" :key="banner.id"><img src="banner"/></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    
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
      pagination: {
        el: '.swiper-pagination'
      },
      // Some Swiper option/callback...
    }
}
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    console.log('Current Swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>

<style lang="scss" scoped>
.back{
  width: 100%;
  height: 450px;
  background: url("../../assets/dilireba.png") no-repeat;
  background-position: center;
}
</style>
