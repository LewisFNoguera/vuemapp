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
      :class="activePlace === place.id ? 'bg-indigo-600' : 'hover:bg-stone-50'"
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
          @click.self="getRoute(place)"
        >
          ¿Cómo llegar?
        </button>
      </div>
    </li>
  </ul>

  <!-- Empty state, show/hide based on command palette state. -->
  <div
    v-else-if="term.length > 0 && places.length === 0"
    class="px-4 py-14 text-center sm:px-14"
  >
    <svg
      class="mx-auto h-6 w-6 text-gray-400"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
      <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="currentColor" />
      <path
        d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
    <p class="mt-4 text-sm text-gray-900">
      We're sorry. We were not able to find a match.
    </p>
  </div>
</template>
