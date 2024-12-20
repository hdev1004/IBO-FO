<script setup lang="ts">
import ElementPlus from 'element-plus'
import BaseBlueButton from '@/components/buttons/BaseBlueButton.vue'
import ProfileSVG from '@/assets/home/empInfo/home_searchProfile.svg'
import TimeSVG from '@/assets/severance/time.svg'
import DailySVG from '@/assets/severance/daily.svg'
import MoneySVG from '@/assets/severance/money.svg'
</script>

<template>
  <main class="conatainer">
    <section class="severance__header">
      <figure class="severance__header__user">
        <img :src="ProfileSVG" />
        <p>허광한</p>
      </figure>
      <div class="severance__header__additional">
        <BaseBlueButton text="인쇄하기" style="height: 33px" font-size="15px"></BaseBlueButton>
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
          <div>
            Consistent with real life: in line with the process and logic of real life, and comply
            with languages and habits that the users are used to;
          </div>
          <div>
            Consistent within interface: all elements should be consistent, such as: design style,
            icons and texts, position of elements, etc.
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <img :src="DailySVG" class="collaps_icon" />
            1일 평균임금
          </template>
          <div>
            Operation feedback: enable the users to clearly persceive their operations by style
            updates and interactive effects;
          </div>
          ``
          <div>
            Visual feedback: reflect current state by updating or rearranging elements of the page.
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
