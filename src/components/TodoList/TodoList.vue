<template>
  <div class="todo-list__container">
    <div :key="todo.id" v-for="todo in todos" class="todo-list__tasks">
      <span :class="{ 'todo-list__tasks-completed': todo.completed }">
        {{ todo.title }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ITodos } from '@/helpers/interfaces/ITodos'

export default defineComponent({
  name: 'TodoList',
  props: {
    todos: {
      type: Object as () => ITodos[],
      required: true
    }
  }
})
</script>

<style src="./TodoList.scss" lang="scss" scoped />
