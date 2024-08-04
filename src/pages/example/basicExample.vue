<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <section class="basic_container">
    <div class="basic_title">Basic Example</div>

    <button @click="count += 1">증가</button>

    <button @click="count -= 1">감소</button>
    <div class="basic_number">{{ count }}</div>
  </section>
</template>

<!-- scoped는 이 파일 안에서만 scss를 사용 하겠다는 뜻-->
<style lang="scss" scoped>
@import url('./basicExample.scss');
</style>
