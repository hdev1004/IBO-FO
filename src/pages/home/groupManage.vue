<script setup lang="ts">
import BaseBlueButton from '@/components/buttons/BaseBlueButton.vue'
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
    title: 'LV1'
  },
  {
    key: 'lv2',
    title: 'LV2'
  },
  {
    key: 'lv3',
    title: 'LV3'
  },
  {
    key: 'lv4',
    title: 'LV4'
  },
  {
    key: 'lv5',
    title: 'LV5'
  }
])

const tableData2 = ref([
  {
    date: '2025-01-01',
    emp: 'J001',
    comments: '이동'
  },
  {
    date: '2025-01-02',
    emp: 'J002',
    comments: '이동'
  },
  {
    date: '2025-01-03',
    emp: 'J003',
    comments: '이동'
  },
  {
    date: '2025-01-04',
    emp: 'J004',
    comments: '이동'
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
        <GroupTable
          :headers="headers"
          :data="tableData"
          :class="nowTab.tab === '조직도 관리' ? '' : 'hidden'"
        ></GroupTable>

        <section :class="nowTab.tab === '직책 관리' ? '' : 'hidden'">
          <div class="body-title">
            <div class="body-contents">
              *직책은 자유롭게 생성 가능하며, 순서 이동으로 직책의 상하를 구분할 수 있습니다.
            </div>
            <BaseBlueButton
              class="add-btn"
              text="신규 직책 추가"
              fontSize="14px"
              height="30px"
              width="120px"
            ></BaseBlueButton>
          </div>
          <el-table :data="tableData2" style="width: 100%">
            <el-table-column prop="date" label="직책명"></el-table-column>
            <el-table-column prop="emp" label="직책코드"></el-table-column>
            <el-table-column prop="comments" label="비고"></el-table-column>
          </el-table>
        </section>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url('./groupManage.css');
</style>
