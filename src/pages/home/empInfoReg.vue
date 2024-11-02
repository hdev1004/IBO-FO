<script setup lang="ts">
import BaseBlueButton from '@/components/buttons/BaseBlueButton.vue'
</script>

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
    <div class="left-gropInfo">
      <p>그룹 정보</p>
      <form>
        <div>
          <div class="empInfo-reg-cate">
            <label>구분</label>
            <select name="empCategory" id="empCategory">
              <option value="regular">정규직</option>
              <option value="contract">계약직</option>
            </select>
          </div>
          <div class="empInfo-reg-empnumber">
            <label>사번</label>
            <input type="text" id="empnumber" readonly /><br />
          </div>
          <div class="empInfo-reg-position">
            <label>직급</label>
            <select name="empPosition" id="empPosition">
              <option value="engineer">연구원</option>
              <option value="associate">주임</option>
              <option value="senior">전임</option>
              <option value="lead">선임</option>
              <option value="head">팀장</option>
              <option value="general">부장</option>
              <option value="principal">수석</option>
            </select>
          </div>
          <div class="empInfo-reg-join">
            <label>입사일</label>
            <input type="text" /><br />
          </div>
          <div class="empInfo-reg-belonging">
            <label>소속</label>
            <input type="text" id="cntr" />
            <input type="text" id="team" />
            <input type="text" id="part" />
          </div>
        </div>
      </form>
    </div>
  </div>
  <div class="right">
    <div class="right-inner">
      <p>직원 정보</p>
      <form>
        <div class="empInfo-reg-name">
          <label>성명</label>
          <input type="text" /><br />
        </div>
        <div class="empInfo-reg-sex">
          <label>성별</label>
          <input type="radio" name="sex-type" value="male" />남자
          <input type="radio" name="sex-type" value="female" />여자<br />
        </div>
        <div class="empInfo-reg-area">
          <label>거주구분</label>
          <input type="radio" name="area" value="local" />내국인
          <input type="radio" name="area" value="foreigner" />외국인<br />
        </div>
        <div class="empInfo-reg-date">
          <label>생년월일</label>
          <input type="text" /><br />
        </div>
        <div class="empInfo-reg-mail">
          <label>이메일</label>
          <input type="text" /><br />
        </div>
        <div class="empInfo-reg-tel">
          <label>전화번호</label>
          <input type="text" /><br />
        </div>
        <div class="empInfo-reg-emer">
          <label>비상 연락망</label>
          <input type="text" /><br />
        </div>
        <div class="empInfo-reg-add">
          <label>주소</label>
          <input type="text" /> <button>도로명 검색</button><br />
          <label>상세주소</label>
          <input type="text" id="detail-add" /> <br />
          <label>우편번호</label>
          <input style="width: 100px" type="text" id="post-number" readonly /><br />
        </div>
        <div class="final-button">
          <button id="emp-reset">초기화</button>
          <BaseBlueButton width="100px" height="30px" text="등록"></BaseBlueButton>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url(./empInfoReg.css);
</style>
