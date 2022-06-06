<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { a } from 'test-module'
export default defineComponent({
  setup() {
    console.log(a.value)
    a.value = 2
  },
})
</script>
