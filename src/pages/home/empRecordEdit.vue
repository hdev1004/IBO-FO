<script setup lang="ts">
import BaseBlueButton from '@/components/buttons/BaseBlueButton.vue'
import BaseTitle from '@/components/title/BaseTitle.vue'
import { ref } from 'vue'
import type { UploadProps } from 'element-plus'
import { ElMessage } from 'element-plus'
import { Picture } from '@element-plus/icons-vue'

const birth = ref('')
const imageUrl = ref('')

const handleProfileSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeProfileUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage({
      message: '프로필 이미지는 JPG 형식만 가능합니다.',
      type: 'error',
      plain: true
    })
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage({
      message: '파일 용량은 2MB를 초과할 수 없습니다.',
      type: 'error',
      plain: true
    })
    return false
  }
  return true
}

const saveInfo = () => {
  ElMessage({
    message: '정보 수정이 완료되었습니다.',
    type: 'success',
    plain: true
  })
}
</script>

<template>
  <BaseTitle text="정보수정" style="margin-top: 60px; margin-left: 118px"></BaseTitle>
  <main class="container">
    <section class="editWrap">
      <div class="editWrap__input">
        <div class="editWrap__input__name">
          <label for="name">이름</label>
          <input type="text" id="name" maxlength="6" placeholder="이름을 입력하세요" />
        </div>
        <div class="editWrap__input__tel">
          <label for="tel">전화번호</label>
          <input type="tel" id="tel" maxlength="11" placeholder="'-'를 제외하고 입력하세요" />
        </div>
        <div class="editWrap__input__email">
          <label for="email">이메일</label>
          <input type="email" id="email" maxlength="64" placeholder="이메일을 입력하세요" />
        </div>
        <div class="editWrap__input__birth">
          <label>생년월일</label>
          <el-date-picker
            v-model="birth"
            class="birth-datepicker"
            type="date"
            size="large"
            placeholder="일자를 선택하세요"
          />
        </div>
      </div>

      <div class="editWrap__profile">
        <el-upload
          class="editWrap__profile-upload"
          :show-file-list="false"
          :on-success="handleProfileSuccess"
          :before-upload="beforeProfileUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="profileImg" />
          <el-icon v-else class="profile-upload-icon"><Picture /></el-icon>
        </el-upload>

        <label for="profile">프로필 이미지</label>
      </div>
    </section>
    <BaseBlueButton
      text="저장"
      style="width: 161px; height: 35px"
      class="saveBtn"
      @click="saveInfo"
    ></BaseBlueButton>
  </main>
</template>

<style lang="scss" scoped>
@import url(./empRecordEdit.css);
</style>
