<template>
    <header
        class="grid grid-cols-1 gap-4 lg:grid-cols-3 fl-px-2/8 fl-py-2/8 max-w-7xl mx-auto relative"
    >
        <PageHeaderLogo />
        <PageHeaderButton
            alignment="center"
            icon="lucide:book-open"
            klass="relative z-10"
            title="Selbstverständnis"
            url="/selbstverstaendnis"
            :order="1"
        />
        <PageHeaderButton
            alignment="center"
            icon="lucide:megaphone"
            klass="relative z-10"
            title="Forderungen"
            url="/forderungen"
            :order="2"
        />
        <PageHeaderButton
            alignment="center"
            icon="lucide:user-plus"
            klass="relative z-10 lg:row-start-1 lg:col-start-3"
            title="Mitmachen"
            url="/mitmachen"
            :order="3"
        />
        <PageHeaderButton
            alignment="center"
            icon="lucide:map"
            klass="relative z-10 lg:row-start-3 lg:col-start-1"
            title="Route"
            url="/route"
            :order="5"
        />
        <PageHeaderButton
            icon="lucide:heart"
            klass="relative z-10 lg:row-start-3"
            title="Support Us"
            url="https://gofund.me/27425cbf5"
            :extern="true"
            :order="6"
        />
        <PageHeaderButton
            icon="simple-icons:instagram"
            klass="relative z-10 lg:row-start-3"
            title="@savetherave.ffm"
            url="https://www.instagram.com/savetherave.ffm"
            :extern="true"
            :order="7"
        />

        <NuxtImg
            alt=""
            aria-hidden="true"
            class="object-cover absolute inset-0 -z-10 w-full h-full mix-blend-multiply bg-blend-multiply pointer-none place-self-center self-center"
            src="/media/header-background.png"
        />

        <div
            aria-hidden="true"
            class="grid logos grid-cols-4 md:grid-cols-6 lg:grid-cols-18 lg:col-span-3 order-7"
        >
            <div class="grid__item col-span-2 row-span-2 lg:col-span-4">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/savetherave.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/tokonoma.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/kunstfreiheit.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/club_cherry.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/momem.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/gusti.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/saphic_pearls.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/mitte_der_gesellschaft.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/4pearls.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/club_loyal.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/more_accurate_audio_emissions.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/mousonturm.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/noble_noise.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/iloveu.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/kaozz.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/safe_party_people.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture alt="" loading="lazy" src="/media/logos/thw.png" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/aang_sama.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/siks.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/more_accurate_consultants.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/lorraine_schwarz.png"
                />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/toxic_family.png"
                />
            </div>
            <div class="grid__item lg:col-span-2 grayscale">
                <NuxtPicture
                    alt=""
                    loading="lazy"
                    src="/media/logos/nachttanzdemo_giessen.png"
                />
            </div>
        </div>
    </header>
</template>

<style scoped>
header {
    grid-template-rows: auto auto auto;
}

.grid__item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    mix-blend-mode: multiply;
}
</style>
