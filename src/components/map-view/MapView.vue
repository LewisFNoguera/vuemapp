<script lang="ts" src="./MapViewController.ts" />

<template>
  <div
    v-if="!isGeolocationReady"
    class="fixed w-screen h-screen bg-black/80 top-0 left-0 z-[9999] text-white flex justify-center items-center"
  >
    <div class="text-center">
      <h3 class="text-2xl">Espere por favor</h3>
      <small>Preparando mapa...</small>
    </div>
  </div>

  <div
    v-show="isGeolocationReady"
    ref="mapElement"
    class="fixed w-screen h-screen bg-slate-900 top-0 left-0"
  ></div>
</template>
