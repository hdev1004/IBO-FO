<script setup lang="ts">
interface Props {
  width?: string
  height?: string
  backgroundColor?: string
  color?: string
  text?: string
  fontSize?: string
  fontWeight?: string
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
  text: '취소',
  color: '#000',
  backgroundColor: '#FFFFFF'
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

      ...alignStyle
    }"
  >
    {{ props.text }}
  </section>
</template>

<style lang="scss" scoped>
@import url('./BaseWhiteButton.css');
</style>
