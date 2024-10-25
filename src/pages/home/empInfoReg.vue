<script setup lang="ts"></script>

<template>
  <div class="empInfoReg-title">
    <BaseTitle text="정보등록"></BaseTitle>
  </div>
  <div class="left">
    <div class="left-inner">
      <p class="inner-title">프로필 사진</p>
      <input placeholder="사진을 첨부해주세요!" readonly />
      <p class="inner-cntn1">프로필 사진을 첨부해주세요!</p>
      <p class="inner-cntn2">
        첨부하는 사진은 직원 등록 및 확인용으로 사용됩니다.<br />
        가로 140px, 세로 180px 이상을 권장합니다. <br />
        사진 크기가 초과되면 강제로 조정됩니다.
      </p>
      <p class="inner-cntn3">
        * 비정상적인 사진이 아닌 본인 사진만 등록해주세요. <br />
        (AI사진 또한 비정상적인 사진에 포함됩니다.)
      </p>
      <button class="insert-file">파일 선택</button>
    </div>
  </div>
  <div class="right">
    <div class="right-inner">
      <p>직원 정보</p>
      <form>
        <label>성명</label>
        <input type="text" /> <br />
        <label>성별</label>
        <input type="radio" value="male" />남자 <input type="radio" value="female" />여자 <br />
        <label>거주구분</label>
        <input type="radio" value="local" />내국인 <input type="radio" value="foreigner" />외국인
      </form>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .empInfoReg-title {
    background-color: aqua;
  }

  .insert-file {
    background-color: white;
    width: 100px;
    height: 35px;
    border: 1px #d2d2d2 solid;
    border-radius: 5px;
  }

  .inner-cntn1 {
    font-family: Pretendard-Bold;
    color: #05153b;
    font-size: 14px;
  }

  .inner-cntn2 {
    font-family: Pretendard-Regular;
    color: #717179;
    font-size: 14px;
    line-height: 20px;
  }

  .inner-cntn3 {
    font-family: Pretendard-SemiBold;
    color: red;
    font-size: 14px;
    line-height: 20px;
  }

  .left-inner {
    border-radius: 8px;
    border: 1px #d2d2d2 solid;
    width: 530px;
    height: 338px;
    background-color: white;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  }

  .left-inner > input {
    width: 160px;
    height: 220px;
    border: 1px #d2d2d2 solid;
    border-radius: 8px;
    outline: none;
    float: left;
  }

  .inner-title {
    font-family: Pretendard-Bold;
    color: #05153b;
    font-size: 16px;
  }

  .left {
    width: 50%;
    float: left;
    box-sizing: border-box;
    background-color: ivory;
  }

  .right {
    width: 50%;
    float: right;
    box-sizing: border-box;
    background-color: yellowgreen;
  }

  .right-inner {
    border-radius: 8px;
    border: 1px #d2d2d2 solid;
    width: 743px;
    height: 617px;
    background-color: white;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  }

  .right-inner > p {
    font-family: Pretendard-Bold;
    color: #05153b;
    font-size: 16px;
  }
}
</style>
