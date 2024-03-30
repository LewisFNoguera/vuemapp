<script lang="ts" src="./SearchResultsController.ts" />

<template>
  <div v-if="isLoadingPlaces" class="flex text-center justify-center py-5">
    <svg
      class="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  </div>
  <ul
    v-else-if="places.length > 0"
    role="list"
    class="divide-y divide-gray-200"
  >
    <li
      v-for="place in places"
      :key="place.id"
      class="py-3 px-6 cursor-pointer"
      :class="activePlace === place.id ? 'bg-violet-700' : 'hover:bg-stone-50'"
      @click="onPlaceClicked(place)"
    >
      <div
        class="font-bold text-md mb-1"
        :class="activePlace === place.id ? 'text-white' : 'text-gray-700'"
      >
        {{ place.text_es }}
      </div>
      <p
        class="text-xs"
        :class="activePlace === place.id ? 'text-white' : 'text-gray-700'"
      >
        {{ place.place_name_es }}
      </p>
      <div class="pt-3 pb-2 flex justify-end">
        <button
          type="button"
          class="rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
          :class="activePlace === place.id ? 'bg-white' : 'bg-indigo-600'"
        >
          ¿Cómo llegar?
        </button>
      </div>
    </li>
  </ul>
</template>
