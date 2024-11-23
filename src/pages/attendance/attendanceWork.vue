<script setup lang="ts"></script>

<template>
  <section>
    <section>결재 작성</section>
    <section>
      <div>
        <div>남은 연차</div>
        <div>0/15</div>
      </div>

      <div>
        <div>결재 대기</div>
        <div>0/15</div>
      </div>

      <div>
        <div>근태 신청</div>
        <div>0/15</div>
        <div>
          <div>결재하기</div>
          <div>근태 신청하기</div>
        </div>
      </div>
    </section>

    <section>
      <section>
        <!-- left -->
        <div>
          <div>유형</div>
          <input />
        </div>

        <div>
          <div>휴가 기간</div>
          <div>
            <div>달력</div>
            -
            <div>달력</div>
          </div>
        </div>

        <div>
          <div>사유</div>
          <textarea></textarea>
        </div>

        <div>
          <div>첨부</div>
          <div>여기로 파일을 끌어놓으세요</div>
        </div>
      </section>

      <section>
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
    <section>
      <div>취소</div>
      <div>결재</div>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import url('./attendanceWork.css');
</style>
