<script setup lang="ts">
import BaseTitle from '@/components/title/BaseTitle.vue'

const vacationType = ref(null)
const vacationOptions = [
  {
    value: '연차',
    label: '연차'
  },
  {
    value: '반차',
    label: '반차'
  },
  {
    value: '공가',
    label: '공가'
  },
  {
    value: '경조사',
    label: '경조사'
  },
  {
    value: '월차',
    label: '월차'
  }
]
const vacationDate = ref(null)
const resonse = ref('')
</script>

<template>
  <section class="attendanceWork">
    <section class="attendanceWork-title">
      <BaseTitle text="결재 작성"></BaseTitle>
    </section>
    <section class="attendanceWork-menu">
      <div class="attendanceWork-menu-card">
        <div>
          <span class="attendanceWork-menu-card-title">남은 연차</span>
          <img src="@/assets/attendance/vacation.svg" />
        </div>
        <div class="attendanceWork-menu-card-num">
          0 / <span class="attendanceWork-menu-card-num--hidden">15</span>
        </div>
      </div>

      <div class="attendanceWork-menu-card">
        <div>
          <span class="attendanceWork-menu-card-title">결재 대기</span>
          <img src="@/assets/attendance/stop.svg" />
        </div>
        <div class="attendanceWork-menu-card-num">
          0 <span class="attendanceWork-menu-card-txt">건</span>
        </div>
      </div>

      <div class="attendanceWork-menu-card">
        <div>
          <span class="attendanceWork-menu-card-title">근태 신청</span>
          <img src="@/assets/attendance/upload.svg" />
        </div>
        <div class="attendanceWork-menu-card--row">
          <div class="attendanceWork-menu-card-sub---row">
            <span>결재하기</span>
            <img src="@/assets/attendance/arrow.svg" />
          </div>
          <div class="attendanceWork-menu-card-sub---row">
            <span>근태 신청하기</span>
            <img src="@/assets/attendance/arrow.svg" />
          </div>
        </div>
      </div>
    </section>

    <section class="attendanceWork-body">
      <section class="attendanceWork-body-wrap">
        <section class="attendanceWork-body-left">
          <!-- left -->
          <div class="attendanceWork-body-select">
            <div class="attendanceWork-body-select-text">유형</div>
            <el-select v-model="vacationType" placeholder="선택" style="width: 386px">
              <el-option
                v-for="item in vacationOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>

          <div class="attendanceWork-body-date">
            <div class="attendanceWork-body-select-text">휴가 기간</div>
            <div class="h-blank--20"></div>
            <div>
              <el-date-picker
                style="width: 430px"
                v-model="vacationDate"
                type="daterange"
                start-placeholder="시작일"
                end-placeholder="종료일"
              />
            </div>
          </div>

          <div class="attendanceWork-body-date">
            <div class="attendanceWork-body-select-text">사유</div>
            <div class="h-blank--20"></div>
            <el-input
              v-model="resonse"
              maxlength="500"
              height="100"
              style="width: 450px"
              placeholder="사유를 입력하세요."
              show-word-limit
              type="textarea"
              resize="none"
              :autosize="{ minRows: 5, maxRows: 5 }"
            />
          </div>

          <div class="attendanceWork-body-date">
            <div class="attendanceWork-body-select-text">첨부</div>
            <div class="h-blank--20"></div>

            <el-upload
              style="padding: 0px !important"
              class="upload-demo"
              drag
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              multiple
              :auto-upload="false"
              show-file-list
            >
              <div class="el-upload__text">여기로 <em>파일</em>을 끌어놓으세요</div>
              <template #tip>
                <div class="el-upload__tip">최대 용량은 10MB 입니다.</div>
              </template>
            </el-upload>
          </div>
        </section>

        <section class="attendanceWork-body-right">
          <!-- right -->
          <div>결재선</div>
          <div>
            <div>결재라인1</div>
            <div>결재라인2</div>
            <div>
              <div>결재</div>
              <div>초기화</div>

              <div>참조</div>
              <div>초기화</div>
            </div>

            <div>
              <div>결재란</div>
              <div>참조란</div>
            </div>
          </div>
        </section>
      </section>

      <section class="attendanceWork-btn">
        <div>취소</div>
        <div>결재</div>
      </section>
    </section>
  </section>
</template>

<style lang="scss" scoped>
:deep(.el-upload-dragger) {
  padding: 15px;
  width: 450px;
}

@import url('./attendanceWork.css');
</style>
