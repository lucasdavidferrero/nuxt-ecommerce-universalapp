<script setup lang="ts">
import { splitArrayIntoChunks } from './../../../utils/arrayUtils';

interface ICategoriaPopular {
  aik_re1_codigo: string
  aik_re1_descri: string
  toLink: string
  logoURL: string
}

const categoriasPopulares: ICategoriaPopular[] = [
  { aik_re1_codigo: '00001', aik_re1_descri: 'CLIMATIZACION', toLink: '#', logoURL: '/img/phone_black.png' },
  { aik_re1_codigo: '00002', aik_re1_descri: 'TV AUDIO VIDEO', toLink: '#', logoURL: '/img/phone_black.png' },
  { aik_re1_codigo: '00003', aik_re1_descri: 'TECNOLOGIA', toLink: '#', logoURL: '/img/phone_black.png' },
  { aik_re1_codigo: '00004', aik_re1_descri: 'ELECTRODOMESTICOS ', toLink: '#', logoURL: '/img/phone_black.png' },
  { aik_re1_codigo: '00005', aik_re1_descri: 'HOGAR', toLink: '#', logoURL: '/img/phone_black.png' },
  { aik_re1_codigo: '00006', aik_re1_descri: 'SALUD Y BELLEZA', toLink: '#', logoURL: '/img/phone_black.png' },
  { aik_re1_codigo: '00007', aik_re1_descri: 'MUEBLES', toLink: '#', logoURL: '/img/phone_black.png' },
  { aik_re1_codigo: '00008', aik_re1_descri: 'AIRE LIBRE', toLink: '#', logoURL: '/img/phone_black.png' },
  { aik_re1_codigo: '00009', aik_re1_descri: 'COLCHONES Y SOMMIERS', toLink: '#', logoURL: '/img/phone_black.png' },
  { aik_re1_codigo: '00010', aik_re1_descri: 'OFICINA', toLink: '#', logoURL: '/img/phone_black.png' },
  { aik_re1_codigo: '00011', aik_re1_descri: 'RODADOS', toLink: '#', logoURL: '/img/phone_black.png' },
  { aik_re1_codigo: '00012', aik_re1_descri: 'NIÑOS', toLink: '#', logoURL: '/img/phone_black.png' }
]

const categoriasPopularesSplitted: Array<ICategoriaPopular[]> = splitArrayIntoChunks(categoriasPopulares, 6)
</script>

<template>
  <div>
    <div class="swiper-container" id="swiperCategoriasPopulares">
      <Swiper
          :modules="[SwiperAutoplay, SwiperNavigation]"
          :slides-per-view="1"
          :loop="true"
          navigation
          class="container mx-auto px-4"
          :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }">
        <SwiperSlide v-for="categoriaPopularChunk in categoriasPopularesSplitted" class="p-4">
          <a v-for="categoriaPopular in categoriaPopularChunk" :key="categoriaPopular.aik_re1_codigo"
             :href="categoriaPopular.toLink"
             class="bg-white rounded-md flex flex-col justify-center items-center p-4 border border-neutral-200 hover:shadow-lg">
            <div>
              <NuxtImg :src="categoriaPopular.logoURL" sizes="lg:200px" />
            </div>
            <p class="text-base">{{ categoriaPopular.aik_re1_descri }}</p>
          </a>
        </SwiperSlide>
      </Swiper>
      <!-- Custom Arrows -->
      <div class="custom-swiper-button-next"></div>
      <div class="custom-swiper-button-prev"></div>
    </div>
  </div>
</template>

<style scoped>
.swiper-slide {
  @apply grid grid-cols-3 grid-rows-2 gap-6;
  max-height: 100vh;
}
</style>
