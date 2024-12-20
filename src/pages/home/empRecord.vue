<script setup lang="ts">
import ProfileImgSVG from '@/assets/home/empRecord/profileImg.svg'
import EditProfileImgSVG from '@/assets/home/empRecord/editProfileImg.svg'
import TelephoneSVG from '@/assets/home/empRecord/telephone.svg'
import MessageSVG from '@/assets/home/empRecord/message.svg'
import EditInfoSVG from '@/assets/home/empRecord/editInfo.svg'
import BaseBlueButton from '@/components/buttons/BaseBlueButton.vue'
import LineTab from '@/components/tab/LineTab.vue'
import { now } from '@vueuse/core'
import EmpInfoTable from './empRecordTab/empInfoTable.vue'
import ContractInfoTable from './empRecordTab/contractInfoTable.vue'
import CareerInfoTable from './empRecordTab/careerInfoTable.vue'
import router from '@/router'

let tabs = ['인사정보', '계약정보', '경력·학력']

let nowTab = ref({
  tab: '인사정보',
  idx: 0
})

const tabChange = (value: any) => {
  console.log(value)
  nowTab.value = value
}

const disabled = ref(false)

const edit = () => {
  router.push({ path: '/home/empRecord/edit' })
}
</script>

<template>
  <BaseTitle text="인사기록카드" style="margin-top: 60px; margin-left: 118px"></BaseTitle>
  <main class="container">
    <section class="empRecord__info">
      <figure class="empRecord__info__profileImg">
        <img :src="ProfileImgSVG" class="profileImg" />
        <div class="editProfileImg"><img :src="EditProfileImgSVG" /></div>
      </figure>
      <div class="empRecord__info__profileInfo">
        <div class="empRecord__info__profileInfo__info">
          <p>허광한</p>
          <ul>
            <li>직무 <span class="empRecord__info__profileInfo__info__job">Web Developer</span></li>
            <li>
              부서 <span class="empRecord__info__profileInfo__info__dept">Product Service</span>
            </li>
            <li>직위 <span class="empRecord__info__profileInfo__info__role">사원</span></li>
          </ul>
        </div>
        <div class="empRecord__info__profileInfo__icons">
          <el-tooltip :disabled="disabled" content="010-3423-2234" placement="top" effect="light">
            <div class="icons-telephone" @click="disabled = !disabled">
              <img :src="TelephoneSVG" />
            </div>
          </el-tooltip>
          <el-tooltip :disabled="disabled" content="jgh@ibo.com" placement="top" effect="light">
            <div class="icons-message" @click="disabled = !disabled"><img :src="MessageSVG" /></div>
          </el-tooltip>
          <div class="icons-status"><span></span>재직중</div>
          <div class="icons-editInfo" @click="edit()"><img :src="EditInfoSVG" />정보수정</div>
          <BaseBlueButton
            text="인쇄"
            style="width: 60px; height: 28px; font-size: 14px"
            class="icons-printBtn"
          ></BaseBlueButton>
        </div>
      </div>
    </section>

    <section class="empRecord__tabs">
      <LineTab :tabs="tabs" @tabChange="tabChange"></LineTab>
      <div
        class="empRecord__tabs__body"
        :class="
          nowTab.tab === '인사정보' ? 'empRecord__tabs__body-show' : 'empRecord__tabs__body-hidden'
        "
      >
        <EmpInfoTable></EmpInfoTable>
      </div>
      <div
        class="empRecord__tabs__body"
        :class="
          nowTab.tab === '계약정보' ? 'empRecord__tabs__body-show' : 'empRecord__tabs__body-hidden'
        "
      >
        <ContractInfoTable></ContractInfoTable>
      </div>
      <div
        class="empRecord__tabs__body"
        :class="
          nowTab.tab === '경력·학력' ? 'empRecord__tabs__body-show' : 'empRecord__tabs__body-hidden'
        "
      >
        <CareerInfoTable></CareerInfoTable>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import url(./empRecord.css);
</style>
