<script setup lang="ts">
import ProfileImgSVG from '@/assets/home/empRecord/profileImg.svg'
import EditProfileImgSVG from '@/assets/home/empRecord/editProfileImg.svg'
</script>

<template>
  <BaseTitle text="인사기록카드" style="margin-top: 60px; margin-left: 118px"></BaseTitle>
  <main class="container">
    <section class="empRecord__info">
      <figure class="empRecord__info__profileImg">
        <img :src="ProfileImgSVG" class="profileImg" />
        <div class="editProfileImg"><img :src="EditProfileImgSVG" /></div>
      </figure>
      <div class="empRecord__info__profileInfo">
        <div class="empRecord__info__profileInfo__info">
          <p>허광한</p>
          <ul>
            <li>직무 <span class="empRecord__info__profileInfo__info__job">Web Developer</span></li>
            <li>
              부서 <span class="empRecord__info__profileInfo__info__dept">Product Service</span>
            </li>
            <li>직위 <span class="empRecord__info__profileInfo__info__role">사원</span></li>
          </ul>
        </div>
        <div class="empRecord__info__profileInfo__icons"></div>
      </div>
    </section>

    <section class="empInfo__tabs"></section>
  </main>
</template>

<style lang="scss" scoped>
@import url(./empRecord.css);
</style>
