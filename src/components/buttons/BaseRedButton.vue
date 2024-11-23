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
  text: '반려',
  color: '#FFF',
  backgroundColor: '#F33E3E',
  border: '1px solid #F33E3E'
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
@import url('./BaseRedButton.css');
</style>
