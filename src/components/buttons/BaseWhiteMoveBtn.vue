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
  text: '문구',
  color: '#000',
  backgroundColor: '#FFFFFF',
  border: '1px solid #d2d2d2'
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
    <span class="downloadText" style="margin-right: 10px">{{ props.text }}</span>
    <img src="@/assets/share/arrow.svg" />
  </section>
</template>

<style lang="scss" scoped>
@import url('./BaseWhiteMoveBtn.css');
</style>
