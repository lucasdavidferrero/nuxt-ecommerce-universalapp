<script setup lang="ts">
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
    <SwiperSlide>
      <div>
        <img src="/banners/banner1.jpg"/>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <img src="/banners/banner2.jpg"/>
    </SwiperSlide>
    <SwiperSlide>
      <img src="/banners/banner3.jpg"/>
    </SwiperSlide>
  </Swiper>
</template>

<style scoped>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 40vh;
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
