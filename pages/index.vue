<script lang="ts" setup>
import BannerSlider from '../components/site/Home/BannerSlider.vue'
import EsferasRubrosSlider from "../components/site/Home/EsferasRubrosSlider.vue";
import ArticuloSlider from "~/components/site/Home/ArticuloSlider.vue";
import CategoriasPopularesSlider from "~/components/site/Home/CategoriasPopularesSlider.vue";
import MarcasSlider from "~/components/site/Home/MarcasSlider.vue";
import PrimaryHeading from "~/components/site/PrimaryHeading.vue";
import BannerFijoConDosArticulos from "~/components/site/Home/BannerFijoConDosArticulos.vue";
// https://www.youtube.com/watch?v=rU92oLYjTGY&ab_channel=Codewithguillaume
// const { data: usersData } = await useFetch('https://apiv1-pbeyz4nnjq-uc.a.run.app/api/v1/products')

</script>
<template>
  <section>
    <BannerSlider />
  </section>
  <section>
    <Container>
      <EsferasRubrosSlider />
    </Container>
  </section>
  <section>
    <Container>
      <ArticuloSlider />
    </Container>
  </section>
  <section class="mt-4">
    <Container>
      <PrimaryHeading>Categorías Populares</PrimaryHeading>
    </Container>
    <CategoriasPopularesSlider />
  </section>
  <section clas="mt-4">
    <Container>
      <PrimaryHeading>Nuestras Marcas</PrimaryHeading>
    </Container>
    <div class="bg-white p-4">
      <Container>
        <MarcasSlider />
      </Container>
    </div>
  </section>
  <section class="py-4 bg-[#705248]">
    <Container>
      <PrimaryHeading>Muebles de interior y exterior</PrimaryHeading>
    </Container>
    <Container>
      <BannerFijoConDosArticulos class="pt-4" />
    </Container>
  </section>
</template>
<style>
</style>
