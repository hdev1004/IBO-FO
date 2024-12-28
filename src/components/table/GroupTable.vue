<script setup lang="ts">
import type { commonTableHeaders, level } from '@/types/index'

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
  let headers = props.headers?.map((h) => h.key)
  if (!headers) return

  let levels = headers
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
      <el-table-column
        :prop="header.key"
        :label="header.title"
        v-for="header in headers"
        :key="header.key"
      >
        <template #header>
          <slot :name="`header-${header.key}`">
            <div class="table-header">
              <div>{{ header.title }}</div>
              <span class="table-header-icon">
                <el-icon><Plus /></el-icon>
              </span>
            </div>
          </slot>
        </template>
        <template #default="scope">
          <slot :name="header.key" :data="scope?.row[header.key]">
            <div class="table-row">
              <div>{{ scope?.row[header.key] }}</div>
              <el-dropdown class="table-dropdown">
                <span class="el-dropdown-link"
                  ><el-icon><MoreFilled /></el-icon>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>하위조직생성</el-dropdown-item>
                    <el-dropdown-item>조직 순서 변경</el-dropdown-item>
                    <el-dropdown-item>조직 이동</el-dropdown-item>
                    <el-dropdown-item>명칭 변경</el-dropdown-item>
                    <el-dropdown-item>삭제하기</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </slot>
        </template>
      </el-table-column>
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

.table-row {
  position: relative;
}
.table-dropdown {
  position: absolute;
  right: 40px;
  top: 5px;
  cursor: pointer;
}

.table-header {
  display: flex;
  justify-content: center;
  position: relative;
}
.table-header-icon {
  position: absolute;
  right: 40px;
  top: 2px;
  cursor: pointer;
}
</style>
