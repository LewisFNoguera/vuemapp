<script lang="ts" src="./RouteDetails.ts" />
<template>
  <div
    class="bg-indigo-600 fixed bottom-10 left-10"
    v-if="duration && distance"
  >
    <div class="mx-auto max-w-7xl">
      <div class="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-2">
        <div class="bg-indigo-600 px-4 py-6 sm:px-6 lg:px-8">
          <p class="text-sm font-medium leading-6 text-gray-400">Duración</p>
          <p class="mt-2 flex items-baseline gap-x-2">
            <span class="text-4xl font-semibold tracking-tight text-white">
              {{ duration }}</span
            >
            <span class="text-sm text-gray-400"> Minutos </span>
          </p>
        </div>

        <div class="bg-indigo-600 px-4 py-6 sm:px-6 lg:px-8">
          <p class="text-sm font-medium leading-6 text-gray-400">Distancia</p>
          <p class="mt-2 flex items-baseline gap-x-2">
            <span class="text-4xl font-semibold tracking-tight text-white">
              {{ distance }}</span
            >
            <span class="text-sm text-gray-400"> Kms </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
