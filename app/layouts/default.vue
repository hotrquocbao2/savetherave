<template>
  <div>
    <Header />
    <main class="fl-px-2/8 fl-py-4/16">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
</script>
