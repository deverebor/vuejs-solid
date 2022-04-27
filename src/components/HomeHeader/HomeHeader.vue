<template>
  <header class="header">
    <nav class="header__nav" />
    <div class="header__container">
      <h1>My Todo List</h1>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeHeader'
})
</script>

<style src="./HomeHeader.scss" lang="scss" scoped />
