<script lang="ts" setup>
interface Props {
    src: string;
    poster?: string;
    loop?: boolean;
    muted?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    loop: true,
    muted: true,
});

const containerRef = ref<HTMLElement | null>(null);
const videoRef = ref<HTMLVideoElement | null>(null);
const isVisible = ref(false);

let observer: IntersectionObserver | null = null;

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    isVisible.value = true;
                    videoRef.value?.play().catch(() => { });
                } else {
                    videoRef.value?.pause();
                }
            }
        },
        { rootMargin: "200px" },
    );

    if (containerRef.value) observer.observe(containerRef.value);
});

onBeforeUnmount(() => {
    observer?.disconnect();
});
</script>

<template>
    <div class="lazy-video" ref="containerRef">
        <video autoplay playsinline preload="none" v-if="isVisible" ref="videoRef" :loop="props.loop"
            :muted="props.muted" :src="props.src" />
    </div>
</template>

<style scoped>
.lazy-video {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
}

.lazy-video video {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>
