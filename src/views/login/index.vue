<template>
  <div class="flex flex-row">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <ul class="space-y-4">
    <li>
      <div class="w-64 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
    </li>
    <li>
      <div class="w-56 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
    </li>
    <li>
      <div class="w-48 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
    </li>
    <li>
      <div class="w-40 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
    </li>
    <li>
      <div class="w-32 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
    </li>
    <li>
      <div class="w-24 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
    </li>
    <li>
      <div class="w-20 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
    </li>
    <li>
      <div class="w-16 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
    </li>
    <li>
      <div class="w-12 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
    </li>
    <li>
      <div class="w-10 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600"></div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    return {input: ref('')}
  }
})
</script>

<style>
</style>
