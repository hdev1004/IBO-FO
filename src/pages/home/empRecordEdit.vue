<script setup lang="ts">
import BaseBlueButton from '@/components/buttons/BaseBlueButton.vue'
import BaseTitle from '@/components/title/BaseTitle.vue'
import EditSVG from '@/assets/home/empRecord/edit.svg'
import { ref } from 'vue'

const birth = ref(null)
</script>

<template>
  <BaseTitle text="정보수정" style="margin-top: 60px; margin-left: 118px"></BaseTitle>
  <main class="container">
    <section class="editWrap">
      <div class="editWrap__input">
        <div class="editWrap__input__name">
          <label for="name">이름</label>
          <input type="text" id="name" maxlength="6" placeholder="이름을 입력하세요" />
        </div>
        <div class="editWrap__input__tel">
          <label for="tel">전화번호</label>
          <input type="tel" id="tel" maxlength="11" placeholder="'-'를 제외하고 입력하세요" />
        </div>
        <div class="editWrap__input__email">
          <label for="email">이메일</label>
          <input type="email" id="email" maxlength="64" placeholder="이메일을 입력하세요" />
        </div>
        <div class="editWrap__input__birth">
          <label>생년월일</label>
          <el-date-picker
            v-model="birth"
            class="birth-datepicker"
            type="date"
            size="large"
            placeholder="일자를 선택하세요"
          />
        </div>
      </div>

      <div class="editWrap__img">
        <div class="editWrap__img__input">
          <img :src="EditSVG" />
        </div>
        <label for="profile">프로필 이미지</label>
      </div>
    </section>
    <BaseBlueButton
      text="저장"
      style="width: 161px; height: 35px"
      class="save_btn"
    ></BaseBlueButton>
  </main>
</template>

<style lang="scss" scoped>
@import url(./empRecordEdit.css);
</style>
