<template>
  <div class="home">
    <HomeHeader />
    <main>
      <TodoList>
        <TodoCard
          v-for="todo in todos"
          :key="todo.id"
          :todoCompleted="todo.completed"
          :todoTitle="todo.title"
        />
      </TodoList>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ITodos } from '@/helpers/interfaces/ITodos'
import TodoList from '@/components/TodoList/TodoList.vue'
import TodoCard from '@/components/TodoCard/TodoCard.vue'
import HomeHeader from '@/components/HomeHeader/HomeHeader.vue'
import Api from '@/api/api'

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeHeader,
    TodoList,
    TodoCard
  },
  async mounted() {
    this.todos = await this.addTodo()
  },
  data() {
    return {
      todos: [] as ITodos[]
    }
  },
  methods: {
    async addTodo(): Promise<ITodos[]> {
      const api = Api('todos')
      return await api
    }
  }
})
</script>
