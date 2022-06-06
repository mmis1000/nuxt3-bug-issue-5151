import { ref, watch } from 'vue';
export const a = ref('1')

watch(a, () => {
  console.log(new Error().stack)
  debugger
}, { flush: 'sync' })