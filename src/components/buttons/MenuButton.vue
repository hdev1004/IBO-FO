<script setup lang="ts">
interface Props {
  width?: string
  height?: string
  backgroundColor?: string
  fill?: string
  text?: string
  ImgSvg?: any
}

const props = withDefaults(defineProps<Props>(), {
  text: '버튼',
  fill: '#717179'
})
</script>

<template>
  <section class="menu__button">
    <ImgSvg :fill="props.fill" style="transition: 0.3s"></ImgSvg>
    <div :style="{ color: props.fill }" class="menu__button-text">
      {{ props.text }}
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url('./MenuButton.css');
</style>
