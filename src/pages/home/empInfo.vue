<script setup lang="ts">
import searchSVG from '@/assets/home/search.svg'
</script>

<template>
  <BaseTitle text="인사정보관리" style="margin-top: 80px; margin-left: 80px"></BaseTitle>
  <main class="empInfo">
    <section class="empInfo__searchInfo">
      <div class="empInfo__searchInfo__empStatus">
        <span>전체 50</span>
        <div class="v-line"></div>
        <span>재직 47</span>
        <div class="v-line"></div>
        <span>퇴사 3</span>
      </div>
      <div class="empInfo__searchInfo__empSearch">
        <input placeholder="사원명 또는 사번을 입력하세요" />
        <img :src="searchSVG" class="empInfo__searchInfo__empSearch-searchBtn" />
      </div>

      <article class="empInfo__searchInfo__empCards"></article>
    </section>
    <section class="empInfo_mainInfo"></section>
  </main>
</template>

<style lang="scss" scoped>
@import url(./empInfo.css);
</style>
