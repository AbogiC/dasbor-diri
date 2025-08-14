<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">Personal Dashboard</h1>
      </div>
    </header>

    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="space-y-6">
        <TodoList />
        <NotesSection />
      </div>
    </main>
  </div>
</template>

<script setup>
import TodoList from "./TodoList.vue";
import NotesSection from "./NotesSection.vue";
</script>
