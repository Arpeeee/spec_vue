<script setup>
import { ref } from 'vue'
import FilterContent from '@/components/FilterContent.vue'

const search = ref('')

const searchCity = (input) => {
  search.value = input
}
</script>

<template>
  <input
    type="text"
    class="form-control text-center input-custom"
    v-model="search"
    @keyup.enter="searchCity"
    placeholder="City of State"
  />
  <FilterContent :search="search" />
</template>

<style scoped="scss">
.input-custom {
  font-size: 2rem;
}
</style>
