<template>
  <div class="home">
    <HomeHeader />
    <main>
      <TodoList>
        <!-- <TodoCard
          v-for="todo in todos"
          :key="todo.id"
          :todoCompleted="todo.completed"
          :todoTitle="todo.title"
        /> -->
        <TodoRow v-for="todo in todos" :key="todo.id" :todo="todo" />
      </TodoList>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ITodos } from '@/helpers/interfaces/ITodos'
import TodoList from '@/components/TodoList/TodoList.vue'
import TodoCard from '@/components/TodoCard/TodoCard.vue'
import TodoRow from '@/components/TodoRow/TodoRow.vue'
import HomeHeader from '@/components/HomeHeader/HomeHeader.vue'
import { Api } from '@/api/api'

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeHeader,
    TodoList,
    //TodoCard,
    TodoRow
  },
  async mounted() {
    this.todos = await this.getTodos()
  },
  data() {
    return {
      todos: [] as ITodos[]
    }
  },
  methods: {
    async getTodos(): Promise<ITodos[]> {
      const api = new Api()
      const response = await api.get('todos')

      return response
    }
  }
})
</script>
