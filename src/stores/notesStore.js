import { defineStore } from "pinia";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

export const useNotesStore = defineStore("notes", {
  state: () => ({
    notes: [],
    _unsubscribe: null,
  }),
  actions: {
    subscribe() {
      if (this._unsubscribe) return;
      const notesQuery = query(
        collection(db, "notes"),
        orderBy("createdAt", "desc")
      );
      this._unsubscribe = onSnapshot(notesQuery, (snapshot) => {
        this.notes = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      });
    },
    unsubscribe() {
      if (this._unsubscribe) {
        this._unsubscribe();
        this._unsubscribe = null;
      }
    },
    async addNote(note) {
      await addDoc(collection(db, "notes"), {
        content: note.content ?? "",
        createdAt: Date.now(),
      });
    },
    async deleteNote(id) {
      await deleteDoc(doc(db, "notes", String(id)));
    },
    async updateNote(id, updatedContent) {
      await updateDoc(doc(db, "notes", String(id)), {
        content: updatedContent,
      });
    },
  },
});
