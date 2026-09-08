<template>
<div
    class="logo relative z-10 lg:order-3 lg:row-start-2 lg:col-start-1 lg:col-span-3 flex lg:justify-center lg:fl-py-4/16"
>
    <h1
        class="font-black fl-text-6xl/9xl text-indigo-700 flex flex-col font-head uppercase lg:text-center lg:items-center lg:rotate-340"
    >
        <NuxtLink
            class="lg:w-min block"
            to="/"
            v-if="$route.path !== '/'"
        >
            Save The Rave
        </NuxtLink>
        <span class="lg:w-min block" v-else>Save The Rave</span>
        <span
            class="font-sans fl-text-lg/4xl lg:fl-text-lg/2xl block mt-4"
            >Tanzbares Leben für Alle</span
        >
    </h1>
</div>
</template>
