<template>
  <div
    class="route flex border border-white bg-white hover:border-indigo-200 hover:bg-indigo-50 text-indigo-950 hover:text-indigo-700"
    :class="[`items-${alignment}`, `lg:order-${order}`, klass]"
  >
    <NuxtLink class="flex w-full items-center hover:text-indigo-900 p-2" v-if="$route.path !== `/${target}`"
    :class="`items-${alignment}`" :to="`${target}#headline`" >
      <Icon class="mr-2" :name="icon" />
      <span>{{ title }}</span>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{
    order: number
    title?: string
    target?: string
    icon: string
    alignment?: string
    klass?: string
  }>()
</script>
