<script setup lang="ts">
import HomeSvg from '@/assets/menu/HomeSvg.vue'
import CalendarSvg from '@/assets/menu/CalendarSvg.vue'

import AlarmSvg from '@/assets/menu/AlarmSvg.vue'
import WalletSvg from '@/assets/menu/WalletSvg.vue'
import DeleteSvg from '@/assets/menu/DeleteSvg.vue'
import QuerySvg from '@/assets/menu/QuerySvg.vue'
import MenuButton from '@/components/buttons/MenuButton.vue'
import MenuSubmenu from './menuSubmenu.vue'
import { useMenuOpenStore } from '@/stores/menu'

const openStore = useMenuOpenStore()

//현재 메뉴 변수
let currentMenu = ref('')
const clickMenu = (type: string) => {
  openStore.setIsShow(true)
  currentMenu.value = type
}
</script>

<template>
  <section class="menu">
    <section class="menu__menu">
      <div style="height: 20px"></div>

      <MenuButton
        :ImgSvg="HomeSvg"
        text="홈피드"
        @click="clickMenu('home')"
        :fill="currentMenu === 'home' ? '#05153B' : '#717179'"
      ></MenuButton>
      <MenuButton
        :ImgSvg="CalendarSvg"
        text="일정"
        @click="clickMenu('schedule')"
        :fill="currentMenu === 'schedule' ? '#05153B' : '#717179'"
      ></MenuButton>
      <MenuButton
        :ImgSvg="AlarmSvg"
        text="근태"
        @click="clickMenu('attendance')"
        :fill="currentMenu === 'attendance' ? '#05153B' : '#717179'"
      ></MenuButton>
      <MenuButton
        :ImgSvg="WalletSvg"
        text="급여"
        @click="clickMenu('payment')"
        :fill="currentMenu === 'payment' ? '#05153B' : '#717179'"
      ></MenuButton>
      <MenuButton
        :ImgSvg="DeleteSvg"
        text="퇴직"
        @click="clickMenu('retired')"
        :fill="currentMenu === 'retired' ? '#05153B' : '#717179'"
      ></MenuButton>
      <MenuButton
        :ImgSvg="QuerySvg"
        text="FAQ"
        @click="clickMenu('faq')"
        :fill="currentMenu === 'faq' ? '#05153B' : '#717179'"
      ></MenuButton>
    </section>

    <section>
      <MenuSubmenu :currentMenu="currentMenu" :menuIsShow="openStore.getIsOpen()"></MenuSubmenu>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import url('./menu.css');
</style>
