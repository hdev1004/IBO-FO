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
    <el-table :data="props.data" class="table">
      <el-table-column
        v-for="item in props.headers"
        :key="item.key"
        :prop="item.key"
        :label="item.title"
        :width="item.width"
      >
        <template #header>
          <slot :name="`header-${item.key}`" :data="item"> {{ item.title }} </slot>
        </template>
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
.table {
  width: calc(100% - 40px);
  margin-left: 20px;
}
//모든 셀 가운데 정렬
:deep(.cell) {
  text-align: center;
}

//테이블 행
:deep(.el-table__row) {
  height: 60px;
}

:deep(.el-table__header .el-table__cell:nth-last-child(1) .cell) {
  &::after {
    width: 0px;
  }
}

//테이블 헤더
:deep(.el-table__header .cell) {
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

@import url('./EmpTable.css');
</style>
