<script lang="ts" setup>
import BreadcrumbsJerarquia from './../../components/site/ArticuloDetalle/BreadcrumbsJerarquia.vue'
import ArticuloGaleriaImagenes from "~/components/site/ArticuloDetalle/ArticuloGaleriaImagenes.vue";
import ArticuloInfo from "~/components/site/ArticuloDetalle/ArticuloInfo.vue";
import ArticuloDetalleTabs from "~/components/site/ArticuloDetalle/ArticuloDetalleTabs.vue";
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
          <!--<hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-full">-->
          <div class="w-full py-4">
            <ArticuloDetalleTabs />
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>
