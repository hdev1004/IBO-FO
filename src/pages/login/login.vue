<script setup lang="ts">
import PwdIconSVG from '@/assets/login/pwd.svg'
import PwdOffIconSVG from '@/assets/login/pwd-off.svg'

const router = useRouter()
const login = () => {
  router.push({
    path: '/'
  })
}
</script>

<template>
  <div class="main-background">
    <div class="container">
      <div class="child">
        <p class="main-title">IBO</p>
        <p class="sub-title">IBO ERP 인사관리 솔루션</p>
        <div><input id="login-input" type="text" placeholder="회사 이메일을 입력해주세요" /></div>
        <div class="pwd-container">
          <input id="login-input" type="password" placeholder="비밀번호를 입력해주세요" />
          <img :src="PwdIconSVG" class="pwd-on" />
        </div>
        <button id="login-button" type="submit" @click="login()">로그인하기</button>
      </div>
    </div>
    <div class="footer-container">
      <span class="footer-con1">이용약관</span>
      <span class="footer-con2">개인정보처리방침</span>
      <p class="footer-main">© 2024 IBO</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('./login.css');
</style>
