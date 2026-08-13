<template>
  <div
    class="route flex border border-indigo-300 bg-indigo-100 text-indigo-700 rounded-lg"
    :class="'items-' + alignment + ' lg:order-' + order + (klass ? ' ' + klass : ' ')"
  >
    <NuxtLink :to="target" v-if="$route.path !== '/' + target" class="flex w-full items-center hover:text-indigo-900 p-2"
    :class="'items-' + alignment">
      <Icon :name="icon" class="mr-2" />
      <span>{{ title }}</span>
    </NuxtLink>
    <span v-else class="flex items-center w-full p-2">
      <Icon :name="icon" class="mr-2" />
      <span>{{ title }}</span>
    </span>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{
    order: number
    title?: string
    target?: string
    icon: string
    alignment?: string
    klass?: boolean
  }>()
</script>
