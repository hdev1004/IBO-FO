<script setup lang="ts">
import SearchSVG from '@/assets/home/empInfo/search.svg'
import ArrowBottomSVG from '@/assets/home/empInfo/arrow-bottom.svg'
import SearchProfileSVG from '@/assets/home/empInfo/home_searchProfile.svg'
import MainProfileSVG from '@/assets/home/empInfo/home_mainProfile.svg'
import { el } from 'element-plus/es/locales.mjs'
import BaseTab from '@/components/tab/BaseTab.vue'
import infoTable from './empInfoTab/infoTable.vue'
import financeTable from './empInfoTab/financeTable.vue'
import BaseBlueButton from '@/components/buttons/BaseBlueButton.vue'
import BaseWhiteButton from '@/components/buttons/BaseWhiteButton.vue'
import router from '@/router'

let tabs = ['기본정보', '급여정보']

let nowTab = ref({
  tab: '기본정보',
  idx: 0
})

const tabChange = (value: any) => {
  console.log(value)
  nowTab.value = value
}

const register = () => {
  router.push({ path: '/home/empInfoReg' })
}
</script>

<template>
  <BaseTitle text="인사정보관리" style="margin-top: 60px; margin-left: 118px"></BaseTitle>
  <main class="empInfo">
    <section class="empInfo__searchInfo">
      <div class="empInfo__searchInfo__empStatus">
        <span>전체 50</span>
        <div class="v-line"></div>
        <span>재직 47</span>
        <div class="v-line"></div>
        <span>퇴사 3</span>
      </div>

      <input
        class="empInfo__searchInfo__empSearch"
        type="text"
        maxlength="10"
        placeholder="사원명 또는 사번을 입력하세요">
        <img :src="SearchSVG" class="empInfo__searchInfo__empSearch-searchBtn" />
      </input>


      <!-- 등록된 사원 정보가 없으면 "등록된 정보가 없습니다." 로 보여져야 함함 -->
      <article class="empInfo__searchInfo__empCards">
        <div class="empInfo__searchInfo__empCards__ordering">
          <span>등록순</span>
          <img :src="ArrowBottomSVG" />
        </div>
        <el-scrollbar class="empInfo__searchInfo__empCards__cards">
          <div class="empInfo__searchInfo__empCards__card">
            <div class="empInfo__searchInfo__empCards__card__item">
              <figure class="empInfo__searchInfo__empCards__card__item__profile">
                <img :src="SearchProfileSVG" />
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
                <img :src="SearchProfileSVG" />
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
                <img :src="SearchProfileSVG" />
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
                <img :src="SearchProfileSVG" />
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
                <img :src="SearchProfileSVG" />
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
                <img :src="SearchProfileSVG" />
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
    <section class="empInfo__mainInfo">
      <figure class="empInfo__mainInfo__profile">
        <img :src="MainProfileSVG" class="empInfo__mainInfo__profile__img" />
        <div class="empInfo__mainInfo__profile__info">
          <p class="empInfo__mainInfo__profile__info__name">허광한</p>
          <ul>
            <li>직무 <span class="empInfo__mainInfo__profile__info__job">Web Developer</span></li>
            <li>
              부서 <span class="empInfo__mainInfo__profile__info__dept">Product Service</span>
            </li>
            <li>직위 <span class="empInfo__mainInfo__profile__info__role">사원</span></li>
          </ul>
        </div>
      </figure>

      <article class="empInfo__mainInfo__infoWrap">
        <BaseTab :tabs="tabs" @tabChange="tabChange"></BaseTab>
        <div class="empInfo__mainInfo__infoWrap-btns">
          <BaseBlueButton
            text="등록"
            @click="register()"
            style="width: 98px; height: 35px; margin-right: 12px; font-size: 14px"
          ></BaseBlueButton>
          <BaseWhiteButton
            text="수정"
            style="width: 98px; height: 35px; font-size: 14px"
          ></BaseWhiteButton>
        </div>
        <!-- 탭 메뉴에 따라 보여질 테이블이 다름 -->
        <div class="empInfo__mainInfo__infoWrap-slide">
          <section
            class="empInfo__mainInfo__infoWrap__body"
            :class="
              nowTab.tab === '기본정보'
                ? 'empInfo__mainInfo__infoWrap__body-show'
                : 'empInfo__mainInfo__infoWrap__body-hidden'
            "
          >
            <infoTable></infoTable>
          </section>
          <section
            class="empInfo__mainInfo__infoWrap__body"
            :class="
              nowTab.tab === '급여정보'
                ? 'empInfo__mainInfo__infoWrap__body-show'
                : 'empInfo__mainInfo__infoWrap__body-hidden'
            "
          >
            <financeTable></financeTable>
          </section>
        </div>
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import url(./empInfo.css);
</style>
