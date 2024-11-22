<script setup lang="ts">
import BaseBlueButton from '@/components/buttons/BaseBlueButton.vue'
import BaseWhiteButton from '@/components/buttons/BaseWhiteButton.vue'
import { useSchduleStore } from '@/stores/schdule'
import { ref, onMounted, onUnmounted } from 'vue'

const useSchdule = useSchduleStore()

const workType = ref(null)
const workStartDate = ref('')
const workStartTime = ref('')
const workEndDate = ref('')
const workEndTime = ref('')
const workTitle = ref('')

const modalContainer = ref<any>(null)

const startDisabledDates = (date: any) => {
  const today = new Date() // 기준일: 오늘
  today.setDate(today.getDate() - 1)

  // 오늘 이전 날짜를 비활성화하거나 특정일을 비활성화
  return date < today
}

const backgroundClick = (event: any) => {
  console.log(!modalContainer.value.contains(event.target))
  if (modalContainer.value && !modalContainer.value.contains(event.target)) {
    useSchdule.setIsSchedule(false)
  }
}

const cancelClick = () => {
  useSchdule.setIsSchedule(false)
}

const endDisabledDates = (date: any) => {
  const today = new Date() // 기준일: 오늘
  today.setDate(today.getDate() - 1)

  // 오늘 이전 날짜를 비활성화하거나 특정일을 비활성화
  return date < today
}
</script>

<template>
  <section class="schdule-work-background" @click="backgroundClick">
    <section class="schedule-work_modal" ref="modalContainer">
      <div class="schedule-work-title">근무 등록</div>
      <section class="schedule-work-body">
        <section class="schdule-work-row">
          <div class="schedule-work-subtitle">근무 구분</div>
          <div class="schedule-work-radio">
            <el-radio-group v-model="workType">
              <el-radio value="Value 1">특근</el-radio>
              <el-radio value="Value 2">출장</el-radio>
              <el-radio value="Value 3">직출</el-radio>
              <el-radio value="Value 4">외근</el-radio>
            </el-radio-group>
          </div>
        </section>

        <section class="schdule-work-row">
          <div class="schedule-work-subtitle">근무시작</div>
          <div class="schedule-work-calendar">
            <el-date-picker
              style="width: 170px !important"
              class="schedule-work-date"
              v-model="workStartDate"
              type="date"
              placeholder="근무 시작일"
              :default-value="new Date()"
              :disabled-date="startDisabledDates"
            />
            <el-time-select
              style="width: 170px !important"
              class="schedule-work-time"
              v-model="workStartTime"
              start="08:00"
              step="00:10"
              end="18:00"
              format="HH:mm"
              placeholder="시간을 선택하세요"
            />
          </div>
        </section>

        <section class="schdule-work-row">
          <div class="schedule-work-subtitle">근무종료</div>
          <div class="schedule-work-calendar">
            <el-date-picker
              style="width: 170px !important"
              class="schedule-work-date"
              v-model="workEndDate"
              type="date"
              placeholder="근무 시작일"
              :default-value="new Date()"
              :disabled-date="endDisabledDates"
            />
            <el-time-select
              style="width: 170px !important"
              class="schedule-work-time"
              v-model="workEndTime"
              start="08:00"
              step="00:10"
              end="18:00"
              format="HH:mm"
              placeholder="시간을 선택하세요"
            />
          </div>
        </section>
        <section class="schdule-work-row">
          <div class="schedule-work-subtitle">제목</div>
          <input class="schedule-work-input" v-model="workTitle" />
        </section>

        <section class="schdule-btn-row">
          <BaseWhiteButton
            @click="cancelClick()"
            text="취소"
            width="65px"
            height="30px"
            font-size="12px"
          ></BaseWhiteButton>
          <BaseBlueButton text="처리" width="65px" height="30px" font-size="12px"></BaseBlueButton>
        </section>
      </section>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import url('./scheduleManagerWorkModal.css');
</style>
