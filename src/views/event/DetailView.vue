<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import { type Event } from '@/type'
const props = defineProps<{
  event: Event
  trips: 'String'
}>()
const { event } = toRefs(props)
</script>
<template>
  <p>{{ event.trips }} on {{ event.trips }} @ {{ event.trips }}</p>
  <p>{{ event.trips }}</p>
</template>