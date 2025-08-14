<template>
  <div class="bg-white rounded-lg shadow p-6">
    <h2 class="text-2xl font-bold mb-4">To-Do List</h2>

    <div class="flex mb-4">
      <input
        v-model="newTodo"
        @keyup.enter="addTodo"
        placeholder="Add a new task..."
        class="flex-1 p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        @click="addTodo"
        class="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition"
      >
        Add
      </button>
    </div>

    <ul class="space-y-2">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleTodo"
        @delete="deleteTodo"
        @update="updateTodo"
      />
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTodoStore } from "../stores/todoStore";
import TodoItem from "./TodoItem.vue";

const todoStore = useTodoStore();
const todos = computed(() => todoStore.todos);
const newTodo = ref("");

const addTodo = () => {
  if (newTodo.value.trim()) {
    todoStore.addTodo({
      id: Date.now(),
      text: newTodo.value.trim(),
      completed: false,
    });
    newTodo.value = "";
  }
};

const toggleTodo = (id) => {
  todoStore.toggleTodo(id);
};

const deleteTodo = (id) => {
  todoStore.deleteTodo(id);
};

const updateTodo = (id, text) => {
  todoStore.updateTodo(id, text);
};
</script>
