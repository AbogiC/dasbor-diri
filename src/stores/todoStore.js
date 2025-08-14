import { defineStore } from "pinia";

export const useTodoStore = defineStore("todos", {
  state: () => ({
    todos: JSON.parse(localStorage.getItem("todos")) || [],
  }),
  actions: {
    addTodo(todo) {
      this.todos.push(todo);
      this.saveToLocalStorage();
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.saveToLocalStorage();
    },
    toggleTodo(id) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        this.saveToLocalStorage();
      }
    },
    updateTodo(id, updatedText) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = updatedText;
        this.saveToLocalStorage();
      }
    },
    saveToLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
});
