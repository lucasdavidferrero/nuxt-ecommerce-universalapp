<script lang="ts" setup>
import { ref } from 'vue'
import NavbarExtendido from './NavbarExtendido.vue'
import StorefrontIcon from 'assets/icons/storefront1.svg'
import {
  SfButton,
  SfIconShoppingCart,
  SfIconMenu,
  SfInput,
  SfIconSearch
} from '@storefront-ui/vue';

const actionItems = [
  {
    icon: SfIconShoppingCart,
    ariaLabel: 'Cart',
    role: 'button',
    label: '',
  },
  {
    icon: StorefrontIcon,
    ariaLabel: 'Sucursales',
    role: 'button',
    label: '',
  },/*
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
    <div>
    <header class="flex justify-center w-full py-2 lg:py-5 bg-white border-b border-neutral-200">
    <div class="container mx-auto px-4 flex flex-wrap lg:flex-nowrap items-center flex-row justify-start h-full">
      <NuxtLink
        to="/"
        aria-label="SF Homepage"
        class="inline-block mr-4 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
      >
        <picture>
          <!--<source srcset="~/public/img/logoMCHogar.png" media="(min-width: 768px)" class="w-1" />-->
          <img
            src="/img/logoMCHogar.png"
            alt="Sf Logo"
            class="w-[175px] md:w-[200px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px]"
          />
        </picture>
      </NuxtLink>
      <!--<SfButton
        aria-label="Open categories"
        class="text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900 lg:hidden order-first lg:order-1 mr-4"
        square
        variant="tertiary"
      >
        <SfIconMenu />
      </SfButton>-->
      <!--<SfButton
        class="hidden lg:flex text-white hover:text-white active:text-white hover:bg-primary-800 active:bg-primary-900 lg:mr-4"
        variant="tertiary"
      >
        <NuxtLink class="hidden lg:flex whitespace-nowrap" to="/productos">Productos</NuxtLink>
      </SfButton>-->
      <form
          role="search"
          class="hidden md:flex flex-[100%] mt-2 md:mt-0 md:ml-10 pb-2 md:pb-0"
          @submit.prevent="search"
      >
        <SfInput
            v-model="inputValue"
            type="search"
            class="[&::-webkit-search-cancel-button]:appearance-none"
            placeholder="Buscar"
            wrapper-class="flex-1 h-10 pr-0"
            size="base"
        >
          <template #suffix>
              <span class="flex items-center">
                <SfButton
                    variant="tertiary"
                    square
                    aria-label="Buscar"
                    type="submit"
                    class="rounded-l-none hover:bg-transparent active:bg-transparent"
                >
                  <SfIconSearch />
                </SfButton>
              </span>
          </template>
        </SfInput>
      </form>
      <nav class="flex-1 flex justify-end lg:order-last lg:ml-4">
        <div class="flex flex-row flex-nowrap">
          <SfButton
              class="mr-2 rounded-md bg-transparent flex justify-center	items-center"
              aria-label="Sucursales"
              variant="secondary"
              square
          >
            <StorefrontIcon class="text-2xl !mb-0"></StorefrontIcon>
          </SfButton>
          <SfButton
            class="rounded-md bg-primary-800 hover:bg-primary-900"
            aria-label="Carrito de compras"
            variant="primary"
            square
          >
            <template #prefix>
              <Component :is="SfIconShoppingCart" />
            </template>
          </SfButton>
        </div>
      </nav>
    </div>
  </header>
      <NavbarExtendido>

      </NavbarExtendido>
    </div>
</template>
