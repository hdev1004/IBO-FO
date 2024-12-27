<script setup lang="ts">
import { QuestionFilled } from '@element-plus/icons-vue'
import BaseBlueButton from '@/components/buttons/BaseBlueButton.vue'
import ProfileSVG from '@/assets/home/empInfo/home_searchProfile.svg'
import TimeSVG from '@/assets/severance/time.svg'
import DailySVG from '@/assets/severance/daily.svg'
import MoneySVG from '@/assets/severance/money.svg'

const date = ref('')
</script>

<template>
  <main class="conatainer">
    <section class="severance__header">
      <figure class="severance__header__user">
        <img :src="ProfileSVG" />
        <p>허광한</p>
      </figure>
      <div class="severance__header__additional">
        <BaseBlueButton text="인쇄하기" style="height: 28px" font-size="14px"></BaseBlueButton>
        <p>입사일 : 2024.09.21</p>
      </div>
    </section>
    <section class="severance__contents">
      <el-collapse accordion>
        <el-collapse-item name="1">
          <template #title>
            <img :src="TimeSVG" class="collaps_icon" />
            근무시간 산정
          </template>
          <div class="content1">
            <div class="content__item">
              <p class="content__title">입사일</p>
              <p class="content__detail">2024.09.21</p>
            </div>
            <div class="content__item">
              <p class="content__title">퇴사 예정일</p>
              <el-date-picker
                v-model="date"
                class="content__detail"
                type="date"
                size="midium"
                placeholder="일자를 선택하세요"
              />
            </div>
            <div class="content__item">
              <p class="content__title">근무 시간</p>
              <p class="content__detail">91일</p>
              <span class="refer">* 퇴사 예정일 미선택시 오늘날 기준</span>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <img :src="DailySVG" class="collaps_icon" />
            1일 평균임금
          </template>
          <div class="content2">
            <div class="content__item">
              <p class="content__title">계약 연봉</p>
              <p class="content__detail">30,000,000원</p>
              <p class="content__desc">( 월급 : 2,500,000원 )</p>
            </div>
            <div class="content__item">
              <p class="content__title">성과급</p>
              <p class="content__detail">145,111원</p>
            </div>
            <div class="content__item">
              <p class="content__title">상여금</p>
              <p class="content__detail">300,000원</p>
            </div>
            <div class="content__item">
              <p class="content__title">야근수당</p>
              <p class="content__detail">0원</p>
            </div>
            <div class="content__item">
              <p class="content__title">연장근로수당</p>
              <p class="content__detail">0원</p>
              <p class="content__desc">연장근로수당은 내규에 의해 지급되지 않습니다.</p>
            </div>
            <div class="content__item">
              <p class="content__title">평균임금금</p>
              <p class="content__detail">98,170원</p>
              <p class="content__desc">( 월급 + 성과급 + 상여금 ) / 일수</p>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <img :src="DailySVG" class="collaps_icon" />
            1일 통상임금
          </template>
          <div class="content3">
            <div class="content__item">
              <p class="content__title">계약 연봉</p>
              <p class="content__detail">30,000,000원</p>
              <p class="content__desc">( 월급 : 2,500,000원)</p>
            </div>
            <div class="content__item">
              <p class="content__title">통상임금</p>
              <p class="content__detail">82,191원</p>
              <p class="content__desc">계약 연봉 / 365일</p>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template #title>
            <img :src="MoneySVG" class="collaps_icon" />
            퇴직소득
          </template>
          <div class="content4">
            <div class="content__item">
              <p class="content__title">퇴직급여액</p>
              <p class="content__detail">4,417,650원</p>
              <p class="content__desc">( 퇴직 전 3개월간 평균임금 x 30일 ) x ( 총 근속 연수 )</p>
            </div>
            <div class="content__item">
              <p class="content__title">
                근속연수공제
                <el-icon><QuestionFilled /></el-icon>
              </p>
              <p class="content__detail">1,500,000원</p>
            </div>
            <div class="content__item">
              <p class="content__title">환산급여</p>
              <p class="content__detail">23,341,200원</p>
              <p class="content__desc">( 퇴직소득금액 - 퇴직소득공제 ) x 12 ÷ 근속연수</p>
            </div>
            <div class="content__item">
              <p class="content__title">
                과세표준
                <el-icon><QuestionFilled /></el-icon>
              </p>
              <p class="content__detail">17,204,720원</p>
              <p class="content__desc">800만원 + ( 환산급여 - 800만원 ) x 60%</p>
            </div>

            <div class="content__item">
              <p class="content__title">
                환산산출세액
                <el-icon><QuestionFilled /></el-icon>
              </p>
              <p class="content__detail">1,320,708원</p>
              <p class="content__desc">과세표준 x 세율 - 누진공제액</p>
            </div>
            <div class="content__item">
              <p class="content__title">산출세액</p>
              <p class="content__detail">1,320,708원</p>
              <p class="content__desc">환산산출세액 ÷ 12 x 근속연수</p>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import url('./severancePay.css');
</style>
