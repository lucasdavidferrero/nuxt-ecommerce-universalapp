<script setup lang="ts">
import { splitArrayIntoChunks } from './../../../utils/arrayUtils';
import { useTailwindBreakpoints } from "~/composables/useTailwindBreakpoints"
import {  } from 'vue'

const breakpoints = useTailwindBreakpoints()
const greaterThanLg = breakpoints.greater('lg')

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
const categoriasPopularesSplitted = computed<Array<ICategoriaPopular[]>>(() => {
  if (!greaterThanLg.value) return splitArrayIntoChunks(categoriasPopulares, 3)
  return splitArrayIntoChunks(categoriasPopulares, 6)
})
//const categoriasPopularesSplitted: Array<ICategoriaPopular[]> = splitArrayIntoChunks(categoriasPopulares, 6)
</script>

<template>
  <div>
    <div class="swiper-container" id="swiperCategoriasPopulares">
      <Swiper
          :modules="[SwiperNavigation, SwiperPagination]"
          :slides-per-view="1"
          navigation>
        <SwiperSlide v-for="(categoriaPopularSplitted,i) in categoriasPopularesSplitted" :key="i">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 py-4">
              <a  v-for="categoriaPopular in categoriaPopularSplitted"
                  :key="categoriaPopular.aik_re1_codigo"
                  :href="categoriaPopular.toLink"
                  class="flex flex-col justify-center items-center w-full bg-white rounded-md p-4 border border-neutral-200 hover:shadow-lg">
                <div>
                  <NuxtImg :src="categoriaPopular.logoURL" sizes="lg:200px" />
                </div>
                <p class="text-base">{{ categoriaPopular.aik_re1_descri }}</p>
              </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<style scoped>
.swiper-slide {
}
</style>
