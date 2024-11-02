import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('useCounterStore', () => {
  const count = ref(0)

  //함수를 하든 변수로 하든 상관이 없음
  const up = () => {
    count.value += 1
  }

  const down = () => {
    count.value -= 1
  }

  const getCount = () => {
    return count.value
  }

  //getCount대신 count도 가능
  return { up, down, getCount }
})
