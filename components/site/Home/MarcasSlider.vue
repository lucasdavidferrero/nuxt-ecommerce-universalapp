<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
const breakpoints = useBreakpoints(breakpointsTailwind)

import 'swiper/css';
import 'swiper/css/navigation';

const marcasSlide = [
  { aik_ma_codigo: '001', aik_ma_descri: 'ATMA', imgURL: '/marcasSlider/Atma.jpg', toLink: '#' },
  { aik_ma_codigo: '002', aik_ma_descri: 'BAMBI', imgURL: '/marcasSlider/Bambi.jpg', toLink: '#' },
]

const slidePerView = computed(() => {
  return (breakpoints.greaterOrEqual('lg') ? 4 : 1)
})
</script>

<template>
  <div class="my-2">
    <h2 class="lg:text-4xl text-xl leading-10 font-headings mb-2">Nuestras Marcas</h2>
    <div>
      <Swiper
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :slides-per-view="slidePerView"
          :loop="true"
          navigation
          :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="marcaSlide in marcasSlide">
          <a :href="marcaSlide.toLink">
            <img :src="marcaSlide.imgURL" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 50vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
</style>
