<template>
    <div
        class="route flex border hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
        :class="[`items-${alignment}`, `lg:order-${order}`, $route.path === `${url}` ? 'bg-indigo-100 border-indigo-200 text-indigo-800 pointer-events-none' : 'border-white bg-white  text-indigo-950', klass]"
    >
        <NuxtLink
            class="flex w-full items-center p-2"
            :class="`items-${alignment}`"
            :external="extern"
            :target="extern ? '_blank' : '_self'"
            :to="extern ? url : `${url}#headline`"
        >
            <Icon class="mr-2" :name="icon" />
            <span>{{ title }}</span>
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    order: number;
    title?: string;
    url?: string;
    icon: string;
    alignment?: string;
    extern?: boolean;
    klass?: string;
    highlight?: boolean;
}>();
</script>
