<script setup lang="ts">
const dialogVisible = ref(false)
const attendanceType = ref(1)
const attendanceStartDate = ref(null)
const attendanceStartTime = ref(null)
const attendanceEndDate = ref(null)
const attendanceEndTime = ref(null)
const attendanceTitle = ref('')

const AttendanceDialog = {
  padding: '30px'
}
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    class="AttendanceDialog"
    title="Tips"
    width="598"
    :style="AttendanceDialog"
  >
    <template #title>
      <div class="dialogTitle">근태신청서</div>
    </template>
    <template #default>
      <div class="dialogContent">
        <div class="options">
          <label>근무 구분</label>
          <el-radio-group v-model="attendanceType">
            <el-radio :value="1">특근</el-radio>
            <el-radio :value="2">출장</el-radio>
            <el-radio :value="3">직출</el-radio>
            <el-radio :value="4">외근</el-radio>
          </el-radio-group>
        </div>
        <div class="date">
          <label>근무 시작</label>
          <el-date-picker
            v-model="attendanceStartDate"
            type="date"
            placeholder="시작일"
            style="width: 150px"
          />
          <el-time-picker
            v-model="attendanceStartTime"
            placeholder="시작 시간"
            style="width: 150px"
          />
        </div>
        <div class="date">
          <label>근무 종료</label>
          <el-date-picker
            v-model="attendanceEndDate"
            type="date"
            placeholder="종료일"
            style="width: 150px"
          />
          <el-time-picker
            v-model="attendanceEndTime"
            placeholder="종료 시간"
            style="width: 150px"
          />
        </div>
        <div class="title">
          <label>제목</label>
          <el-input
            v-model="attendanceTitle"
            style="width: 340px"
            placeholder="제목을 입력하세요."
          />
        </div>
      </div>
    </template>

    <template #footer>
      <div class="dialogBtns">
        <BaseRedButton
          text="반려"
          width="65px"
          height="30px"
          font-size="12px"
          style="margin-right: 15px"
        />
        <BaseBlueButton text="결재" width="65px" height="30px" font-size="12px" />
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
@import url('./AttendanceApplication.css');
</style>
