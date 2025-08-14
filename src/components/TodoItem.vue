<template>
  <li
    class="flex items-center justify-between group p-2 hover:bg-gray-50 rounded"
  >
    <div class="flex items-center space-x-3 flex-1">
      <input
        type="checkbox"
        :checked="todo.completed"
        @change="$emit('toggle', todo.id)"
        class="h-5 w-5 rounded text-blue-500 focus:ring-blue-400"
      />
      <input
        type="text"
        :value="todo.text"
        @input="$emit('update', todo.id, $event.target.value)"
        :class="[
          'flex-1 p-1 border-0 focus:ring-2 focus:ring-blue-500 rounded',
          todo.completed ? 'line-through text-gray-400' : 'text-gray-800',
        ]"
      />
    </div>
    <button
      @click="$emit('delete', todo.id)"
      class="text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition"
    >
      <TrashIcon class="h-5 w-5" />
    </button>
  </li>
</template>

<script setup>
import { TrashIcon } from "@heroicons/vue/24/outline";

defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

defineEmits(["toggle", "delete", "update"]);
</script>
