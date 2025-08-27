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

export const useTodoStore = defineStore("todos", {
  state: () => ({
    todos: [],
    _unsubscribe: null,
  }),
  actions: {
    subscribe() {
      if (this._unsubscribe) return;
      const todosQuery = query(
        collection(db, "todos"),
        orderBy("createdAt", "desc")
      );
      this._unsubscribe = onSnapshot(todosQuery, (snapshot) => {
        this.todos = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      });
    },
    unsubscribe() {
      if (this._unsubscribe) {
        this._unsubscribe();
        this._unsubscribe = null;
      }
    },
    async addTodo(todo) {
      await addDoc(collection(db, "todos"), {
        text: todo.text,
        completed: !!todo.completed,
        createdAt: Date.now(),
      });
    },
    async deleteTodo(id) {
      await deleteDoc(doc(db, "todos", String(id)));
    },
    async toggleTodo(id) {
      const target = this.todos.find((t) => t.id === id);
      if (!target) return;
      await updateDoc(doc(db, "todos", String(id)), {
        completed: !target.completed,
      });
    },
    async updateTodo(id, updatedText) {
      await updateDoc(doc(db, "todos", String(id)), { text: updatedText });
    },
  },
});
