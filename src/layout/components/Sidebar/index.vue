<template>
 
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Layout',
  setup() {
    return { input: ref('') }
  }
})
</script>

<style lang="scss"  scoped>
::v-deep(.el-menu)  {
  width: 100%;
  overflow: hidden;
  height: calc(100vh - 49px);
}
</style>
