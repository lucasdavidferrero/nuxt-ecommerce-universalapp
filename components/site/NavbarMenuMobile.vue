<script setup lang="ts">

import {
  SfButton,
  SfCounter,
  SfDrawer,
  SfIconArrowBack,
  SfIconChevronRight,
  SfIconClose, SfIconMenu,
  SfListItem, useDisclosure
} from "@storefront-ui/vue";
import { textoPrimerLetraMayusculaRestoMinuscula } from "~/utils/textFormatUtils";
import { computed, ref } from "vue";
import type { MenuNode } from "~/components/site/Navbar.types";

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
const drawerRef = ref();
const megaMenuRef = ref();
const triggerRefs = ref();
const activeNode = ref<string[]>([]);
const activeMenu = computed(() => findNode(activeNode.value, props.content));
const openMenu = (menuType: string[]) => {
  activeNode.value = menuType;
  open();
};
const goBack = () => {
  activeNode.value = activeNode.value.slice(0, activeNode.value.length - 1);
};

const goNext = (key: string) => {
  activeNode.value = [...activeNode.value, key];
};
</script>

<template>
  <teleport to="#burgerMegaMenuBtnMobileTeleport">
    <SfButton
        variant="tertiary"
        square
        aria-label="Cerrar menu"
        class="block lg:hidden mr-5 bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
        @click="openMenu([])"
    >
      <SfIconMenu class="text-white" />
    </SfButton>
  </teleport>
  <div v-if="isOpen" class="lg:hidden fixed inset-0 bg-neutral-500 bg-opacity-50" />
  <SfDrawer
      ref="drawerRef"
      v-model="isOpen"
      placement="left"
      class="lg:hidden right-[50px] max-w-[376px] bg-white overflow-y-auto"
  >
    <nav>
      <div class="flex items-center justify-between p-4 border-b border-b-neutral-200 border-b-solid">
        <p class="typography-text-base font-medium">Buscar artículos</p>
        <SfButton variant="tertiary" square aria-label="Close menu" class="ml-2" @click="close()">
          <SfIconClose class="text-neutral-500" />
        </SfButton>
      </div>
      <ul class="mt-2 mb-6">
        <li v-if="activeMenu.key !== 'root'">
          <SfListItem
              size="lg"
              tag="button"
              type="button"
              class="border-b border-b-neutral-200 border-b-solid"
              @click="goBack()"
          >
            <div class="flex items-center">
              <SfIconArrowBack class="text-neutral-500" />
              <p class="ml-5 font-medium">{{ textoPrimerLetraMayusculaRestoMinuscula(activeMenu.value.label) }}</p>
            </div>
          </SfListItem>
        </li>
        <template v-for="node in activeMenu.children" :key="node.value.label">
          <li v-if="node.isLeaf">
            <SfListItem size="lg" tag="a" :href="node.value.link" class="first-of-type:mt-2">
              <div class="flex items-center">
                <p class="text-left">{{ textoPrimerLetraMayusculaRestoMinuscula(node.value.label) }}</p>
                <SfCounter class="ml-2">{{ node.value.counter }}</SfCounter>
              </div>
            </SfListItem>
          </li>
          <li v-else>
            <SfListItem size="lg" tag="button" type="button" @click="goNext(node.key)">
              <div class="flex justify-between items-center">
                <div class="flex items-center">
                  <p class="text-left">{{ textoPrimerLetraMayusculaRestoMinuscula(node.value.label) }}</p>
                  <SfCounter class="ml-2">{{ node.value.counter }}</SfCounter>
                </div>
                <SfIconChevronRight class="text-neutral-500" />
              </div>
            </SfListItem>
          </li>
        </template>
      </ul>
    </nav>
  </SfDrawer>
</template>

<style scoped>

</style>
