<script setup lang="ts">
import BaseBlueButton from '@/components/buttons/BaseBlueButton.vue'
import { BaseWhiteBtn } from '@/components/buttons/BaseWhiteButton.stories'
import BaseWhiteButton from '@/components/buttons/BaseWhiteButton.vue'
import BaseWhiteMoveBtn from '@/components/buttons/BaseWhiteMoveBtn.vue'
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

interface Tree {
  label: string
  children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const data: Tree[] = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1'
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1'
          }
        ]
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1'
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1'
          }
        ]
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1'
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1'
          }
        ]
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1'
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1'
          }
        ]
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1'
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1'
          }
        ]
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1'
          }
        ]
      }
    ]
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1'
          }
        ]
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1'
          }
        ]
      }
    ]
  }
]

const defaultProps = {
  children: 'children',
  label: 'label'
}

const checkAll = ref(false)
const isIndeterminate = ref(true)
const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? cities : []
  isIndeterminate.value = false
}
const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === cities.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
}
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
          <div class="attendanceWork-body-title">결재선</div>
          <div class="attendanceWork-body-right-container">
            <el-scrollbar class="attendanceWork-body-depart--left">
              <el-tree
                class="attendanceWork-tree"
                style="max-width: 600px"
                :data="data"
                :props="defaultProps"
                @node-click="handleNodeClick"
              />
            </el-scrollbar>
            <div class="attendanceWork-body-depart--right">
              <el-checkbox
                v-model="checkAll"
                :indeterminate="isIndeterminate"
                @change="handleCheckAllChange"
              >
                Check all
              </el-checkbox>
              <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :key="city" :label="city" :value="city">
                  {{ city }}
                </el-checkbox>
              </el-checkbox-group>
            </div>
            <div class="attendanceWork-body-btn-container">
              <div class="attendanceWork-body-right-btn--top">
                <BaseWhiteMoveBtn text="결재" width="57px" height="30px" font-size="12px">
                </BaseWhiteMoveBtn>

                <BaseWhiteButton
                  text="초기화"
                  width="57px"
                  height="30px"
                  font-size="12px"
                ></BaseWhiteButton>
              </div>

              <div class="attendanceWork-body-right-btn--bottom">
                <BaseWhiteMoveBtn text="참조" width="57px" height="30px" font-size="12px">
                </BaseWhiteMoveBtn>
                <BaseWhiteButton
                  text="초기화"
                  width="57px"
                  height="30px"
                  font-size="12px"
                ></BaseWhiteButton>
              </div>
            </div>

            <div class="attendanceWork-body-right-last">
              <el-scrollbar class="attendanceWork-body-right-last--top">
                <div class="attendanceWork-user-card" v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 10]">
                  <div class="attendanceWork-user-card--text">김유경 대표이사</div>
                  <img src="@/assets/attendance/close.svg" />
                </div>
              </el-scrollbar>
              <el-scrollbar class="attendanceWork-body-right-last--bottom">
                <div class="attendanceWork-user-card" v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 10]">
                  <div class="attendanceWork-user-card--text">김유경 대표이사</div>
                  <img src="@/assets/attendance/close.svg" />
                </div>
              </el-scrollbar>
            </div>
          </div>
        </section>
      </section>

      <section class="attendanceWork-btn">
        <BaseWhiteButton text="취소" width="65px" height="30px" font-size="12px"></BaseWhiteButton>
        <BaseBlueButton text="결재" width="65px" height="30px" font-size="12px"></BaseBlueButton>
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
