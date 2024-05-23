<script lang="ts" setup>
import { ref, onBeforeMount, onBeforeUnmount } from "vue";
import NavbarV2 from "~/components/site/NavbarV2.vue";
import Footer from '~/components/site/Footer.vue'

const isSticky = ref(false)
const headerRef = ref<HTMLDivElement>()
const firstDivisionAfterNavbarRef = ref<HTMLDivElement>()
function handleScroll () {
  if (firstDivisionAfterNavbarRef.value) {
    const scrollPosition = window.scrollY
    const viewportHeight = window.innerHeight;
    const firstSectionHeight = firstDivisionAfterNavbarRef.value.clientHeight
    const percentage = 0.40
    const stickyPoint = viewportHeight * percentage
    if (scrollPosition > stickyPoint) {
      isSticky.value = true
    } else {
      isSticky.value = false
    }
  }
}

onBeforeMount(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
    <NuxtLoadingIndicator />
    <div>
        <NavbarV2 :class="{ 'sticky-nav': isSticky }" ref="headerRef" />
        <div ref="firstDivisionAfterNavbarRef">
            <slot></slot>
        </div>
        <Footer/>
    </div>
</template>
<style scoped>
.sticky-nav {
  @apply fixed z-20 top-0 start-0;
}
</style>
<style>
body {
  @apply bg-gray-100;
}
</style>
