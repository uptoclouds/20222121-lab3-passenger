<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import { type Event } from '@/type'
import { type Airline } from '@/type'
const props = defineProps<{
  event: Event
  _id: string
  airline: Airline
}>()
const { airline } = toRefs(props)
</script>
<template>
  <p>{{ airline.name }} | {{ airline.slogan}}</p>
  <p>{{ airline.website}}</p>
</template>