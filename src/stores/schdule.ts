import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSchduleStore = defineStore('useScheduleStore', () => {
  //일정 등록 변수
  const isScheduleAdd = ref(false)

  //일정 등록 변수 setter
  /**
   * 일정 등록 setter
   * @param value true & false
   */
  const setIsSchedule = (value: boolean) => {
    isScheduleAdd.value = value
  }

  /**
   * 일정등록 getter
   * @returns isOpenModal
   */
  const getIsSchedule = () => {
    return isScheduleAdd.value
  }

  return { isScheduleAdd, getIsSchedule, setIsSchedule }
})
