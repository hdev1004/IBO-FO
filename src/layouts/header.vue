<script setup lang="ts">
import AlarmSVG from '@/assets/header/alarm.svg'
import AlarmActiveSVG from '@/assets/header/alarm_active.svg'
import ArrowBottomSVG from '@/assets/header/arrow-bottom.svg'
import ProfileSVG from '@/assets/header/profile.svg'
</script>

<template>
  <section>
    <div class="logo">로고</div>
    <div class="profile">
      <div class="profile-contents">
        <span class="profile-name">허광한 님</span>
        <img :src="ArrowBottomSVG" class="profile-btn" />
        <img :src="ProfileSVG" class="profile-img" />
      </div>
      <img :src="AlarmSVG" class="alram" />
      <!-- 알람 활성화시, AlarmActiveSVG -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url('./header.css');
</style>
