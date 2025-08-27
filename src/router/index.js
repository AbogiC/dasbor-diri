import { createRouter, createWebHistory } from "vue-router";

import DashboardLayout from "../components/DashboardLayout.vue";
import HomeView from "../views/HomeView.vue";
import TodosView from "../views/TodosView.vue";
import NotesView from "../views/NotesView.vue";
import ProfileView from "../views/ProfileView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: DashboardLayout,
      children: [
        { path: "", name: "home", component: HomeView },
        { path: "todos", name: "todos", component: TodosView },
        { path: "notes", name: "notes", component: NotesView },
        { path: "profile", name: "profile", component: ProfileView },
      ],
    },
  ],
});

export default router;
