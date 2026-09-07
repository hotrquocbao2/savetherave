<template>
    <header
        class="fl-mt-2/8 grid grid-cols-1 gap-4 lg:grid-cols-3 fl-px-2/8 fl-py-2/8 max-w-7xl mx-auto relative"
    >
        <div
            class="logo relative z-10 lg:order-3 lg:col-span-3 flex lg:justify-center lg:fl-py-4/16"
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
        <HeaderButton
            alignment="center"
            icon="lucide:book-open"
            klass="relative z-10"
            target="/selbstverstaendnis"
            title="Selbstverständnis"
            :order="1"
        />
        <HeaderButton
            alignment="center"
            icon="lucide:megaphone"
            klass="relative z-10"
            target="/forderungen"
            title="Forderungen"
            :order="2"
        />
        <HeaderButton
            alignment="center"
            icon="lucide:user-plus"
            klass="relative z-10 lg:row-start-1 lg:col-start-3"
            target="/mitmachen"
            title="Mitmachen"
            :order="3"
        />
        <HeaderButton
            alignment="center"
            icon="lucide:map"
            klass="relative z-10"
            target="/route"
            title="Route"
            :order="4"
        />
        <HeaderButton
            icon="simple-icons:instagram"
            klass="relative z-10 lg:row-start-3 lg:col-start-3"
            target="https://www.instagram.com/savetherave.ffm"
            title="@savetherave.ffm"
            :order="5"
        />

        <NuxtImg
            class="object-cover absolute inset-0 -z-10 w-full h-full mix-blend-multiply bg-blend-multiply place-self-center self-center"
            src="/media/header-background.png"
            alt=""
            aria-hidden="true"
        />

        <div class="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-18 xl:grid-cols-24 lg:col-span-3 order-7">
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/tokonoma.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/kunstfreiheit.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/club_cherry.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/momem.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/gusti.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/saphic_pearls.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/mitte_der_gesellschaft.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/4pearls.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/club_loyal.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/more_accurate_audio_emissions.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/mousonturm.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/noble_noise.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/iloveu.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/kaozz.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/safe_party_people.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/thw.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/aang_sama.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/siks.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/more_accurate_consultants.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/lorraine_schwarz.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/logos/toxic_family.png" />
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    grid-template-rows: auto auto auto;
    box-shadow: inset 0 0 24px 32px rgba(255, 255, 255, 1);
}

.grid__item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    mix-blend-mode: multiply;
}
</style>
