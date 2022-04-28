<template>
  <div class="todo-list">
    <div class="todo-list__container">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TodoList'
})
</script>

<style src="./TodoList.scss" lang="scss" scoped />
