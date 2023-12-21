<script setup>
import { onBeforeMount, ref, watch } from 'vue'
import DropdownItem from './DropdownItem.vue'
import DropContainer from './DropContainer.vue'
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
  <DropContainer class="scroll" v-if="props.search !== '' && filterList.length > 0">
    <DropdownItem v-for="item in filterList" :key="item.rank" :obj="item" :search="props.search" />
  </DropContainer>
  <DropContainer v-else-if="props.search === ''">Please type something</DropContainer>
  <DropContainer v-else-if="filterList.length == 0">nomatch</DropContainer>
  <!-- <h1>{{ props.search }}</h1> -->
</template>

<style scoped></style>
