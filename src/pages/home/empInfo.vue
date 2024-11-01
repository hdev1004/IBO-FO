<script setup lang="ts">
import SearchSVG from '@/assets/home/search.svg'
import ArrowBottomSVG from '@/assets/home/arrow-bottom.svg'
import SearchProfileSVG from '@/assets/home/home_searchProfile.svg'
import MainProfileSVG from '@/assets/home/home_mainProfile.svg'
import { el } from 'element-plus/es/locales.mjs'
</script>

<template>
  <BaseTitle text="인사정보관리" style="margin-top: 80px; margin-left: 80px"></BaseTitle>
  <main class="empInfo">
    <section class="empInfo__searchInfo">
      <div class="empInfo__searchInfo__empStatus">
        <span>전체 50</span>
        <div class="v-line"></div>
        <span>재직 47</span>
        <div class="v-line"></div>
        <span>퇴사 3</span>
      </div>
      <div class="empInfo__searchInfo__empSearch">
        <input type="text" maxlength="10" placeholder="사원명 또는 사번을 입력하세요" />
        <img :src="SearchSVG" class="empInfo__searchInfo__empSearch-searchBtn" />
      </div>

      <article class="empInfo__searchInfo__empCards">
        <div class="empInfo__searchInfo__empCards__ordering">
          <span>등록순</span>
          <img :src="ArrowBottomSVG" />
        </div>
        <el-scrollbar class="empInfo__searchInfo__empCards__cards">
          <div class="empInfo__searchInfo__empCards__card">
            <div class="empInfo__searchInfo__empCards__card__item">
              <figure class="empInfo__searchInfo__empCards__card__item__profile">
                <img :src="SearchProfileSVG" />
              </figure>
              <div class="empInfo__searchInfo__empCards__card__item__info">
                <p>허광한 사원 (1990.10.31)</p>
                <p>IBO > Product Service > 개발 1팀</p>
                <hr />

                <p>2024.09.13 입사</p>
              </div>
            </div>
          </div>
          <div class="empInfo__searchInfo__empCards__card">
            <div class="empInfo__searchInfo__empCards__card__item">
              <figure class="empInfo__searchInfo__empCards__card__item__profile">
                <img :src="SearchProfileSVG" />
              </figure>
              <div class="empInfo__searchInfo__empCards__card__item__info">
                <p>허광한 사원 (1990.10.31)</p>
                <p>IBO > Product Service > 개발 1팀</p>
                <hr />

                <p>2024.09.13 입사</p>
              </div>
            </div>
          </div>
          <div class="empInfo__searchInfo__empCards__card">
            <div class="empInfo__searchInfo__empCards__card__item">
              <figure class="empInfo__searchInfo__empCards__card__item__profile">
                <img :src="SearchProfileSVG" />
              </figure>
              <div class="empInfo__searchInfo__empCards__card__item__info">
                <p>허광한 사원 (1990.10.31)</p>
                <p>IBO > Product Service > 개발 1팀</p>
                <hr />

                <p>2024.09.13 입사</p>
              </div>
            </div>
          </div>
          <div class="empInfo__searchInfo__empCards__card">
            <div class="empInfo__searchInfo__empCards__card__item">
              <figure class="empInfo__searchInfo__empCards__card__item__profile">
                <img :src="SearchProfileSVG" />
              </figure>
              <div class="empInfo__searchInfo__empCards__card__item__info">
                <p>허광한 사원 (1990.10.31)</p>
                <p>IBO > Product Service > 개발 1팀</p>
                <hr />

                <p>2024.09.13 입사</p>
              </div>
            </div>
          </div>
          <div class="empInfo__searchInfo__empCards__card">
            <div class="empInfo__searchInfo__empCards__card__item">
              <figure class="empInfo__searchInfo__empCards__card__item__profile">
                <img :src="SearchProfileSVG" />
              </figure>
              <div class="empInfo__searchInfo__empCards__card__item__info">
                <p>허광한 사원 (1990.10.31)</p>
                <p>IBO > Product Service > 개발 1팀</p>
                <hr />

                <p>2024.09.13 입사</p>
              </div>
            </div>
          </div>
          <div class="empInfo__searchInfo__empCards__card">
            <div class="empInfo__searchInfo__empCards__card__item">
              <figure class="empInfo__searchInfo__empCards__card__item__profile">
                <img :src="SearchProfileSVG" />
              </figure>
              <div class="empInfo__searchInfo__empCards__card__item__info">
                <p>허광한 사원 (1990.10.31)</p>
                <p>IBO > Product Service > 개발 1팀</p>
                <hr />

                <p>2024.09.13 입사</p>
              </div>
            </div>
          </div>
        </el-scrollbar>
      </article>
    </section>
    <section class="empInfo__mainInfo">
      <figure class="empInfo__mainInfo__profile">
        <img :src="MainProfileSVG" class="empInfo__mainInfo__profile__img" />
        <div class="empInfo__mainInfo__profile__info">
          <p class="empInfo__mainInfo__profile__info__name">허광한</p>
          <ul>
            <li>직무 <span class="empInfo__mainInfo__profile__info__job">Web Developer</span></li>
            <li>
              부서 <span class="empInfo__mainInfo__profile__info__dept">Product Service</span>
            </li>
            <li>직위 <span class="empInfo__mainInfo__profile__info__role">사원</span></li>
          </ul>
        </div>
      </figure>
      <article class="empInfo__mainInfo__infoWrap">
        <!-- <ul class="empInfo__mainInfo__infoWrap__tabMenu">
          <li><button class="empInfo__mainInfo__infoWrap__tabMenu-basic">기본정보</button></li>
          <li><button class="empInfo__mainInfo__infoWrap__tabMenu-salary">급여정보</button></li>
        </ul>
        <div class="empInfo__mainInfo__infoWrap__modifyBtns">
          <button class="empInfo__mainInfo__infoWrap__modifyBtns-registertBtn">등록</button>
          <button class="empInfo__mainInfo__infoWrap__modifyBtns-edittBtn">수정</button>
        </div> -->
        <div class="empInfo__mainInfo__infoWrap__infoTable">
          <table>
            <tbody>
              <tr>
                <th style="border-radius: 5px 0px 0px 0px">성명 *</th>
                <td>허광한</td>
                <th>내/외국인 구분</th>
                <td>내국인/대한민국</td>
              </tr>
              <tr>
                <th>입사년월일 *</th>
                <td>2024.09.13</td>
                <th>주민등록번호 *</th>
                <td>19901031-1927492</td>
              </tr>
              <tr>
                <th>직원구분</th>
                <td>사원</td>
                <th>퇴사년월일</th>
                <td>-</td>
              </tr>
              <tr>
                <th>내부번호</th>
                <td>234-2323</td>
                <th>부서</th>
                <td>Product Service</td>
              </tr>
              <tr>
                <th>휴대폰번호 *</th>
                <td>010-2432-2344</td>
                <th>직급</th>
                <td>사원</td>
              </tr>
              <tr>
                <th>주소</th>
                <td>경기도 고양시 어디동 어디아파트 2동 917호</td>
                <th>이메일</th>
                <td>gjrhkdgks@naver.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import url(./empInfo.css);
</style>
