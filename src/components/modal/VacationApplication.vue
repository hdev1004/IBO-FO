<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { ElMessageBox } from 'element-plus'

// const props = defineProps({
//   visible: {
//     type: Boolean,
//     required: true
//   }
// })

// const emit = defineEmits(['update:visible'])
// const close = () => {
//   emit('update:visible', false)
// }

const dialogVisible = ref(false)
const vacationType = ref(null)
const vacationDate = ref(null)
const vacationReason = ref('')

const vacationOptions = [
  {
    value: '연차',
    label: '연차'
  },
  {
    value: '반차',
    label: '반차'
  },
  {
    value: '공가',
    label: '공가'
  },
  {
    value: '경조사',
    label: '경조사'
  },
  {
    value: '월차',
    label: '월차'
  }
]

// const handleClose = (done: () => void) => {
//   ElMessageBox.confirm('Are you sure to close this dialog?')
//     .then(() => {
//       done()
//     })
//     .catch(() => {
//       // catch error
//     })
// }

const VacationDialog = {
  height: '531px',
  padding: '30px'
}
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    class="VacationDialog"
    title="Tips"
    width="598"
    :style="VacationDialog"
  >
    <template #title>
      <div class="dialogTitle">휴가신청서</div>
    </template>
    <template #default>
      <div class="dialogContent">
        <div class="options">
          <label>유형</label>
          <el-select v-model="vacationType" placeholder="선택" style="width: 386px">
            <el-option
              v-for="item in vacationOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="date">
          <label>휴가 기간</label>
          <el-date-picker
            style="width: 410px"
            v-model="vacationDate"
            type="daterange"
            start-placeholder="시작일"
            end-placeholder="종료일"
          />
        </div>
        <div class="reason">
          <label>사유</label>
          <el-input
            v-model="vacationReason"
            maxlength="500"
            style="width: 430px; max-height: 100px"
            placeholder="사유를 입력하세요."
            show-word-limit
            type="textarea"
            resize="none"
            :autosize="{ minRows: 5, maxRows: 5 }"
          />
        </div>
        <div class="attachment">
          <label>첨부</label>
          <div class="attachment_btns">
            <BlueDownloadButton
              text="항공권예약.jpg"
              font-size="11px"
              width="107px"
              height="26px"
              style="margin-right: 15px"
            ></BlueDownloadButton>
            <BlueDownloadButton
              text="항공권예약.jpg"
              font-size="11px"
              width="107px"
              height="26px"
            ></BlueDownloadButton>
          </div>
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
@import url('./VacationApplication.css');
</style>
