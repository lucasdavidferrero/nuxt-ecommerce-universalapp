<script setup lang="ts">
import { SfScrollable,SfButton, SfIconChevronLeft, SfLink, SfIconChevronRight } from "@storefront-ui/vue";
import { toPriceText } from "~/utils/moneyFormatUtils";

const articuloSlider = [
  { aik_ar_codigo: '12356', aik_ap_precio_iva: 286199, descripcion_web: 'Smart Tv 32 Pulgadas Full Hd L32S6400', ar_precio_contado: 199999,
    ar_url_img_principal: 'https://www.megatone.net/Images/Articulos/zoom/251/TEL3254TCL.jpg?v=be1402f9a22105e46a51a630ef67c44d', porcentaje_off: 0 },
  { aik_ar_codigo: '999922', aik_ap_precio_iva: 1499999, descripcion_web: 'Notebook I7 91X515eaEj2201w 8G512gbsw11', ar_precio_contado: 999999,
    ar_url_img_principal: 'https://www.megatone.net/Images/Articulos/zoom/200/NOT7630ASU.jpg?v=2e5b6bb5a34b167bc9873b8f9183378b', porcentaje_off: 33 },
  { aik_ar_codigo: '012123', aik_ap_precio_iva: 149499, descripcion_web: 'Microondas Rw20mecF 20L 700W Bl', ar_precio_contado: 124999,
    ar_url_img_principal: 'https://www.megatone.net/Images/Articulos/zoom/32/COC2000RCA.jpg?v=2e5b6bb5a34b167bc9873b8f9183378b', porcentaje_off: 16},
  { aik_ar_codigo: '151549', aik_ap_precio_iva: 72999, descripcion_web: 'Pistola Para Masajes Portable Bateria Pro Electro Recargable Suono Portatil Nuevo Origen Argentina', ar_precio_contado: 35999,
    ar_url_img_principal: 'https://www.megatone.net/images//Articulos/zoom/315/MKT0130RGC-1.jpg?v=2783a5502b6c7e3695ea0dba09904e2b', porcentaje_off: 16},
  { aik_ar_codigo: '426281', aik_ap_precio_iva: 49921, descripcion_web: 'Reloj Inteligente Smartwatch I8 Negro Suono', ar_precio_contado: 18099,
    ar_url_img_principal: 'https://www.megatone.net/images//Articulos/zoom/239/MKT0082RGC-1.jpg?v=2783a5502b6c7e3695ea0dba09904e2b', porcentaje_off: 64},
  { aik_ar_codigo: '11111', aik_ap_precio_iva: 899999, descripcion_web: 'Smart Tv 55 Pulgadas 4K Ultra Hd 91Mt55y003a1b Motorola', ar_precio_contado: 549999,
    ar_url_img_principal: 'https://www.megatone.net/Images/Articulos/zoom/254/TEL5501MOT.jpg?v=2783a5502b6c7e3695ea0dba09904e2b', porcentaje_off: 39},


]
</script>

<template>
  <div class="my-2">

    <div class="lg:flex mb-2">
      <h2 class="lg:text-4xl text-xl leading-10 font-headings">
        Descuentos Imperdibles hasta 64% OFF
      </h2>
      <p class="lg:ml-4 flex items-center">
        <a href="#" class="text-primary-800 font-bold hover:underline text-lg">Ver más</a>
      </p>
    </div>
    <SfScrollable
        class="m-auto py-4 items-center w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        buttons-placement="floating"
        drag
    >
      <template #previousButton="defaultProps">
        <SfButton
            v-bind="defaultProps"
            class="absolute !rounded-full z-10 left-4 bg-white hidden md:block"
            :class="{ '!hidden': defaultProps.disabled }"
            variant="secondary"
            size="lg"
            square
        >
          <SfIconChevronLeft />
        </SfButton>
      </template>
      <div
          v-for="{ aik_ar_codigo, aik_ap_precio_iva, ar_precio_contado, descripcion_web, ar_url_img_principal, porcentaje_off } in articuloSlider"
          :key="aik_ar_codigo"
          class="first:ms-auto last:me-auto border border-neutral-200 shrink-0 rounded-md hover:shadow-lg w-[200px] lg:w-[220px] bg-white"
      >
        <div class="relative p-2">
          <SfLink href="#" class="block">
            <img
                :src="ar_url_img_principal"
                :alt="descripcion_web"
                class="block object-contain rounded-md aspect-square lg:w-[300px] lg:h-[150px]"
                height="150"
            />
          </SfLink>
          <!--<SfButton
              variant="tertiary"
              size="sm"
              square
              class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
              aria-label="Add to wishlist"
          >
            <SfIconFavorite size="sm" />
          </SfButton>-->
        </div>
        <div class="p-2">
          <SfLink href="#" variant="secondary" class="no-underline h-16 block text-sm -mt-2 line-clamp-3">{{ descripcion_web }}</SfLink>
          <div class="border-t border-neutral-200 my-0.5"></div>
          <div>
            <div class="flex items-center justify-between">
              <span class="line-through text-gray-600">${{ toPriceText(aik_ap_precio_iva) }}</span>
              <span class="pl-2 text-primary-800">
                <strong>{{ porcentaje_off }}%</strong> OFF
              </span>
            </div>
            <div class="font-bold">
              <span class="text-2xl text-red-900">${{ toPriceText(ar_precio_contado) }}</span>
            </div>
          </div>
        </div>
      </div>

      <template #nextButton="defaultProps">
        <SfButton
            v-bind="defaultProps"
            class="absolute !rounded-full z-10 right-4 bg-white hidden md:block"
            :class="{ '!hidden': defaultProps.disabled }"
            variant="secondary"
            size="lg"
            square
        >
          <SfIconChevronRight />
        </SfButton>
      </template>
    </SfScrollable>
  </div>
</template>

<style scoped>

</style>
