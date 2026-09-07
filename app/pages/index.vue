<template>
    <div class="max-w-7xl mx-auto">
        <div
            class="space-y-4 grid pretty__grid grid-cols-1 md:grid-cols-3 mb-8"
        >
            <div class="grid__item text-2xl gap-2 flex flex-col lg:col-span-4">
                <p>Was:</p>
                <h2 class="font-bold">Tanzdemo</h2>
            </div>
            <div class="grid__item text-2xl gap-2 flex flex-col lg:col-span-4">
                <p>Wann:</p>
                <h2 class="font-bold">19.09.2026, 12 Uhr</h2>
            </div>
            <div class="grid__item text-2xl gap-2 flex flex-col lg:col-span-4">
                <p>Wo:</p>
                <h2 class="font-bold">Hauptwache (Frankfurt)</h2>
            </div>
        </div>
        <div class="space-y-4 grid pretty__grid grid-cols-1 md:grid-cols-3">
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/PICS.jpg" />
            </div>
            <div class="grid__item lg:col-span-2">
                <VideoLazy src="/media/A01.mp4" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/PICS2.jpg" />
            </div>
            <div class="grid__item lg:col-span-2">
                <VideoLazy src="/media/a02_1.mp4" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/PICS3.jpg" />
            </div>
            <div class="grid__item lg:col-span-2">
                <VideoLazy src="/media/a03.mp4" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/PICS4.jpg" />
            </div>
            <div class="grid__item lg:col-span-2">
                <VideoLazy src="/media/a04_1.mp4" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/PICS5.jpg" />
            </div>
            <div class="grid__item lg:col-span-2">
                <VideoLazy src="/media/a05_1.mp4" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/PICS6.jpg" />
            </div>
            <div class="grid__item lg:col-span-2">
                <VideoLazy src="/media/a06.mp4" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/PICS7.jpg" />
            </div>
            <div class="grid__item lg:col-span-2">
                <VideoLazy src="/media/a07.mp4" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/PICS8.jpg" />
            </div>
            <div class="grid__item lg:col-span-2">
                <VideoLazy src="/media/a08.mp4" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/PICS9.jpg" />
            </div>
            <div class="grid__item lg:col-span-2">
                <VideoLazy src="/media/a09.mp4" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/PICS10.jpg" />
            </div>
            <div class="grid__item lg:col-span-2">
                <VideoLazy src="/media/a010.mp4" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/PICS11.jpg" />
            </div>
            <div class="grid__item lg:col-span-2">
                <VideoLazy src="/media/a11.mp4" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/PICS12.jpg" />
            </div>
            <div class="grid__item lg:col-span-2">
                <NuxtPicture loading="lazy" src="/media/PICS13.jpg" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.grid {
    --gap: 2rem;
    --line-color: black;
    --line-offset: calc(var(--gap) / 2);
    --line-thickness: 2px;

    display: grid;
    grid-template-rows: repeat(3, minmax(0, auto));
    gap: var(--gap);
    overflow: hidden;

    @media screen and (min-width: 768px) {
        grid-template-rows: auto;
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media screen and (min-width: 1024px) {
        grid-template-rows: auto;
        grid-template-columns: repeat(12, minmax(0, 1fr));
    }

    & img {
        width: 100%;
        height: 100%;
        aspect-ratio: 1 / 1;
        object-fit: contain;
    }

    .grid__item {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        text-align: center;
    }

    &.pretty__grid {
        .grid__item {
            &::before,
            &::after {
                position: absolute;
                z-index: 1;
                content: "";
                background-color: var(--line-color);
            }

            &::after {
                inset-block-start: calc(var(--line-offset) * -1);
                inset-inline-start: 0;
                inline-size: 100vw;
                block-size: var(--line-thickness);
            }

            &::before {
                inset-inline-start: calc(var(--line-offset) * -1);
                inline-size: var(--line-thickness);
                block-size: 100vh;
            }
        }
    }
}
</style>
