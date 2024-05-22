<script lang="ts" setup>
import BannerSlider from '../components/site/Home/BannerSlider.vue'
import EsferasRubrosSlider from "../components/site/Home/EsferasRubrosSlider.vue";
import ArticuloSlider from "~/components/site/Home/ArticuloSlider.vue";
import CategoriasPopulares from "~/components/site/Home/CategoriasPopulares.vue";
import MarcasSlider from "~/components/site/Home/MarcasSlider.vue";
import PrimaryHeading from "~/components/site/PrimaryHeading.vue";
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
  <section>
    <Container>
      <CategoriasPopulares />
    </Container>
  </section>
  <section>
    <Container>
      <PrimaryHeading>Nuestras Marcas</PrimaryHeading>
    </Container>
    <div class="bg-white p-4">
      <Container>
        <MarcasSlider />
      </Container>
    </div>
  </section>
</template>
<style>
body {
  min-height: 800vh !important;
}
</style>
