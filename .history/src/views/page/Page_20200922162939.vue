<template>
  <div>
   <swiper ref="mySwiper" :options="swiperOptions" >
    <swiper-slide v-for="banner in user" :key="banner.id"><img src="banner"/></swiper-slide>
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
    banners:[
      '../../src/assets/dilireba.png',
      '../../src/assets/dilireba.png',
      '../../src/assets/dilireba.png'
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
