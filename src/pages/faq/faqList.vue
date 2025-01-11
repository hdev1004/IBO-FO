<script setup lang="ts">
import BaseBlueButton from '@/components/buttons/BaseBlueButton.vue'
import BaseTab from '@/components/tab/BaseTab.vue'
import BaseTitle from '@/components/title/BaseTitle.vue'
import type { CollapseModelValue } from 'element-plus'

let tabs = ['전체', '계정', '전자결재', '증명서', '메일']

let nowTab = ref({
  tab: '전체',
  idx: 0
})
const activeName = ref('1')
const handleChange = (val: CollapseModelValue) => {
  console.log(val)
}
const tabChange = (value: any) => {
  console.log(value)
  nowTab.value = value
}
const searchKeyword = ref('')
</script>

<template>
  <section>
    <BaseTitle text="자주하는 질문" style="margin-top: 60px; margin-left: 118px"></BaseTitle>
    <main class="container">
      <BaseTab :tabs="tabs" :tabChange="tabChange"></BaseTab>
      <section class="faq-body">
        <div class="faq-title">
          <el-select placeholder="검색" class="faq-search">
            <el-option label="카테고리" value="category"></el-option>
            <el-option label="질문" value="question"></el-option>
          </el-select>
          <el-input
            v-model="searchKeyword"
            placeholder="검색어를 입력하세요"
            class="faq-search-input"
          ></el-input>
          <BaseBlueButton
            class="faq-search-btn"
            text="등록"
            fontSize="14px"
            height="30px"
            width="60px"
          ></BaseBlueButton>
        </div>

        <!-- 테이블 영역 -->
        <el-scrollbar class="collapse">
          <el-collapse v-model="activeName" @change="handleChange" accordion>
            <el-collapse-item title="Consistency" name="1">
              <div>
                Consistent with real life: in line with the process and logic of real life, and
                comply with languages and habits that the users are used to;
              </div>
              <div>
                Consistent within interface: all elements should be consistent, such as: design
                style, icons and texts, position of elements, etc.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Feedback" name="2">
              <div>
                Operation feedback: enable the users to clearly perceive their operations by style
                updates and interactive effects;
              </div>
              <div>
                Visual feedback: reflect current state by updating or rearranging elements of the
                page.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Efficiency" name="3">
              <div>Simplify the process: keep operating process simple and intuitive;</div>
              <div>
                Definite and clear: enunciate your intentions clearly so that the users can quickly
                understand and make decisions;
              </div>
              <div>
                Easy to identify: the interface should be straightforward, which helps the users to
                identify and frees them from memorizing and recalling.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Controllability" name="4">
              <div>
                Decision making: giving advices about operations is acceptable, but do not make
                decisions for the users;
              </div>
              <div>
                Controlled consequences: users should be granted the freedom to operate, including
                canceling, aborting or terminating current operation.
              </div>
            </el-collapse-item>
            <el-collapse-item
              :title="`Consistency${item}`"
              :name="item"
              v-for="item in [5, 6, 7, 8, 9, 10, 11]"
            >
              <div>
                Consistent with real life: in line with the process and logic of real life, and
                comply with languages and habits that the users are used to;
              </div>
              <div>
                Consistent within interface: all elements should be consistent, such as: design
                style, icons and texts, position of elements, etc.
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-scrollbar>

        <div class="pagination">
          <el-pagination layout="prev, pager, next" :total="50" />
        </div>
      </section>
    </main>
  </section>
</template>

<style lang="scss" scoped>
@import url('./faqList.css');
</style>
