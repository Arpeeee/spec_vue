<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  obj: {
    type: Object,
    default: () => ({
      city: '',
      growth_from_2000_to_2013: '',
      latitude: '',
      longitude: '',
      population: '',
      rank: '',
      state: ''
    })
  },
  search: {
    type: String,
    default: ''
  }
})

const highlightedCityState = computed(() => {
  if (!props.search) return `${props.obj.city}, ${props.obj.state}`
  let regex = new RegExp(`(${props.search})`, 'gi')
  let city = props.obj.city.replace(regex, '<mark>$1</mark>')
  let state = props.obj.state.replace(regex, '<mark>$1</mark>')
  return `${city}, ${state}`
})
</script>

<template>
  <table class="w-100 table">
    <tbody>
      <tr>
        <td v-html="highlightedCityState" class="col-6"></td>
        <td class="col-6">population : {{ props.obj.population }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
