<script lang="ts" setup>
import BreadcrumbsJerarquia from './../../components/site/ArticuloDetalle/BreadcrumbsJerarquia.vue'
import ArticuloGaleriaImagenes from "~/components/site/ArticuloDetalle/ArticuloGaleriaImagenes.vue";
import ArticuloInfo from "~/components/site/ArticuloDetalle/ArticuloInfo.vue";
import { useRoute } from 'vue-router'
const route = useRoute()

const IdProduct = route.params.idProduct

</script>
<template>
  <div>
    <div class="bg-white p-4">
      <Container>
        <BreadcrumbsJerarquia />
      </Container>
    </div>
    <div class="bg-white py-4">
      <Container>
        <div class="lg:flex flex-wrap gap-x-4">
          <div class="flex-1">
            <ArticuloGaleriaImagenes />
          </div>
          <div class="flex-1">
            <ArticuloInfo />
          </div>
          <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-full">
          <div class="w-full pb-8">
            <h2 class="text-2xl leading-10 font-headings mb-2">Descripción</h2>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            </p>
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>
