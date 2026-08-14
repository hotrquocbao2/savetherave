<template>
  <header class="grid grid-cols-1 gap-4 lg:grid-cols-3 fl-px-2/8 fl-py-4/16 max-w-7xl mx-auto">
    <div class="logo lg:order-4 lg:col-span-3 flex lg:justify-center fl-mb-4/16 lg:mb-0 lg:fl-py-4/16">
      <h1
        class="font-black fl-text-6xl/9xl text-indigo-700 flex flex-col font-head uppercase lg:text-center lg:items-center lg:rotate-340">
        <NuxtLink class="lg:w-min block" to="/" v-if="$route.path !== '/'" >
          Save The Rave
        </NuxtLink>
        <span class="lg:w-min block" v-else>Save The Rave</span>
        <span class="font-sans fl-text-lg/4xl lg:fl-text-lg/2xl block mt-4">Tanzbares Leben für Alle</span>
      </h1>
    </div>
    <HeaderButton 
      alignment="center" icon="lucide:book-open" order="1" target="/selbstverstaendnis" title="Selbstverständnis" />
    <HeaderButton alignment="center" icon="lucide:megaphone" order="2" target="/forderungen" title="Forderungen" />
    <HeaderButton alignment="center" icon="lucide:user-plus" order="3" target="/mitmachen" title="Mitmachen" />
    <!-- <HeaderButton order="4" title="Route" target="/route" icon="lucide:map" alignment="center" /> -->
    <HeaderButton icon="simple-icons:instagram" klass="lg:col-start-2" order="5" 
      target="https://www.instagram.com/savetherave.ffm" title="@savetherave.ffm"/>
  </header>
</template>

<style>
header {
  grid-template-rows: auto auto auto;
}
</style>
