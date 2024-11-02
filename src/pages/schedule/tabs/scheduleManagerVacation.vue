<script setup lang="ts">
const year = ref(2024) //현재 년도
const month = ref(new Date().getMonth()) // 현재 월
const calendar = ref<Array<Array<number>>>([[]]) //달력 저장

function generateMonthlyCalendar(year: number, month: number) {
  const daysInMonth = new Date(year, month, 0).getDate() // 해당 월의 일 수 계산
  const firstDay = new Date(year, month - 1, 1).getDay() // 해당 월의 첫째 날 요일 (0: 일요일 ~ 6: 토요일)

  let calendar = []
  let week = Array(firstDay).fill(null) // 첫 주의 첫날 앞 빈 공간을 null로 채움

  for (let day = 1; day <= daysInMonth; day++) {
    week.push(day)

    // 한 주가 끝나면 배열에 추가하고 새 주를 시작
    if (week.length === 7) {
      calendar.push(week)
      week = []
    }
  }

  // 남은 일수를 마지막 주로 추가
  if (week.length > 0) {
    week = week.concat(Array(7 - week.length).fill(null))
    calendar.push(week)
  }

  if (calendar.length === 5) {
    //5줄 이면
    calendar.push([null, null, null, null, null, null, null])
  }

  return calendar
}

const upMonth = () => {
  let date = new Date(year.value, month.value)
  date.setMonth(date.getMonth() + 1)
  console.log('DATE : ', date)
  year.value = date.getFullYear()
  month.value = date.getMonth()
  console.log(year.value + ', ' + month.value)
  calendar.value = generateMonthlyCalendar(date.getFullYear(), date.getMonth() + 1)
}

const downMonth = () => {
  let date = new Date(year.value, month.value)
  date.setMonth(date.getMonth() - 1)
  console.log('DATE : ', date)
  year.value = date.getFullYear()
  month.value = date.getMonth()
  console.log(year.value + ', ' + month.value)
  calendar.value = generateMonthlyCalendar(date.getFullYear(), date.getMonth() + 1)
}

const todayMonth = () => {
  let date = new Date()
  year.value = date.getFullYear()
  month.value = date.getMonth()
  calendar.value = generateMonthlyCalendar(date.getFullYear(), date.getMonth() + 1)
}

const load = () => {
  calendar.value = generateMonthlyCalendar(year.value, month.value + 1)
  console.log(calendar.value)
}

load()
</script>

<template>
  <section>
    <div class="schedule-body-header">
      <div class="schedule-body-header-headquarters">
        <div class="schedule-headquarters-group">
          <div class="schedule-headquarters">
            <div class="headquarters--color"></div>
            <div class="headquarters--text">개발 본부1</div>
          </div>

          <div class="schedule-headquarters">
            <div class="headquarters--color"></div>
            <div class="headquarters--text">개발 본부2</div>
          </div>
        </div>

        <div class="schedule-headquarters-group">
          <div class="schedule-headquarters">
            <div class="headquarters--color"></div>
            <div class="headquarters--text">운영 본부1</div>
          </div>

          <div class="schedule-headquarters">
            <div class="headquarters--color"></div>
            <div class="headquarters--text">운영 본부2</div>
          </div>
        </div>

        <div class="schedule-headquarters-group">
          <div class="schedule-headquarters">
            <div class="headquarters--color"></div>
            <div class="headquarters--text">영업 본부1</div>
          </div>

          <div class="schedule-headquarters">
            <div class="headquarters--color"></div>
            <div class="headquarters--text">영업 본부2</div>
          </div>
        </div>
      </div>
      <div class="schedule-date">
        <img src="@/assets/schedule/left.svg" @click="downMonth" />
        <div class="schedule-date--text">{{ year }}.{{ month + 1 }}</div>
        <img src="@/assets/schedule/right.svg" @click="upMonth" />

        <div class="schedule-date-button" @click="todayMonth">오늘</div>
      </div>
      <div class="schedule-add">일정등록</div>
    </div>

    <div class="schedule-calendar">
      <div class="schedule-calendar-week">
        <div class="schedule-calendar--sunday">일</div>
        <div>월</div>
        <div>화</div>
        <div>수</div>
        <div>목</div>
        <div>금</div>
        <div class="schedule-calendar--saturday">토</div>
      </div>

      <div class="schedule-calendar-date">
        <div v-for="date in calendar" class="schedule-calendar-row">
          <div
            :class="date[0] ? 'schedule-calendar-active' : 'schedule-calendar-inactive'"
            class="schedule-calendar--sunday"
          >
            {{ date[0] }}
          </div>
          <div :class="date[1] ? 'schedule-calendar-active' : 'schedule-calendar-inactive'">
            {{ date[1] }}
          </div>
          <div :class="date[2] ? 'schedule-calendar-active' : 'schedule-calendar-inactive'">
            {{ date[2] }}
          </div>
          <div :class="date[3] ? 'schedule-calendar-active' : 'schedule-calendar-inactive'">
            {{ date[3] }}
          </div>
          <div :class="date[4] ? 'schedule-calendar-active' : 'schedule-calendar-inactive'">
            {{ date[4] }}
          </div>
          <div :class="date[5] ? 'schedule-calendar-active' : 'schedule-calendar-inactive'">
            {{ date[5] }}
          </div>
          <div
            :class="date[6] ? 'schedule-calendar-active' : 'schedule-calendar-inactive'"
            class="schedule-calendar--saturday"
          >
            {{ date[6] }}
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </section>
</template>

<style lang="scss" scoped>
@import url('./scheduleManagerVacation.css');
</style>
