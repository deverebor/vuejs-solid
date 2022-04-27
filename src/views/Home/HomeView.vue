<template>
  <div class="home">
    <header class="home__header">
      <nav class="home__header-nav" />
      <div class="home__container">
        <h1>My ToDo List</h1>
      </div>
    </header>
    <main>
      <div class="home__container">
        <div
          :key="id"
          v-for="{ id, title, completed } in todos"
          class="home__todo-list__tasks"
        >
          <span :class="{ 'home__todo-list__task-completed': completed }">
            {{ title }}
          </span>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ITodos } from "@/helpers/interfaces/ITodos";

export default defineComponent({
  name: "HomeView",
  components: {},
  data() {
    return {
      todos: [] as ITodos[],
    };
  },
  methods: {
    fetchTodos(): void {
      fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => response.json())
        .then((todos: ITodos[]) => (this.todos = todos));
    },
  },
  mounted() {
    this.fetchTodos();
  },
});
</script>
