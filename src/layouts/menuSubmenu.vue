<script setup lang="ts">
import menuData from './menu.json'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  currentMenu: {
    type: String,
    default: 'home'
  },
  menuIsShow: {
    type: Boolean,
    defualt: false
  }
})

const menuClick = (obj: any, item: string) => {
  //console.log('Obj : ', obj[item])
  const url = obj[item]
  router.push(`/${props.currentMenu}${url}`)
}

//console.log('Current : ', props.currentMenu)
</script>

<template>
  <section
    :class="menuIsShow ? 'submenu' : 'submenu-hidden'"
    v-if="props.currentMenu && Object.keys(menuData[props.currentMenu]).length > 0"
  >
    <div
      v-for="item in Object.keys(menuData[props.currentMenu])"
      class="menuSubmenu__card"
      @click="menuClick(menuData[props.currentMenu], item)"
    >
      {{ item }}
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import url('./menuSubmenu.css');
</style>
