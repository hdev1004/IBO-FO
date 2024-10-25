<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  tabs: {
    type: Array<string>,
    default: []
  }
})
const clickTab = ref(props.tabs[0])
const clickIdx = ref(0)
const emit = defineEmits(['tabChange']) // customEvent 이벤트 정의

function handleClick(tab: string, idx: number) {
  clickTab.value = tab
  clickIdx.value = idx
  emit('tabChange', {
    tab: tab,
    idx: idx
  }) // 부모에게 customEvent 이벤트를 보냄
}
</script>

<template>
  <section class="tab">
    <div class="tab-mv" :style="{ left: 98 * clickIdx + 'px' }">
      <div class="tab-hideline"></div>
    </div>
    <div
      :class="idx === clickIdx ? 'tab-lst' : 'tab-lst--disable'"
      v-for="(tab, idx) in props.tabs"
      @click="handleClick(tab, idx)"
    >
      {{ tab }}
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url('./BaseTab.css');
</style>
