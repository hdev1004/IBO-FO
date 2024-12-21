<script setup lang="ts">
import ElementPlus from 'element-plus'
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
              <p class="content__desc">2024.09.21</p>
            </div>
            <div class="content__item">
              <p class="content__title">퇴사 예정일</p>
              <el-date-picker
                v-model="date"
                class="content__desc"
                type="date"
                size="midium"
                placeholder="일자를 선택하세요"
              />
            </div>
            <div class="content__item">
              <p class="content__title">근무 시간</p>
              <p class="content__desc">91일</p>
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
              <p class="content__desc">30,000,000원</p>
            </div>
            <div class="content__item">
              <p class="content__title">성과급</p>
              <p class="content__desc">145,111원</p>
            </div>
            <div class="content__item">
              <p class="content__title">상여금</p>
              <p class="content__desc">300,000원</p>
            </div>
            <div class="content__item">
              <p class="content__title">야근수당</p>
              <p class="content__desc">0원</p>
            </div>
            <div class="content__item">
              <p class="content__title">연장근로수당</p>
              <p class="content__desc">0원</p>
            </div>
            <div class="content__item">
              <p class="content__title">평균임금금</p>
              <p class="content__desc">98,170원</p>
            </div>
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <img :src="DailySVG" class="collaps_icon" />
            1일 통상임금
          </template>
          <div>Simplify the process: keep operating process simple and intuitive;</div>
          <div>
            Definite and clear: enunciate your intentions clearly so that the users can quickly
            understand and make decisions;
          </div>
          <div>
            Easy to identify: the interface should be straightforward, which helps the users to
            identify and frees them from memorizing and recalling.
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template #title>
            <img :src="MoneySVG" class="collaps_icon" />
            퇴직소득
          </template>
          <div>
            Decision making: giving advices about operations is acceptable, but do not make
            decisions for the users;
          </div>
          <div>
            Controlled consequences: users should be granted the freedom to operate, including
            canceling, aborting or terminating current operation.
          </div>
        </el-collapse-item>
      </el-collapse>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import url('./severancePay.css');
</style>
