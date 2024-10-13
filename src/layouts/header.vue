<script setup lang="ts">
import AlarmSVG from '@/assets/header/alarm.svg'
import AlarmActiveSVG from '@/assets/header/alarm_active.svg'
import ArrowBottomSVG from '@/assets/header/arrow-bottom.svg'
import ProfileSVG from '@/assets/header/profile.svg'

const isMenuOpen = ref(false)
let currentMenu = ref('')

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  // true
}
const clickMenu = (type: string) => {
  currentMenu.value = type
  isMenuOpen.value = false
}
</script>

<template>
  <header>
    <div class="header__logo">로고</div>
    <div class="header__profile">
      <div class="profile__contents">
        <p class="profile__contents-name">허광한 님</p>
        <img
          :src="ArrowBottomSVG"
          class="profile__contents-toggleBtn"
          @click="toggleMenu"
          :class="{ active: isMenuOpen }"
        />
      </div>
      <img :src="ProfileSVG" class="header__profile-img" />
      <img :src="AlarmSVG" class="header__profile-alaram" />
      <!-- 알람 활성화시, AlarmActiveSVG -->
    </div>

    <!-- 드롭다운 메뉴 -->
    <section class="header__toggleMenu" v-if="isMenuOpen">
      <ul>
        <li @click="clickMenu('')">개인정보 변경</li>
        <!-- 개인정보 변경은 인사기록카드로 이동 -->
        <li @click="clickMenu('logout')">로그아웃</li>
      </ul>
    </section>
  </header>
</template>

<style lang="scss" scoped>
@import url('./header.css');
</style>
