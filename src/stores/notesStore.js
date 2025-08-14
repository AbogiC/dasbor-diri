import { defineStore } from "pinia";

export const useNotesStore = defineStore("notes", {
  state: () => ({
    notes: JSON.parse(localStorage.getItem("notes")) || [],
  }),
  actions: {
    addNote(note) {
      this.notes.push(note);
      this.saveToLocalStorage();
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
      this.saveToLocalStorage();
    },
    updateNote(id, updatedContent) {
      const note = this.notes.find((note) => note.id === id);
      if (note) {
        note.content = updatedContent;
        this.saveToLocalStorage();
      }
    },
    saveToLocalStorage() {
      localStorage.setItem("notes", JSON.stringify(this.notes));
    },
  },
});
