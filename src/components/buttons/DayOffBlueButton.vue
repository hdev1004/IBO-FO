<script setup lang="ts">
interface Props {
  width?: string
  height?: string
  backgroundColor?: string
  color?: string
  text?: string
  fontSize?: string
  fontWeight?: string
  border?: string
}

const alignStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: '5px'
}

const props = withDefaults(defineProps<Props>(), {
  width: '100px',
  height: '40px',
  text: '연차 - 종일',
  color: '#4099FC',
  backgroundColor: '#E4F1FF',
  border: '1px solid #E4F1FF'
})
</script>

<template>
  <section
    :style="{
      width: props.width,
      height: props.height,
      backgroundColor: props.backgroundColor,
      color: props.color,
      fontSize: props.fontSize,
      fontWeight: props.fontWeight,
      border: props.border,

      ...alignStyle
    }"
  >
    <span class="downloadText">{{ props.text }}</span>
  </section>
</template>

<style lang="scss" scoped>
@import url('./DayOffBlueButton.css');
</style>
