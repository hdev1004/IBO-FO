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
  width: '120px',
  height: '40px',
  text: '다운로드',
  color: '#FFF',
  backgroundColor: '#05153B',
  border: '1px solid #05153B'
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
    {{ props.text }}
  </section>
</template>

<style lang="scss" scoped>
@import url('./BlueDownloadButton.css');
</style>
