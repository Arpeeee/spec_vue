<script setup>
import { onBeforeMount, ref, watch } from 'vue'
import DropdownItem from './DropdownItem.vue'
import { getUrl } from '../method/getUrl.js'

const props = defineProps({
  search: {
    type: String,
    default: ''
  }
})
const filterList = ref([])
const origin = ref([])
const url =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

onBeforeMount(async () => {
  origin.value = await getUrl(url)
  //   console.log(filterList.value)
})

watch(
  () => props.search,
  (val) => {
    filterList.value = filterCity(val)
  }
)

const filterCity = (input) => {
  return origin.value.filter((item) => {
    const regex = new RegExp(input, 'gi')
    return item.city.match(regex) || item.state.match(regex)
  })
}
</script>

<template>
  <div class="m-10 filterContainer scroll">
    <DropdownItem v-for="item in filterList" :key="item.rank" :obj="item" :search="props.search" />
  </div>
  <!-- <h1>{{ props.search }}</h1> -->
</template>

<style scoped>
.filterContainer {
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  margin-top: 10px;
  border: 1px solid #e5e5e5;
  width: 100%;
  overflow-y: scroll;
  max-height: max-content;
  scrollbar-width: thin;
  scrollbar-color: blue orange;
  /* height: 100%; */
}
</style>
