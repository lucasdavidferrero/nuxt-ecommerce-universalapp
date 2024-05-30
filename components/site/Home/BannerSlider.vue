<script setup lang="ts">

const sliderImages = [
  { imgDesktop: '/banners/slider-img-pardo1.webp', imgMobile: '/banners/slider-img-pardo1-mobile.webp' },
  { imgDesktop: '/banners/slider-img-pardo3.webp', imgMobile: '/banners/slider-img-pardo3-mobile.webp' }
]
</script>

<template>
  <Swiper
      :modules="[SwiperAutoplay, SwiperNavigation]"
      :slides-per-view="1"
      :loop="true"
      navigation
      :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide v-for="sliderImage in sliderImages">
      <div>
        <img :src="sliderImage.imgDesktop" class="hidden lg:block"/>
        <img :src="sliderImage.imgMobile" class="lg:hidden"/>
      </div>
    </SwiperSlide>
  </Swiper>
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
.swiper-button-prev, .swiper-button-next {
  @apply text-black;
}
</style>
