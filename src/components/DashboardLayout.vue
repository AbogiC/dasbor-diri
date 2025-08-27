<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Personal Dashboard</h1>
      </div>
    </header>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <nav class="mb-6 flex gap-4 text-blue-600">
        <RouterLink to="/" class="hover:underline">Home</RouterLink>
        <RouterLink to="/todos" class="hover:underline">Todos</RouterLink>
        <RouterLink to="/notes" class="hover:underline">Notes</RouterLink>
        <RouterLink to="/profile" class="hover:underline"
          >My Profile</RouterLink
        >
      </nav>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
