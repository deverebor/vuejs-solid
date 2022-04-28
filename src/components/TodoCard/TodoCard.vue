<template>
  <div class="todo-card__tasks">
    <span :class="{ 'todo-card__tasks-completed': todoCompleted }">
      {{ todoTitle }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TodoCard',
  props: {
    todoCompleted: {
      type: Boolean,
      default: false
    },
    todoTitle: {
      type: String,
      default: ''
    }
  }
})
</script>

<style src="./TodoCard.scss" lang="scss" scoped />
