<script setup lang="ts">
import { SfButton } from "@storefront-ui/vue";
import type { MenuAccesoDirecto } from "~/components/site/Navbar.types";


const menuAccesoDirecto: MenuAccesoDirecto[] = [
  { uid: '00002', label: 'Televisores', iconoNombre: 'ic:round-tv', link: '#listadoTelevisores' },
  { uid: '00008', label: 'Celulares', iconoNombre: 'bi:phone', link: '#listadoCelulares' },
  { uid: '00011', label: 'Aires', iconoNombre: 'iconoir:air-conditioner', link: '#listadoAires' },
  { uid: '00013', label: 'Notebooks', iconoNombre: 'bi:laptop', link: '#listadoNotebooks'},
  { uid: '00088', label: 'Heladeras', iconoNombre: 'ep:refrigerator', link: '#listadoHeladeras'},
  { uid: '00990', label: 'Lavarropas', iconoNombre: 'lucide:washing-machine', link: '#listadoLavarropas'},
  { uid: '00345', label: 'Cocinas', iconoNombre: 'ph:oven-light', link: '#listadoCocinas'},
  { uid: '99889', label: 'Audio', iconoNombre: 'mi:speakers', link: '#listadoAudio'},
  { uid: '99889', label: 'MC SALE', iconoNombre: 'flowbite:sale-percent-outline', link: '#listadoMcSale'}
]

</script>

<template>
  <li v-for="menuItem in menuAccesoDirecto"class="flex-1">
    <SfButton
        variant="tertiary"
        class="group mr-2 !text-neutral-900 hover:!bg-neutral-200 hover:!text-neutral-700 active:!bg-neutral-300 active:!text-neutral-900 w-full"
        tag="a"
        :href="menuItem.link"
    >
      <div class="flex flex-col">
        <div class="flex justify-center">
          <Icon :name="menuItem.iconoNombre" class="text-primary-800 text-2xl" />
        </div>
        <span>{{ menuItem.label }}</span>
      </div>

      <!--<SfIconChevronRight
          class="rotate-90 text-neutral-500 group-hover:text-neutral-700 group-active:text-neutral-900"
      />-->
    </SfButton>
  </li>
</template>

<style scoped>

</style>
