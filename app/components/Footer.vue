<template>
  <footer class="grid grid-cols-2 p-4 max-w-7xl mx-auto">
    <p>© {{ new Date().getFullYear() }} Save the Rave</p>
    <NuxtLink to="/impressum" class="text-right hover:text-indigo-700">
      Impressum
    </NuxtLink>
  </footer>
</template>
