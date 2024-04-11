<script lang="ts" src="./SearchBarController.ts" />

<template>
  <div class="fixed left-10 top-5 max-w-xl">
    <div class="relative" role="dialog" aria-modal="true">
      <div class="inset-0 z-10 overflow-y-auto p-4 sm:p-6">
        <div
          class="max-w-xl transform rounded-xl bg-white p-2 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
        >
          <input
            type="text"
            class="w-full rounded-md border-0 bg-gray-100 px-4 py-2.5 text-gray-900 focus:ring-0 sm:text-sm"
            placeholder="Search place..."
            v-model="searchTerm"
          />

          <!-- Results, show/hide based on command palette state. -->
          <SearchResults :searchTerm="searchTerm" />
        </div>
      </div>
    </div>
  </div>
</template>
