<script lang="ts" setup>
import { ref } from 'vue';
import {
  SfButton,
  SfIconShoppingCart,
  SfIconMenu,
} from '@storefront-ui/vue';

const actionItems = [
  {
    icon: SfIconShoppingCart,
    ariaLabel: 'Cart',
    role: 'button',
    label: '',
  },
  /*{
    icon: SfIconFavorite,
    ariaLabel: 'Wishlist',
    role: 'button',
    label: '',
  },
  {
    label: 'Log in',
    icon: SfIconPerson,
    ariaLabel: 'Log in',
    role: 'login',
  },*/
];

const inputValue = ref('');

const search = () => {
  alert(`Successfully found 10 results for ${inputValue.value}`);
};
</script>
<template>
    <header class="flex justify-center w-full py-2 px-4 lg:py-5 lg:px-6 bg-primary-700 border-b border-neutral-200">
    <div class="flex flex-wrap lg:flex-nowrap items-center flex-row justify-start h-full max-w-[1536px] w-full">
      <NuxtLink
        to="/"
        aria-label="SF Homepage"
        class="inline-block mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm shrink-0"
      >
        <picture>
          <source srcset="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_white.svg" media="(min-width: 768px)" />
          <img
            src="https://storage.googleapis.com/sfui_docs_artifacts_bucket_public/production/vsf_logo_sign_white.svg"
            alt="Sf Logo"
            class="w-8 h-8 md:h-6 md:w-[176px] lg:w-[12.5rem] lg:h-[1.75rem]"
          />
        </picture>
      </NuxtLink>
      <SfButton
        aria-label="Open categories"
        class="text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900 lg:hidden order-first lg:order-1 mr-4"
        square
        variant="tertiary"
      >
        <SfIconMenu />
      </SfButton>
      <SfButton
        class="hidden lg:flex text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900 lg:mr-4"
        variant="tertiary"
      >
        <NuxtLink class="hidden lg:flex whitespace-nowrap" to="/productos">Productos</NuxtLink>
      </SfButton>
      <nav class="flex-1 flex justify-end lg:order-last lg:ml-4">
        <div class="flex flex-row flex-nowrap">
          <SfButton
            v-for="actionItem in actionItems"
            :key="actionItem.ariaLabel"
            class="text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900 mr-2 -ml-0.5 rounded-md"
            :aria-label="actionItem.ariaLabel"
            variant="tertiary"
            square
          >
            <template #prefix>
              <Component :is="actionItem.icon" />
            </template>
            <span v-if="actionItem.role === 'login'" class="hidden xl:inline-flex whitespace-nowrap">{{
              actionItem.label
            }}</span>
          </SfButton>
        </div>
      </nav>
    </div>
  </header>
</template>
