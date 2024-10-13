<script setup lang="ts">
import PwdIconSVG from '@/assets/login/pwd.svg'
import PwdOffIconSVG from '@/assets/login/pwd-off.svg'
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
        <button id="login-button" type="submit">로그인하기</button>
      </div>
    </div>
    <div>asd</div>
  </div>
</template>

<style lang="scss" scoped>
@import url('./login.css');
.main-background {
  background-color: #eff3f6;
  width: 100vw;
  height: 100vh;
}

.pwd-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pwd-on {
  position: absolute;
  right: 30px;
  top: 11px;
}

.main-title {
  color: #0b134e;
  font-size: 30px;
  font-family: Pretendard-Bold;
  margin-bottom: 0px;
}

.sub-title {
  color: #717179;
  font-family: Pretendard-Medium;
  margin-bottom: 32px;
}

#login-input {
  width: 360px;
  height: 36px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  text-indent: 12px;
  font-size: 14px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}

#login-button {
  width: 365px;
  height: 38px;
  background-color: #05153b;
  font-family: Pretendard-SemiBold;
  font-size: 14px;
  color: #ffffff;
  border-radius: 8px;
  border: none;
  margin-top: 10px;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.child {
  background-color: #ffffff;
  width: 400px;
  height: 300px;
  border-radius: 8px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  padding: 30px;
  text-align: center;
}
</style>
