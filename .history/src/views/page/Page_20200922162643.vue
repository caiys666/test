<template>
  <div>
   <swiper ref="mySwiper" :options="swiperOptions" v-for="banner in banners" :key="banner.id">
    <swiper-slide>{{banner}}</swiper-slide>
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
    banners: [ 
      {name: '../../src/assets/dilireba.png'},
      {name: '../../src/assets/dilireba.png'}, 
      {name: '../../src/assets/dilireba.png'} 
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

</style>
