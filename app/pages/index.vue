<template>
  <div class="max-w-7xl mx-auto">
      <div class="space-y-4 grid grid-cols-1 md:grid-cols-3 mb-8">
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
          <h2 class="font-bold">Hautwache (Frankfurt)</h2>
        </div>
      </div>
    <div class="space-y-4 grid grid-cols-1 md:grid-cols-3">
      <div class="grid__item lg:col-span-2">
        <img loading="lazy"src="/media/PICS.jpg" />
      </div>
      <div class="grid__item lg:col-span-2">
        <video preload="none"  loop src="/media/A01.mp4" autoplay></video>
      </div>
      <div class="grid__item lg:col-span-2">
        <img loading="lazy"src="/media/PICS2.jpg" />
      </div>
      <div class="grid__item lg:col-span-2">
        <video preload="none"  loop src="/media/a02_1.mp4" autoplay></video>
      </div>
      <div class="grid__item lg:col-span-2">
        <img loading="lazy"src="/media/PICS3.jpg" />
      </div>
      <div class="grid__item lg:col-span-2">
        <video preload="none"  loop src="/media/a03.mp4" autoplay></video>
      </div>

      <div class="grid__item lg:col-span-2">
        <img loading="lazy"src="/media/PICS4.jpg" />
      </div>

      <div class="grid__item lg:col-span-2">
        <video preload="none"  loop src="/media/a04_1.mp4" autoplay></video>
      </div>

      <div class="grid__item lg:col-span-2">
        <img loading="lazy"src="/media/PICS5.jpg" />
      </div>
      <div class="grid__item lg:col-span-2">
        <video preload="none"  loop src="/media/a05_1.mp4" autoplay></video>
      </div>

      <div class="grid__item lg:col-span-2">
        <img loading="lazy"src="/media/PICS6.jpg" />
      </div>
      <div class="grid__item lg:col-span-2">
        <video preload="none"  loop src="/media/a06.mp4" autoplay></video>
      </div>

      <div class="grid__item lg:col-span-2">
        <img loading="lazy"src="/media/PICS7.jpg" />
      </div>
      <div class="grid__item lg:col-span-2">
        <video preload="none"  loop src="/media/a07.mp4" autoplay></video>
      </div>

      <div class="grid__item lg:col-span-2">
        <img loading="lazy"src="/media/PICS8.jpg" />
      </div>
      <div class="grid__item lg:col-span-2">
        <video preload="none"  loop src="/media/a08.mp4" autoplay></video>
      </div>

      <div class="grid__item lg:col-span-2">
        <img loading="lazy"src="/media/PICS9.jpg" />
      </div>
      <div class="grid__item lg:col-span-2">
        <video preload="none"  loop src="/media/a09.mp4" autoplay></video>
      </div>

      <div class="grid__item lg:col-span-2">
        <img loading="lazy"src="/media/PICS10.jpg" />
      </div>
      <div class="grid__item lg:col-span-2">
        <video preload="none"  loop src="/media/a010.mp4" autoplay></video>
      </div>

      <div class="grid__item lg:col-span-2">
        <img loading="lazy"src="/media/PICS11.jpg" />
      </div>
      <div class="grid__item lg:col-span-2">
        <video preload="none"  loop src="/media/a11.mp4" autoplay></video>
      </div>

      <div class="grid__item lg:col-span-2">
        <img loading="lazy"src="/media/PICS12.jpg" />
      </div>

      <div class="grid__item lg:col-span-2">
        <img loading="lazy"src="/media/PICS13.jpg" />
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: contain;
  background-color: orange;
}
.grid {
  --gap: 2rem;
  --line-offset: calc(var(--gap) / 2);
  --line-thickness: 2px;
  --line-color: black;

  display: grid;
  grid-template-rows: repeat(3, minmax(0, auto));
  overflow: hidden;
  gap: var(--gap);

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: auto;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-template-rows: auto;
  }
}

.grid__item {
  position: relative;
  text-align: center;
  margin: 0;
}

.grid__item::before,
.grid__item::after {
  content: '';
  position: absolute;
  background-color: var(--line-color);
  z-index: 1;
}

.grid__item::after {
  inline-size: 100vw;
  block-size: var(--line-thickness);
  inset-inline-start: 0;
  inset-block-start: calc(var(--line-offset) * -1);
}

.grid__item::before {
  inline-size: var(--line-thickness);
  block-size: 100vh;
  inset-inline-start: calc(var(--line-offset) * -1);
}
</style>
