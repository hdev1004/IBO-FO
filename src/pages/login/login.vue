<script setup lang="ts"></script>

<template>
  <section>login</section>
  <div class="container">
    <div class="test">
      <h2>IBO</h2>
      <p>IBO ERP 인사관리 솔루션</p>
      <div><input id="login-input" placeholder="회사 이메일을 입력해주세요" /></div>
      <div><input id="login-input" placeholder="비밀번호를 입력해주세요" /></div>
      <button id="login-button" type="submit">로그인하기</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('./login.css');
.background {
  background-color: #eff3f6;
}

#login-input {
  width: 360px;
  height: 36px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: none;
  outline: none;
  text-indent: 12px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.19);
}

#login-button {
  width: 360px;
  height: 36px;
  background-color: #05153b;
  font-weight: bold;
  color: #ffffff;
  border-radius: 8px;
  border: none;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.test {
  background-color: aquamarine;
  width: 400px;
  height: 300px;
  justify-content: center;
  align-items: center;
}
</style>
