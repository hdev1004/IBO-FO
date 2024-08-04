<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

//setup은 vue3부터 지원하는 좋은 아이로..
//동기적으로 처리할 수 있도록 하는 뛰어난 성능을 가지고 있음..
//useEffect와 같은 콜백을 생각을 안해도 됨

const countStore = useCounterStore()
</script>

<template>
  <section class="store_container">
    <div class="store_title">Store Example</div>

    <button @click="countStore.up()">증가</button>

    <button @click="countStore.down()">감소</button>
    <div class="store_number">{{ countStore.getCount() }}</div>
  </section>
</template>

<!-- scoped는 이 파일 안에서만 scss를 사용 하겠다는 뜻-->
<style lang="scss" scoped>
@import url('./storeExample.scss');
</style>
