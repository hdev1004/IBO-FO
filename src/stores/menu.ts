import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuOpenStore = defineStore('useMenuOpenStore', () => {
  const isOpen = ref(false)

  //함수를 하든 변수로 하든 상관이 없음
  const setIsShow = (value: boolean) => {
    isOpen.value = value
  }

  const getIsOpen = () => {
    return isOpen.value
  }

  //getCount대신 count도 가능
  return { setIsShow, getIsOpen }
})
