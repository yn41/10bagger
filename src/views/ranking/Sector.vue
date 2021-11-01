<template>
  <div class="container">
		<div class="inner">
			<div class="top_reco">
				<div class="unit">
					<div class="bx_info">
						<strong class="txt_hlight">KOSPI</strong>
						<div class="desc">
							<strong>3,031.19</strong> 
							<span class="down">▼17.89</span> <span class="down">-0.59%</span>
						</div>
					</div>
					<div class="bx_chart">
						<div class="btns">
							<button type="button" class="on">1일</button>
							<button type="button">3개월</button>
							<button type="button">1년</button>
						</div>
						<img src="/img/ranking/temp.png" width="232" height="102">
					</div>
				</div>
				<div class="unit">
					<div class="bx_info">
						<strong class="txt_hlight">KOSPI</strong>
						<div class="desc">
							<strong>3,031.19</strong> 
							<span class="up">▲17.89</span> <span class="up">+0.59%</span>
						</div>
					</div>
					<div class="bx_chart">
						<div class="btns">
							<button type="button">1일</button>
							<button type="button">3개월</button>
							<button type="button" class="on">1년</button>
						</div>
						<img src="/img/ranking/temp.png" width="232" height="102">
					</div>
				</div>
			</div>
			<div class="top">
				<h1>섹터/테마 별 기술테마 랭킹</h1>
				<span class="desc">전체 섹터/테마 별 기술기업들을 순위별로 확인할 수 있습니다.</span>
			</div>
			<section class="content">
				<article class="area_chart">
					<div class="unit">
						차트
					</div>
					<div class="unit">
						<div class="bx_tit">
							<h2>섹터 주가 추이 & 추천 종목 현황</h2>
							<div class="both">
								<strong>디스플레이(69항목)</strong> <button type="button">더보기 →</button>
							</div>
						</div>
						<div class="">
							차트
						</div>
						<div class="bx_tit">
							<div class="both">
								<h2>추천종목 수익율 상위</h2> <span><em class="txt_point">-</em> 섹터 수익율 추이</span>
							</div>
						</div>
						<ul class="bx_info">
							<li>- a인베니아 <span class="txt_point">+15.5</span></li>
							<li>- b인베니아 <span class="txt_point">+15.5</span></li>
							<li>- c인베니아 <span class="txt_point">+15.5</span></li>
							<li>- d인베니아 <span class="txt_point">+15.5</span></li>
						</ul>
						<div class="btns">
							<button type="button" class="btn">더보기 +</button>
						</div>
					</div>
				</article>
				<article class="area_selc">
					<div class="unit">
						<h3>
							<span>섹터</span>
							<span class="num">22개</span>
						</h3>
						<Select :list="[
							{name: '-- 섹터를 선택하십시오 --', select: true},
							{name: '디스플레이'},
							{name: '반도체'},
							{name: 'IT'},
							{name: '2차전지'},
							{name: '에너지'},
							{name: '신재생에너지'},
							{name: '의료'},
							{name: '제약/바이오'},
							{name: '게임/컨텐츠/소프트웨어'},
							{name: '미래형 기술'},
							{name: '정보통신'},
							{name: '핀테크'},
							{name: '자동차 모빌리티'},
							{name: '운송장비'},
							{name: '건설/기계'},
						]" />
					</div>
					<div class="unit">
						<h3>
							<span>테마</span>
							<span class="num">120개</span>
						</h3>
						<Select :list="[
							{name: '-- 섹터를 선택하십시오 --', select: true},
							{name: '디스플레이'},
							{name: '반도체'},
							{name: 'IT'},
							{name: '2차전지'},
							{name: '에너지'},
							{name: '신재생에너지'},
							{name: '의료'},
							{name: '제약/바이오'},
							{name: '게임/컨텐츠/소프트웨어'},
							{name: '미래형 기술'},
							{name: '정보통신'},
							{name: '핀테크'},
							{name: '자동차 모빌리티'},
							{name: '운송장비'},
							{name: '건설/기계'},
						]" />
					</div>
				</article>
				<article class="area_list">
					<div class="tap">
						<button type="button" class="on">투자매력도순(기술투자지순)</button>
						<button type="button">기술력순(TSS)</button>
						<button type="button">기술등급(TCG)</button>
					</div>
					<table class="tbl">
						<colgroup>
							<col width="80"/>
							<col/>
							<col/>
							<col/>
							<col width="160"/>
							<col/>
							<col/>
							<col/>
							<col/>
							<col width="130"/>
							<col width="110"/>
						</colgroup>
						<thead>
							<tr>
								<th>순위</th>
								<th>종목코드</th>
								<th>시장 <Tooltip desc="해당하는 설명을 써주세요!!"/></th>
								<th>종목명</th>
								<th>기술투자지수 <Tooltip desc="해당하는 설명을 써주세요!!"/></th>
								<th>시가총액</th>
								<th>TSS <Tooltip desc="해당하는 설명을 써주세요!!"/></th>
								<th>TCG <Tooltip desc="해당하는 설명을 써주세요!!"/></th>
								<th>APES <Tooltip desc="해당하는 설명을 써주세요!!"/></th>
								<th>기업가치추정</th>
								<th>리포트구매 <Tooltip classNm="left" desc="해당하는 설명을 써주세요!!"/></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>00020</td>
								<td>KOSPI</td>
								<td>엔베니아</td>
								<td>0.82</td>
								<td>564</td>
								<td>546.11</td>
								<td>A+</td>
								<td>62.5</td>
								<td>
									<div class="bx_value">
										<span class="on">저평가</span><span>적정</span><span>고평가</span>
									</div>
								</td>
								<td>
									<button type="button" class="btn_excel">엑셀</button>
									<button type="button" class="btn_pdf">pdf</button>
								</td>
							</tr>
							<tr>
								<td>2</td>
								<td>00020</td>
								<td>KOSPI</td>
								<td>엔베니아</td>
								<td>0.82</td>
								<td>564</td>
								<td>546.11</td>
								<td>A+</td>
								<td>62.5</td>
								<td>
									<div class="bx_value">
										<span class="on">저평가</span><span>적정</span><span>고평가</span>
									</div>
								</td>
								<td>
									<button type="button" class="btn_excel">엑셀</button>
									<button type="button" class="btn_pdf">pdf</button>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td>00020</td>
								<td>KOSPI</td>
								<td>엔베니아</td>
								<td>0.82</td>
								<td>564</td>
								<td>546.11</td>
								<td>A+</td>
								<td>62.5</td>
								<td>
									<div class="bx_value">
										<span>저평가</span><span class="on">적정</span><span>고평가</span>
									</div>
								</td>
								<td>
									<button type="button" class="btn_excel">엑셀</button>
									<button type="button" class="btn_pdf">pdf</button>
								</td>
							</tr>
							<tr>
								<td>4</td>
								<td>00020</td>
								<td>KOSPI</td>
								<td>엔베니아</td>
								<td>0.82</td>
								<td>564</td>
								<td>546.11</td>
								<td>A+</td>
								<td>62.5</td>
								<td>
									<div class="bx_value">
										<span class="on">저평가</span><span>적정</span><span>고평가</span>
									</div>
								</td>
								<td>
									<button type="button" class="btn_excel">엑셀</button>
									<button type="button" class="btn_pdf">pdf</button>
								</td>
							</tr>
							<tr>
								<td>5</td>
								<td>00020</td>
								<td>KOSPI</td>
								<td>엔베니아</td>
								<td>0.82</td>
								<td>564</td>
								<td>546.11</td>
								<td>A+</td>
								<td>62.5</td>
								<td>
									<div class="bx_value">
										<span>저평가</span><span>적정</span><span class="on">고평가</span>
									</div>
								</td>
								<td>
									<button type="button" class="btn_excel">엑셀</button>
									<button type="button" class="btn_pdf">pdf</button>
								</td>
							</tr>
						</tbody>
					</table>
					<div class="btns">
						<button type="button" class="btn">더보기 +</button>
					</div>
				</article>
			</section>
		</div>
  </div>
</template>

<script>
import Select from '@/components/common/Select.vue';
import Tooltip from '@/components/common/Tooltip.vue';

export default {
  name: 'Sector',
	components : {
		Select,
		Tooltip,
	}, 
  beforeCreate() {
		document.getElementsByTagName("html")[0].className = "p_ranking";
  },
	metaInfo: {
		title: '섹터분석 | 10bagger',
	}
}
</script>