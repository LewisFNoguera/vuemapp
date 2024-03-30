<script lang="ts" src="./SearchBarController.ts" />

<template>
  <div class="fixed left-10 top-5 w-full max-w-xs">
    <div class="bg-white shadow-md rounded p-1 shadow">
      <div>
        <input
          class="appearance-none border-0 rounded w-full py-2 px-3 text-gray-700 leading-tight"
          id="username"
          type="text"
          placeholder="Buscar lugares..."
          v-model="searchTerm"
        />
      </div>
    </div>

    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white mt-5">
      <SearchResults />
    </div>
  </div>
</template>
