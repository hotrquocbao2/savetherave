<template>
  <header class="grid grid-cols-1 gap-4 lg:grid-cols-3 fl-px-2/8 fl-py-4/16 max-w-7xl mx-auto">
    <div class="logo lg:order-4 lg:col-span-3 flex lg:justify-center fl-mb-4/16 lg:mb-0 lg:fl-py-4/16">
      <h1 class="font-black fl-text-6xl/9xl text-indigo-700 flex flex-col font-head uppercase lg:text-center lg:items-center lg:rotate-340">
        <NuxtLink v-if="$route.path !== '/'" to="/" class="lg:w-min block">
          Save The Rave
        </NuxtLink>
        <span  class="lg:w-min block" v-else>Save The Rave</span>
        <span class="font-sans fl-text-lg/4xl lg:fl-text-lg/2xl block mt-4">Tanzbares Leben für Alle</span>
      </h1>
    </div>
    <HeaderButton order="1" title="Selbstverständnis" target="/selbstverstaendnis" icon="lucide:book-open" alignment="center" />
    <HeaderButton order="2" title="Forderungen" target="/forderungen" icon="lucide:megaphone" alignment="center" />
    <HeaderButton order="3" title="Mitmachen" target="/mitmachen" icon="lucide:user-plus" alignment="center" />
    <!-- <HeaderButton order="4" title="Route" target="/route" icon="lucide:map" alignment="center" /> -->
    <HeaderButton order="5" klass="lg:col-start-2" title="@savetherave.ffm" target="https://www.instagram.com/savetherave.ffm" icon="simple-icons:instagram"/>
  </header>
</template>

<style>
header {
  grid-template-rows: auto auto auto;
}
</style>
