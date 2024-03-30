<script lang="ts" src="./SearchResultsController.ts" />

<template>
  <div class="flex text-center justify-center py-5">
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
  <ul role="list" class="divide-y divide-gray-200">
    <li
      v-for="item in [1, 2, 3]"
      :key="item"
      class="py-3 px-6 cursor-pointer hover:bg-stone-50"
    >
      <div class="font-bold text-md mb-1">The Coldest Sunset</div>
      <p class="text-gray-700 text-xs">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem dolor sit
        amet, consectetur adipisicing elit.
      </p>
      <div class="pt-3 pb-2 flex justify-end">
        <button
          type="button"
          class="rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
        >
          ¿Cómo llegar?
        </button>
      </div>
    </li>
  </ul>
</template>
<!-- https://api.mapbox.com/search/searchbox/v1/suggest?q=jamundi&language=es&navigation_profile=driving&proximity=-73.990593,40.740121&origin=-76.54093255716133,3.2620069965603022&session_token=0b351df0-be90-4581-88e8-866dfd100f96&access_token=pk.eyJ1IjoibGV3aXNub2d1ZXJhIiwiYSI6ImNsdWJ6MmV2ODExcnMybG85OXMybHo0YXQifQ._KVWCNeLL-hFSxqHBuB9fA -->
