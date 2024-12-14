<script setup lang="ts">
import type { commonTableHeaders } from '@/types/index'

const props = defineProps({
  headers: Array<commonTableHeaders>,
  data: Array<any>,
  isScrollable: Boolean
})
</script>

<template>
  <section>
    <el-table :data="props.data" style="width: 100%">
      <el-table-column
        v-for="item in props.headers"
        :key="item.key"
        :prop="item.key"
        :label="item.title"
        :width="item.width"
      >
        <!-- 동적 슬롯을 렌더링 -->
        <template #default="scope">
          <slot :name="item.key" :data="scope.row[item.key]">
            {{ scope.row[item.key] }}
          </slot>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<style lang="scss" scoped>
//모든 셀 가운데 정렬
:deep(.cell) {
  text-align: center;
}

//테이블 행
:deep(.el-table__row) {
  height: 60px;
}

//테이블 헤더
:deep(.el-table__header .cell) {
  &::after {
    position: absolute;
    content: '';
    width: 1px;
    right: 0px;
    bottom: 10px;
    background-color: #d2d2d2;
    height: 30px;
  }
  color: black;
  height: 30px;
  line-height: 30px;
}

@import url('./EmpTable.css');
</style>
