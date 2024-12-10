<script setup lang="ts">
import BaseBlueButton from '@/components/buttons/BaseBlueButton.vue'
import BaseTitle from '@/components/title/BaseTitle.vue'
import EditSVG from '@/assets/home/empRecord/edit.svg'
</script>

<template>
  <BaseTitle text="정보수정" style="margin-top: 60px; margin-left: 118px"></BaseTitle>
  <main class="container">
    <section class="editWrap">
      <div class="editWrap__input">
        <div class="editWrap__input__name">
          <label for="name">이름</label>
          <input type="text" id="name" placeholder="이름을 입력하세요" />
        </div>
        <div class="editWrap__input__tel">
          <label for="tel">전화번호</label>
          <input type="tel" id="tel" placeholder="전화번호를 입력하세요" />
        </div>
        <div class="editWrap__input__email">
          <label for="email">이메일</label>
          <input type="email" id="email" placeholder="이메일을 입력하세요" />
        </div>
        <div class="editWrap__input__birth">
          <label for="birth">생년월일</label>
          <input type="date" id="birth" placeholder="일자를 입력하세요" />
        </div>
      </div>

      <div class="editWrap__img">
        <input type="file" id="profile" /><img :src="EditSVG" />
        <label for="profile">프로필 이미지</label>
      </div>
    </section>
    <BaseBlueButton text="저장" style="width: 161px; height: 35px"></BaseBlueButton>
  </main>
</template>

<style lang="scss" scoped>
@import url(./empRecordEdit.css);
</style>
