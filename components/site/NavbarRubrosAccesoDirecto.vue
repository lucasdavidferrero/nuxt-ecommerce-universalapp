<script setup lang="ts">
import { SfButton } from "@storefront-ui/vue";
import type { MenuAccesoDirecto } from "~/components/site/Navbar.types";
import { textoPrimerLetraMayusculaRestoMinuscula } from "~/utils/textFormatUtils";


const menuAccesoDirecto: MenuAccesoDirecto[] = [
  { uid: '00002', label: 'Televisores', iconoURL: 'https://firebasestorage.googleapis.com/v0/b/cloudfunctions-express-templat.appspot.com/o/iconosAccesoDirecto%2FAire.svg?alt=media&token=7f612054-251f-4392-9896-a0f94cb27840', link: '' },
  /*{ uid: '00008', label: 'Celulares', iconoURL: '/iconosAccesosDirectos/Celular.svg', link: '' },
  { uid: '00011', label: 'Aires', iconoURL: '/iconosAccesosDirectos/Aire.svg', link: '' },
  { uid: '00013', label: 'Notebooks', iconoURL: '/iconosAccesosDirectos/Notebook.svg', link: ''},
  { uid: '00088', label: 'Heladeras', iconoURL: '/iconosAccesosDirectos/Heladera.svg', link: ''},
  { uid: '00990', label: 'Lavarropas', iconoURL: '/iconosAccesosDirectos/Lavarropas.svg', link: ''},
  { uid: '00345', label: 'Cocinas', iconoURL: '/iconosAccesosDirectos/Cocina.svg', link: ''},
  { uid: '99889', label: 'Audio', iconoURL: '/iconosAccesosDirectos/Audio.svg', link: ''}*/
]

async function getImage (iconoURL: string) {
  const result = await useFetch(iconoURL)
  return result.data.value
}
</script>

<template>
  <li v-for="menuItem in menuAccesoDirecto">
    <SfButton
        variant="tertiary"
        class="group mr-2 !text-neutral-900 hover:!bg-neutral-200 hover:!text-neutral-700 active:!bg-neutral-300 active:!text-neutral-900"
        @click=""
    >
      <div class="flex">
        <object
            type="image/svg+xml"
            class="text-red-500 w-10 h-10"
            :data="menuItem.iconoURL"
        ></object>
        <span>{{ textoPrimerLetraMayusculaRestoMinuscula(menuItem.label)}}</span>
      </div>

      <!--<SfIconChevronRight
          class="rotate-90 text-neutral-500 group-hover:text-neutral-700 group-active:text-neutral-900"
      />-->
    </SfButton>
  </li>
</template>

<style scoped>

</style>
