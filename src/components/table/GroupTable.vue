<script setup lang="ts">
import type { commonTableHeaders } from '@/types/index'

interface level {
  lv1: string
  lv2: string
  lv3: string
  lv4: string
  lv5: string
}

const props = defineProps({
  headers: Array<commonTableHeaders>,
  data: Array<level>,
  isScrollable: Boolean
})

const spanCondition = ref<Array<Array<Array<number>>>>([[], [], [], [], []])
const tableDataSpan = () => {
  let data = props.data
  if (data) {
    getLevelNumber(data, 1)
    getLevelNumber(data, 2)
    getLevelNumber(data, 3)
    getLevelNumber(data, 4)
    getLevelNumber(data, 5)
  }
  return
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
const mergeCells = ({ row, column, rowIndex, columnIndex }: any) => {
  let levels = ['lv1', 'lv2', 'lv3', 'lv4', 'lv5']
  if (!props.data) return

  for (let lv = 0; lv < levels.length; lv++) {
    if (column.property === levels[lv]) {
      for (let i = 0; i < props.data.length; i++) {
        if (rowIndex === i) {
          return spanCondition.value[lv][i]
        }
      }
    }
  }
}

tableDataSpan()
</script>

<template>
  <section style="height: 100%">
    <el-table :data="data" :span-method="mergeCells" class="table">
      <el-table-column prop="lv1" label="LV1">
        <template #header>
          <slot :name="`header-lv1`"> LV1</slot>
        </template>
        <template #default="scope">
          <slot :name="'lv1'" :data="scope.row['lv1']"> {{ scope.row['lv1'] }} . . . </slot>
        </template>
      </el-table-column>
      <el-table-column prop="lv2" label="LV2" />
      <el-table-column prop="lv3" label="LV3" />
      <el-table-column prop="lv4" label="LV4" />
      <el-table-column prop="lv5" label="LV5" />
    </el-table>
  </section>
</template>

<style lang="scss" scoped>
.table {
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  margin-left: 20px;
}
//모든 셀 가운데 정렬
:deep(.cell) {
  text-align: center;
}

//테이블 행
:deep(.el-table__row) {
  height: 60px;
  border-right: 1px solid #ebeef5 !important;
}

:deep(.el-table__header .el-table__cell:nth-last-child(1) .cell) {
  &::after {
    width: 0px;
  }
}

//테이블 오른쪽 border 추가
:deep(.el-table__cell) {
  border-right: 1px solid #ebeef5 !important;
}

//테이블 헤더 오른쪽 border 추가
:deep(.is-leaf) {
  border-right: 0px solid #ebeef5 !important;
}

//마지막 오른쪽 border 제거
:deep(.el-table__cell:nth-last-child(1)) {
  border-right: 0px solid #ebeef5 !important;
}

//테이블 헤더
:deep(.el-table__header .cell) {
  border: 0px solid #ebeef5 !important;
  &::after {
    position: absolute;
    content: '';
    width: 1px;
    right: 0px;
    bottom: 10px;
    background-color: #ebeef5;
    height: 30px;
  }
  color: black;
  height: 30px;
  line-height: 30px;
}
</style>
