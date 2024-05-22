<script setup lang="ts">
import { useTailwindBreakpoints } from "~/composables/useTailwindBreakpoints"
import { computed } from 'vue'
import 'swiper/css';
import 'swiper/css/navigation';

const breakpoints = useTailwindBreakpoints()
const greaterThanLg = breakpoints.greater('lg')
const greaterThanMd = breakpoints.greater('md')
const greaterThanSm = breakpoints.greater('sm')

const marcasSlide = [
  { aik_ma_codigo: '001', aik_ma_descri: 'ATMA', imgURL: '/marcasSlider/Atma.jpg', toLink: '#' },
  { aik_ma_codigo: '002', aik_ma_descri: 'BAMBI', imgURL: '/marcasSlider/Bambi.jpg', toLink: '#' },
  { aik_ma_codigo: '003', aik_ma_descri: 'BGH', imgURL: '/marcasSlider/BGH.jpg', toLink: '#' },
  { aik_ma_codigo: '004', aik_ma_descri: 'Briket', imgURL: '/marcasSlider/Briket.jpg', toLink: '#' },
  { aik_ma_codigo: '005', aik_ma_descri: 'Drean', imgURL: '/marcasSlider/Drean.jpg', toLink: '#' },
  { aik_ma_codigo: '006', aik_ma_descri: 'Hitachi', imgURL: '/marcasSlider/Hitachi.jpg', toLink: '#' },
  { aik_ma_codigo: '007', aik_ma_descri: 'Inducol', imgURL: '/marcasSlider/Inducol.jpg', toLink: '#' },
  { aik_ma_codigo: '008', aik_ma_descri: 'King Koil', imgURL: '/marcasSlider/KingKoil.jpg', toLink: '#' },
  { aik_ma_codigo: '009', aik_ma_descri: 'Liliana', imgURL: '/marcasSlider/Liliana.jpg', toLink: '#' },
  { aik_ma_codigo: '010', aik_ma_descri: 'Longvie', imgURL: '/marcasSlider/Longvie.jpg', toLink: '#' },
  { aik_ma_codigo: '011', aik_ma_descri: 'Motorola', imgURL: '/marcasSlider/Motorola.jpg', toLink: '#' },
  { aik_ma_codigo: '012', aik_ma_descri: 'Mussa', imgURL: '/marcasSlider/Mussa.jpg', toLink: '#' },
  { aik_ma_codigo: '013', aik_ma_descri: 'Nativa', imgURL: '/marcasSlider/Nativa.jpg', toLink: '#' },
  { aik_ma_codigo: '014', aik_ma_descri: 'Noblex', imgURL: '/marcasSlider/Noblex.jpg', toLink: '#' },
  { aik_ma_codigo: '015', aik_ma_descri: 'Philco', imgURL: '/marcasSlider/Philco.jpg', toLink: '#' },
  { aik_ma_codigo: '016', aik_ma_descri: 'RCA', imgURL: '/marcasSlider/RCA.jpg', toLink: '#' },
  { aik_ma_codigo: '017', aik_ma_descri: 'ricchezze', imgURL: '/marcasSlider/ricchezze.jpg', toLink: '#' },
  { aik_ma_codigo: '018', aik_ma_descri: 'Samsung', imgURL: '/marcasSlider/Samsung.jpg', toLink: '#' },
  { aik_ma_codigo: '019', aik_ma_descri: 'Whirlpool', imgURL: '/marcasSlider/Whirlpool.jpg', toLink: '#' },
]
const slidePerView = computed(() => {
  if (greaterThanLg.value) return 5
  if (greaterThanMd.value) return 3
  if (greaterThanSm.value) return 2
  return 1
})

</script>

<template>
  <div class="my-2">
    <div>
      <Swiper
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :slides-per-view="slidePerView"
          :loop="true"
          :space-between="10"
          navigation
          :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="marcaSlide in marcasSlide">
          <a :href="marcaSlide.toLink">
            <NuxtImg :src="marcaSlide.imgURL" sizes="lg:200px" />
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
