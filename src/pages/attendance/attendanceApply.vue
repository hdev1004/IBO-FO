<script setup lang="ts">
import BaseTitle from '@/components/title/BaseTitle.vue'
import ApplyWait from './attendanceApplyTab/applyWait.vue'
import ApplyApproval from './attendanceApplyTab/applyApproval.vue'
import ApplyReturn from './attendanceApplyTab/applyReturn.vue'
import { ElMessageBox } from 'element-plus'
import { ref } from 'vue'

const dialogVisible = ref(false)

let tabs = ['대기', '승인', '반려']
let nowTab = ref({
  tab: '대기',
  idx: 0
})

const openModal = () => {
  dialogVisible.value = true
}

const closeModal = () => {
  dialogVisible.value = false
}

const tabChange = (value: any) => {
  console.log(value)
  nowTab.value = value
}

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>

<template>
  <el-dialog v-model="dialogVisible" title="Tips" width="500" :before-close="handleClose">
    <span>This is a message</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"> Confirm </el-button>
      </div>
    </template>
  </el-dialog>

  <BaseTitle text="내 신청 문서" style="margin-top: 60px; margin-left: 118px"></BaseTitle>
  <main class="conatiner">
    <BaseTab :tabs="tabs" @tabChange="tabChange"></BaseTab>
    <section
      class="document__body"
      :class="nowTab.tab === '대기' ? 'document__body-show' : 'document__body-hidden'"
    >
      <ApplyWait></ApplyWait>
    </section>
    <section
      class="document__body"
      :class="nowTab.tab === '승인' ? 'document__body-show' : 'document__body-hidden'"
    >
      <ApplyApproval></ApplyApproval>
    </section>
    <section
      class="document__body"
      :class="nowTab.tab === '반려' ? 'document__body-show' : 'document__body-hidden'"
    >
      <ApplyReturn :openModal="openModal" :closeModal="closeModal"></ApplyReturn>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import url('./attendanceApply.css');
</style>
