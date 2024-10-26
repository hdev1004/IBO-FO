<script setup lang="ts">
import BaseTab from '@/components/tab/BaseTab.vue'
let tabs = ['근무일정', '휴가일정', '테스트', '응애요']
const tabChange = (value: any) => {
  console.log(value)
}
</script>

<template>
  <section class="schedule">
    <BaseTab :tabs="tabs" @tabChange="tabChange"></BaseTab>
    <section class="schedule-body">
      <div class="schedule-body-header">
        <div class="schedule-body-header-headquarters">
          <div class="schedule-headquarters-group">
            <div class="schedule-headquarters">
              <div class="headquarters--color"></div>
              <div class="headquarters--text">개발 본부1</div>
            </div>

            <div class="schedule-headquarters">
              <div class="headquarters--color"></div>
              <div class="headquarters--text">개발 본부2</div>
            </div>
          </div>

          <div class="schedule-headquarters-group">
            <div class="schedule-headquarters">
              <div class="headquarters--color"></div>
              <div class="headquarters--text">운영 본부1</div>
            </div>

            <div class="schedule-headquarters">
              <div class="headquarters--color"></div>
              <div class="headquarters--text">운영 본부2</div>
            </div>
          </div>

          <div class="schedule-headquarters-group">
            <div class="schedule-headquarters">
              <div class="headquarters--color"></div>
              <div class="headquarters--text">영업 본부1</div>
            </div>

            <div class="schedule-headquarters">
              <div class="headquarters--color"></div>
              <div class="headquarters--text">영업 본부2</div>
            </div>
          </div>
        </div>
        <div class="schedule-date">
          <img src="@/assets/schedule/left.svg" />
          <div class="schedule-date--text">2024.10.26</div>
          <img src="@/assets/schedule/right.svg" />

          <div class="schedule-date-button">오늘</div>
        </div>
        <div>right</div>
      </div>

      <div>달력</div>
      <div></div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import url('./scheduleManager.css');
</style>
