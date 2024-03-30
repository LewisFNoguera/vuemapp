<script lang="ts" src="./MapViewController.ts" />

<template>
  <div
    v-if="!isGeolocationReady"
    class="fixed w-screen h-screen bg-slate-900 top-0 left-0 z-[9999] text-white flex justify-center items-center"
  >
    <div class="text-center">
      <Vue3Lottie :animationData="astroJSON" :height="600" :width="600" />
      <small>Rendering map...</small>
    </div>
  </div>

  <div
    v-show="isGeolocationReady"
    ref="mapElement"
    class="fixed w-screen h-screen bg-slate-900 top-0 left-0"
  ></div>
</template>
