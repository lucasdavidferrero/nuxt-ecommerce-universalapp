<script setup lang="ts">
import { SfDropdown, SfButton, SfIconMenu, SfListItem, SfIconChevronRight } from '@storefront-ui/vue';
import NavbarRubrosAccesoDirecto from "~/components/site/NavbarRubrosAccesoDirecto.vue";
import type { MenuNode } from "~/components/site/Navbar.types";
import { textoPrimerLetraMayusculaRestoMinuscula } from "~/utils/textFormatUtils";
import {useDisclosure, useDropdown, useTrapFocus} from "@storefront-ui/vue";
import {computed, ref} from "vue";

const props = defineProps<{
  content: MenuNode
}>()
const findNode = (keys: string[], node: MenuNode): MenuNode => {
  if (keys.length > 1) {
    const [currentKey, ...restKeys] = keys;
    return findNode(restKeys, node.children?.find((child) => child.key === currentKey) || node);
  } else {
    return node.children?.find((child) => child.key === keys[0]) || node;
  }
};
const { close, open, isOpen } = useDisclosure();

const openMenu = (menuType: string[]) => {
  // selectedCategoryKey.value = menuType[0] // posible bug aca. puede venir un array vacío.
  activeNode.value = menuType;
  open();
};
const megaMenuRef = ref();
const triggerRefs = ref();
const activeNode = ref<string[]>([]);
const activeMenu = computed(() => findNode(activeNode.value, props.content));

function closeMenu () {
  close()
}
</script>

<template>
  <nav ref="floatingRef">
     <ul class="hidden md:flex py-2">
       <li>
         <SfDropdown v-model="isOpen" placement="bottom-start">
           <template #trigger>
             <SfButton
                 ref="triggerRefs"
                 variant="tertiary"
                 class="group mr-2 !text-neutral-900 hover:!bg-neutral-200 hover:!text-neutral-700 active:!bg-neutral-300 active:!text-neutral-900"
                 @mouseenter="open"
                 @click="open"
             >
               <SfIconMenu
                   class="text-neutral-500 group-hover:text-neutral-700 group-active:text-neutral-900 "></SfIconMenu>
               <span>Categorías</span>
             </SfButton>
           </template>
           <ul class="p-2 rounded-md border border-neutral-400 bg-neutral-100 border-solid flex shadow-2xl container px-4" @mouseleave="closeMenu">
             <!-- Categorías -->
             <div class="w-3/12">
               <SfListItem
                   v-for="(menuNode, index) in props.content.children"
                   :key="menuNode.key"
                   class="rounded-lg"
                   :class="(activeNode[0] === menuNode.key) ? 'bg-slate-300 hover:bg-slate-300': ''"
                   :href="menuNode.value.link"
                   tag="a"
                   @mouseenter="openMenu([menuNode.key])">
                 <span class="break-words">
                   {{ textoPrimerLetraMayusculaRestoMinuscula(menuNode.value.label) }}
                 </span>
                 <template #suffix><SfIconChevronRight /></template>
               </SfListItem>
             </div>
             <!-- Rubros y Familias Links -->
             <div v-if="isOpen && activeNode.length === 1"
                  class="hidden md:grid gap-x-4 grid-cols-4 py-6 left-0 right-0 outline-none w-9/12"
                  ref="megaMenuRef">
               <template v-for="node in activeMenu.children">
                 <div class="flex-col">
                   <div>
                     <p
                         class="typography-text-base font-medium text-neutral-900 whitespace-nowrap px-4 py-1.5 border-b border-b-neutral-200 border-b-solid"
                     >
                       <NuxtLink :to="node.value.link" class="hover:text-primary-600 hover:underline">{{ node.value.label }}</NuxtLink>
                     </p>
                   </div>
                   <ul class="mt-2">
                     <li v-for="child in node.children" :key="child.key">
                       <SfListItem tag="a" size="sm" :href="child.value.link"
                                   class="typography-text-sm py-1.5 hover:bg-slate-300 rounded-lg">
                         {{ child.value.label }}
                       </SfListItem>
                     </li>
                   </ul>
                 </div>
               </template>
             </div>

           </ul>
         </SfDropdown>
       </li>
       <NavbarRubrosAccesoDirecto />
     </ul>
   </nav>
</template>

<style scoped>

</style>
