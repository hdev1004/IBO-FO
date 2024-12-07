<script setup lang="ts">
import EmpSearchBar from '@/components/searchBar/EmpSearchBar.vue'
import EmpTable from '@/components/table/EmpTable.vue'

const vacationDate = ref(null)
</script>

<template>
  <BaseTitle text="인사명령" style="margin-top: 60px; margin-left: 118px"></BaseTitle>

  <section class="container">
    <EmpSearchBar></EmpSearchBar>
    <EmpTable></EmpTable>
  </section>
</template>

<style lang="scss" scoped>
@import url(./personalAppointment.css);
</style>
