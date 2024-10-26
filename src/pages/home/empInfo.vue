<script setup lang="ts">
import SearchSVG from '@/assets/home/search.svg'
import ArrowBottomSVG from '@/assets/home/arrow-bottom.svg'
import ProfileSVG from '@/assets/home/home_profile.svg'
import { el } from 'element-plus/es/locales.mjs'
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
        <input type="text" maxlength="10" placeholder="사원명 또는 사번을 입력하세요" />
        <img :src="SearchSVG" class="empInfo__searchInfo__empSearch-searchBtn" />
      </div>

      <article class="empInfo__searchInfo__empCards">
        <div class="empInfo__searchInfo__empCards__ordering">
          <span>등록순</span>
          <img :src="ArrowBottomSVG" />
        </div>
        <el-scrollbar class="empInfo__searchInfo__empCards__cards">
          <div class="empInfo__searchInfo__empCards__card">
            <div class="empInfo__searchInfo__empCards__card__item">
              <figure class="empInfo__searchInfo__empCards__card__item__profile">
                <img :src="ProfileSVG" />
              </figure>
              <div class="empInfo__searchInfo__empCards__card__item__info">
                <p>허광한 사원 (1990.10.31)</p>
                <p>IBO > Product Service > 개발 1팀</p>
                <hr />

                <p>2024.09.13 입사</p>
              </div>
            </div>
          </div>
          <div class="empInfo__searchInfo__empCards__card">
            <div class="empInfo__searchInfo__empCards__card__item">
              <figure class="empInfo__searchInfo__empCards__card__item__profile">
                <img :src="ProfileSVG" />
              </figure>
              <div class="empInfo__searchInfo__empCards__card__item__info">
                <p>허광한 사원 (1990.10.31)</p>
                <p>IBO > Product Service > 개발 1팀</p>
                <hr />

                <p>2024.09.13 입사</p>
              </div>
            </div>
          </div>
          <div class="empInfo__searchInfo__empCards__card">
            <div class="empInfo__searchInfo__empCards__card__item">
              <figure class="empInfo__searchInfo__empCards__card__item__profile">
                <img :src="ProfileSVG" />
              </figure>
              <div class="empInfo__searchInfo__empCards__card__item__info">
                <p>허광한 사원 (1990.10.31)</p>
                <p>IBO > Product Service > 개발 1팀</p>
                <hr />

                <p>2024.09.13 입사</p>
              </div>
            </div>
          </div>
          <div class="empInfo__searchInfo__empCards__card">
            <div class="empInfo__searchInfo__empCards__card__item">
              <figure class="empInfo__searchInfo__empCards__card__item__profile">
                <img :src="ProfileSVG" />
              </figure>
              <div class="empInfo__searchInfo__empCards__card__item__info">
                <p>허광한 사원 (1990.10.31)</p>
                <p>IBO > Product Service > 개발 1팀</p>
                <hr />

                <p>2024.09.13 입사</p>
              </div>
            </div>
          </div>
          <div class="empInfo__searchInfo__empCards__card">
            <div class="empInfo__searchInfo__empCards__card__item">
              <figure class="empInfo__searchInfo__empCards__card__item__profile">
                <img :src="ProfileSVG" />
              </figure>
              <div class="empInfo__searchInfo__empCards__card__item__info">
                <p>허광한 사원 (1990.10.31)</p>
                <p>IBO > Product Service > 개발 1팀</p>
                <hr />

                <p>2024.09.13 입사</p>
              </div>
            </div>
          </div>
          <div class="empInfo__searchInfo__empCards__card">
            <div class="empInfo__searchInfo__empCards__card__item">
              <figure class="empInfo__searchInfo__empCards__card__item__profile">
                <img :src="ProfileSVG" />
              </figure>
              <div class="empInfo__searchInfo__empCards__card__item__info">
                <p>허광한 사원 (1990.10.31)</p>
                <p>IBO > Product Service > 개발 1팀</p>
                <hr />

                <p>2024.09.13 입사</p>
              </div>
            </div>
          </div>
        </el-scrollbar>
      </article>
    </section>
    <section class="empInfo_mainInfo"></section>
  </main>
</template>

<style lang="scss" scoped>
@import url(./empInfo.css);
</style>
