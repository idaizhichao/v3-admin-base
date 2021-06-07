<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    return {input: ref('')}
  }
})
</script>

<style>
</style>
