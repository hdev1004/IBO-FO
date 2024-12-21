<script setup lang="ts">
import BaseTab from '@/components/tab/BaseTab.vue'
import BaseTitle from '@/components/title/BaseTitle.vue'
import { ref } from 'vue'

interface level {
  lv1: string
  lv2: string
  lv3: string
  lv4: string
  lv5: string
}

// 테이블 데이터
const tableData = ref([
  { lv1: '영업본부', lv2: '영업관리부', lv3: '영업팀1', lv4: '1', lv5: '' },
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
const spanCondition = ref<Array<Array<Array<number>>>>([[], [], [], [], []])
const tableDataSpan = () => {
  let data = tableData.value
  getLevelNumber(data, 1)
  getLevelNumber(data, 2)
  getLevelNumber(data, 3)
  getLevelNumber(data, 4)
  getLevelNumber(data, 5)

  console.log('spanCondition : ', spanCondition.value)
}

const getLevelNumber = (data: Array<level>, level: number) => {
  let item = ''
  let prevLevelData: string | null = null
  let levelCheckPoint = 0
  let isEnd = false
  let isFirst = false //첫 데이터일때 확인
  let tmpData: Array<Array<number>> = []

  data.map((dataRow: level) => {
    if (level === 1) item = dataRow.lv1
    if (level === 2) item = dataRow.lv2
    if (level === 3) item = dataRow.lv3
    if (level === 4) item = dataRow.lv4
    if (level === 5) item = dataRow.lv5

    if (prevLevelData !== null) {
      if (item === prevLevelData) {
        //기존에 값이 있었고, 이전 데이터와 같을 때
        if (item === '') {
          //빈 공백의 데이터일 경우
          if (isFirst && prevLevelData === '') {
            //첫 데이터가 있을경우 예외 처리
            spanCondition.value[level - 1].push([1, 1])
            isFirst = false
          }
          levelCheckPoint = 1
          spanCondition.value[level - 1].push([1, 1])
          isEnd = true
        } else {
          levelCheckPoint += 1
          tmpData.push([0, 0])
          isEnd = false //덜 끝났는지 확인하는 변수
        }
      } else {
        if (isFirst && prevLevelData === '') {
          spanCondition.value[level - 1].push([1, 1])
          isFirst = false
        }
        //이전 데이터와 다를 때
        spanCondition.value[level - 1].push([levelCheckPoint, 1])
        spanCondition.value[level - 1].push(...tmpData)
        levelCheckPoint = 1
        isEnd = true
        tmpData = []
      }
    } else {
      isFirst = true
      levelCheckPoint = 1
      prevLevelData = item
      isEnd = false
    }
    prevLevelData = item
  })

  if (!isEnd) {
    //만약 추가할게 남아있다면
    spanCondition.value[level - 1].push([levelCheckPoint, 1])
    spanCondition.value[level - 1].push(...tmpData)
  }
}

// 셀 병합 함수
const mergeCells = ({ row, column, rowIndex, columnIndex }) => {
  let levels = ['lv1', 'lv2', 'lv3', 'lv4', 'lv5']

  for (let lv = 0; lv < levels.length; lv++) {
    if (column.property === levels[lv]) {
      for (let i = 0; i < tableData.value.length; i++) {
        if (rowIndex === i) {
          return spanCondition.value[lv][i]
        }
      }
    }
  }
}
let tabs = ['조직도 관리', '직책 관리']

let nowTab = ref({
  tab: '조직도 관리',
  idx: 0
})

const tabChange = (value: any) => {
  console.log(value)
  nowTab.value = value
}

tableDataSpan()
</script>

<template>
  <section class="group">
    <BaseTitle text="조직관리" style="margin-top: 60px; margin-left: 118px"></BaseTitle>
    <div class="group-body">
      <BaseTab :tabs="tabs" @tabChange="tabChange"> </BaseTab>
      <div class="tab-body">
        <el-table :data="tableData" border :span-method="mergeCells">
          <el-table-column prop="lv1" label="LV1" />
          <el-table-column prop="lv2" label="LV2" />
          <el-table-column prop="lv3" label="LV3" />
          <el-table-column prop="lv4" label="LV4" />
          <el-table-column prop="lv5" label="LV5" />
        </el-table>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url('./groupManage.css');
</style>
