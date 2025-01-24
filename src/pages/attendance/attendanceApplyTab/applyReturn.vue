<script setup lang="ts">
import SearchSVG from '@/assets/home/empInfo/search.svg'
import BaseWhiteButton from '@/components/buttons/BaseWhiteButton.vue'
import DayOffBlueButton from '@/components/buttons/DayOffBlueButton.vue'
import type { commonTableHeaders } from '@/types/index'

const props = defineProps<{
  openModal: () => void
  closeModal: () => void
}>()

const paging = ref(null)
const pagingOptions = [
  {
    value: '5',
    label: '5개'
  },
  {
    value: '10',
    label: '10개'
  },
  {
    value: '20',
    label: '20개'
  }
]

const headers = ref<Array<commonTableHeaders>>([
  {
    key: 'docNumber',
    title: '문서 번호'
  },
  {
    key: 'docType',
    title: '문서 종류'
  },
  {
    key: 'term',
    title: '신청기간'
  },
  {
    key: 'type',
    title: '종류'
  },
  {
    key: 'status',
    title: '상태'
  }
])

const tableData = [
  {
    docNumber: 'A팀-휴가-20250127-002',
    docType: '휴가신청서',
    term: '2025-01-27(목) ~ 2025-01-27(목) 1일',
    type: '',
    status: ''
  }
]
</script>

<template>
  <main class="return__container">
    <section class="document__header">
      <div class="document__header-paging">
        <p>목록 개수</p>
        <el-select v-model="paging" style="width: 80px">
          <el-option
            v-for="item in pagingOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="document__header-search">
        <input type="text" maxlength="10" placeholder="검색" />
        <img :src="SearchSVG" class="searchBtn" />
      </div>
    </section>
    <section class="document__table">
      <EmpTable :headers="headers" :data="tableData">
        <template #type="{ data }">
          <DayOffBlueButton width="100px" height="30px" style="margin-left: 30%"></DayOffBlueButton>
        </template>
        <template #status="{ data }">
          <span class="status__title">허광한 09-12 01:3 PM</span>
          <BaseWhiteButton
            @click="props.openModal()"
            text="상세보기"
            width="70px"
            height="30px"
          ></BaseWhiteButton>
        </template>
      </EmpTable>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import url('./applyReturn.css');
</style>
