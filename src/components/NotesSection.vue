<template>
  <div class="bg-white rounded-lg shadow p-6">
    <h2 class="text-2xl font-bold mb-4">Notes</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="note in notes"
        :key="note.id"
        class="border rounded-lg p-4 hover:shadow-md transition"
      >
        <textarea
          :value="note.content"
          @input="updateNote(note.id, $event.target.value)"
          class="w-full h-40 p-2 border-0 focus:ring-2 focus:ring-blue-500 rounded resize-none"
          placeholder="Write your note here..."
        />
        <button
          @click="deleteNote(note.id)"
          class="mt-2 text-red-500 hover:text-red-700 flex items-center"
        >
          <TrashIcon class="h-4 w-4 mr-1" />
          Delete
        </button>
      </div>

      <div
        @click="addNewNote"
        class="border-2 border-dashed rounded-lg p-4 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition"
      >
        <PlusIcon class="h-6 w-6 text-gray-400 mr-2" />
        <span class="text-gray-500">Add New Note</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount } from "vue";
import { useNotesStore } from "../stores/notesStore";
import { TrashIcon, PlusIcon } from "@heroicons/vue/24/outline";

const notesStore = useNotesStore();
const notes = computed(() => notesStore.notes);

const addNewNote = () => {
  notesStore.addNote({
    content: "",
  });
};

const updateNote = (id, content) => {
  notesStore.updateNote(id, content);
};

const deleteNote = (id) => {
  notesStore.deleteNote(id);
};

onMounted(() => {
  notesStore.subscribe();
});

onBeforeUnmount(() => {
  notesStore.unsubscribe();
});
</script>
