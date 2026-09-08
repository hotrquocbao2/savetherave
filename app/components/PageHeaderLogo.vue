<template>
    <NuxtLink
        class="text-indigo-700 fl-gap-1/3 grid logo relative z-10 lg:order-3 lg:row-start-2 lg:col-start-1 lg:col-span-3 text-trim-both"
        to="/"
    >
        <div
            class="grid auto-cols-min grid-flow-col fl-gap-1/3 *:font-black uppercase fl-text-2xl/7xl"
        >
            <h1
                class="*:bg-white w-min order-2 *:fl-px-1/3 *:fl-py-0.5/1.5 *:inline-block"
            >
                <span>Save</span>
                <span>The</span>
                <span>Rave</span>
            </h1>
            <time class="sr-only" datetime="2026-09-19" />
            <div
                aria-hidden="true"
                class="font-mono *:bg-white w-min order-1 *:fl-px-1/3 *:fl-py-0.5/1.5 *:inline-block"
            >
                <span>19</span>
                <span>09</span>
                <span>26</span>
            </div>
        </div>
        <span
            class="fl-text-lg/3xl block mr-auto bg-white fl-px-1/2 fl-py-0.5/1 h-min"
            >Tanzbares Leben für Alle</span
        >
        <div
            class="fl-text-lg/3xl grid h-min gap-0.5 *:bg-white *:fl-px-1/2 *:fl-py-0.5/1 *:inline-block *:mr-auto"
        >
            <span>
                <b>Tanzdemo</b>
            </span>
            <br />
            <span>Hauptwache (Frankfurt)</span>
            <br />
            <span>Start 12:00 Uhr</span>
        </div>
    </NuxtLink>
</template>
