<template>
  <div class="todo-row">
    <span>{{ todo.id }}</span>
    <span :class="{ 'todo-row__completed': todo.completed }">
      {{ todo.title }}
    </span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { ITodos } from '@/helpers/interfaces/ITodos'

export default defineComponent({
  name: 'TodoRow',
  props: {
    todo: {
      type: Object as () => ITodos,
      required: true
    }
  }
})
</script>
<style src="./TodoRow.scss" lang="scss" scoped />
