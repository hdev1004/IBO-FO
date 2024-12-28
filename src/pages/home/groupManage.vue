<script setup lang="ts">
import BaseTab from '@/components/tab/BaseTab.vue'
import GroupTable from '@/components/table/GroupTable.vue'
import BaseTitle from '@/components/title/BaseTitle.vue'
import { ref } from 'vue'

// 테이블 데이터
const tableData = ref([
  { lv1: '영업본부', lv2: '영업관리부', lv3: '영업팀1', lv4: '서브1팁', lv5: '' },
  { lv1: '영업본부', lv2: '영업관리부', lv3: '영업팀1', lv4: '서브2팀', lv5: '' },
  { lv1: '영업본부', lv2: '영업관리부', lv3: '영업팀2', lv4: '2', lv5: '' },
  { lv1: '영업본부', lv2: 'TEST', lv3: '1', lv4: '3', lv5: '' },
  { lv1: '영업본부', lv2: 'TEST', lv3: '2', lv4: '4', lv5: '' },
  { lv1: '영업본부', lv2: 'TEST22', lv3: '3', lv4: '5', lv5: '' },
  { lv1: '개발본부', lv2: '개발연구소', lv3: '개발연구 1팀', lv4: '6', lv5: '' },
  { lv1: '개발본부', lv2: '개발연구소', lv3: '개발연구 2팀', lv4: '7', lv5: '' },
  { lv1: '개발본부', lv2: '개발부', lv3: '프리미엄 개발팀', lv4: '8', lv5: '' },
  { lv1: '개발본부', lv2: '프로젝트부', lv3: '솔루션 관리팀', lv4: '9', lv5: '' },
  { lv1: '개발본부', lv2: '프로젝트부', lv3: '비고', lv4: '10', lv5: '' },
  { lv1: '경영본부', lv2: '경영관리부', lv3: '경영 관리팀', lv4: '11', lv5: '' },
  { lv1: '경영본부', lv2: '경영관리부', lv3: '비고', lv4: '-', lv5: '' }
])

const headers = ref([
  {
    key: 'lv1',
    title: 'lv1'
  },
  {
    key: 'lv2',
    title: 'lv2'
  },
  {
    key: 'lv3',
    title: 'lv3'
  },
  {
    key: 'lv4',
    title: 'lv4'
  },
  {
    key: 'lv5',
    title: 'lv5'
  }
])

let tabs = ['조직도 관리', '직책 관리']

let nowTab = ref({
  tab: '조직도 관리',
  idx: 0
})

const tabChange = (value: any) => {
  console.log(value)
  nowTab.value = value
}
</script>

<template>
  <section class="group">
    <BaseTitle text="조직관리" style="margin-top: 60px; margin-left: 118px"></BaseTitle>
    <div class="group-body">
      <BaseTab :tabs="tabs" @tabChange="tabChange"> </BaseTab>
      <div class="tab-body">
        <GroupTable :headers="headers" :data="tableData"></GroupTable>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url('./groupManage.css');
</style>
