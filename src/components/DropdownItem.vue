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
  return `${props.obj.city}, ${props.obj.state}`.replace(regex, '<mark>$1</mark>')
})
</script>

<template>
  <table class="table">
    <tbody>
      <tr>
        <td v-html="highlightedCityState"></td>
        <td>{{ props.obj.city }}.replace(props.search,`<mark>${props.search}</mark>`)</td>
        <td>{{ props.obj.population }}</td>
        <td>{{ props.obj.growth_from_2000_to_2013 }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.table {
  width: 100%;
  /* border-collapse: collapse; */
}

.table td {
  width: 33%;
  border: 1px solid #e5e5e5;
  padding: 10px;
}

.dropItem span {
  margin-right: 10px;
}
</style>
