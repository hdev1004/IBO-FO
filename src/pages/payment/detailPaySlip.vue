<script setup lang="ts">
import WhiteDownloadButton from '@/components/buttons/WhiteDownloadButton.vue';

</script>

<template>
  <main class="container">
    <div class="detailPay-monthInfo">
      <div class="title">2024.12</div>
      <div class="title-v-line"></div>
      <div class="title-sub">
        <div>급여지급일</div>
        <div>2025년 1월 10일</div>
      </div>

      <div class="title-cal">
        <div class="title-cal-today">이번달</div>
        <img src="@/assets/share/arrow_black.svg"></img>
        <div class="title-cal-nu">9월</div>
        <img src="@/assets/share/arrow_white.svg"></img>
      </div>
    </div>

    <div class="title-line"></div>

    <div class="pay-title">급여</div>

    <div class="pay-nu">
      <div>실 수령액</div>
      <img src="@/assets/share/info.svg"></img>
      <span>5,639,607원</span>

      <div class="pay-down">
        <WhiteDownloadButton text="월급명세서 다운로드" font-size="14px" width="150px" font-weight="bold"></WhiteDownloadButton>
      </div>
    </div>
    <div class="demo-progress">
      <el-progress :percentage="50" />
    </div>

    <div class="pay-detail">
      <div class="pay-detail-title">지급내역</div>

      <section class="pay-detail-content">
        <section>
          <div class="pay-green pay-row">
            <div>기본급</div>
            <div>3,545,203원</div>
          </div>

          <div class="pay-green pay-row">
            <div class="pay-row-main">
              <div>초과근무수당</div>
              <img src="@/assets/share/info.svg"></img>
            </div>

            <div class="pay-row-sub">
              <div>2,521,454원</div>
              <div>8.17 ~ 9.17 기간 내</div>
            </div>
          </div>

        </section>

        <section>
          <div class="pay-red pay-row">
            <div>공제 내역</div>
            <div>100,000원</div>
          </div>

          <div class="pay-red pay-row">
            <div>공제 내역</div>
            <div>100,000원</div>
          </div>

          <div class="pay-red pay-row">
            <div>공제 내역</div>
            <div>100,000원</div>
          </div>
        </section>
      </section>
    </div>

    <div class="title-line"></div>

    <section class="pay-total">
      <section>
        <div class="pay-row green">
          <div>지급 총액</div>
          <div>6,666,667 원</div>
        </div>
      </section>

      <section>
        <div class="pay-row red">
          <div>공제 총액</div>
          <div>6,666,667 원</div>
        </div>

        <div class="pay-row normal">
          <div>실 수령액</div>
          <div>6,666,667 원</div>
        </div>

      </section>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import url('./detailPaySlip.css');

.demo-progress .el-progress--line {
  margin-bottom: 15px;
  height: 60px;
  box-sizing: border-box;
  width: calc(100%);
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #ddd;
}
</style>
