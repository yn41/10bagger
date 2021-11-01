<template>
	<div class="content">
		<section class="report">
			<div class="ctop">
				<h2>바이오니아</h2>
				<span class="desc">발행일 : 2021-10-05</span>
			</div>
			<div class="cont_list">
				<button class="on" data-id="u1" @click="moveTarget">개요</button>
				<button data-id="u2" @click="moveTarget">업계주간 이슈 및 기술 트랜드</button>
				<button data-id="u3" @click="moveTarget">시장성장 동향</button>
				<button data-id="u4" @click="moveTarget">주요기업현황</button>
				<button data-id="u5" @click="moveTarget">투자매력도 상위 종목 Top5</button>
			</div>
			<article class="unit"> 
				<h3 id="u1">1. 개요</h3>
				<p class="desc">
					반도체는크게정보를저장할수있는메모리반도체와정보저장없이연산이나제어기능을하는시스템반도체(비메모리반도체)로구분됩니다. 메모리는표준품의 대량생산에 필요한생산기술이 경쟁력의 핵심요인으로작용하고있고,시스템반도체는 응용제품의 운용에 필요한설계기술이 경쟁력의 관건으로작용하고있습니다. 반도체 용도는장난감에서부터 전자제품은물론 우주항공에이르기까지다양하게사용되고있으며,죄근에는자동자와로봇등에새로운시장으로부상하여세계각국에서 개발경쟁을지열하게 벌이고있습니다. 
				</p>
				<h3 id="u2">2. 업계 주간 이슈 및 기술 트렌드</h3>
				<p class="desc">
					반도제는 2020년기준시총연간증가율이 0.58%로성장주세에있는분야입니다.최근반도체분야에서출원된특허건수는 6,538으로 점자 감소주세에있고등록된특히건수는3,950건으로점자감소주세에있습니다.반도체기술분야에신규로진 입한기업의 수는 404社로신규집입 기업수는 증가주세입니다.시장이 급속하게 성장할경우신규진입하는기업수는증가합니다.<br/>
					반도제 기술의 핵심이되는 주요 기술키워드 상위 57는 반도체,기판,전극,소자,게이트이며그외에 SEMICDNDUCTOR, 발광,호1 로등이있습니다.<br/>
					반도제분야의 동향을살펴보면 2021년조부터 반도체공급이 수요를따라가지못하고있어공급부족문제가점점대두되는중 입니다.지난 14일에도현대자에따르면아산공장은세타엔진용전자제어장지{ECU) 공급부족으로오는 1S---17일가동을중단하였습니다.또한월스트리트저널(WSJ)은 12일(현지시간) ‘‘반도셰칩 부족사태가 1 년 이상지속되면서 자동자맞 반도제 업계의관계가그어느때보다중요해졌다"며"양축업계경영진둘은긴밀한유대관계를구축하고,신제품출시를위해협력을 모색하는등문제 해결을위해 노력하고있다"고 보도했습니다.<br/>
					※출처 :https.;ljwww. edai[y．co.kr/news/read?new.sld=O!2118886629179'792&m려iaCodeNo=257&OutLnkChk=Y
				</p>
				<h3 id="u3">3. 시장성장 동향</h3>
				<h4>1) 특허 등록 동향</h4>
				<p class="desc">
					지난 10년간 반도체 분야의 특허 등록 동향을 표시합니다.
				</p>
				<div class="bx_chart">
					차트
				</div>
				<h4>2) 기술주기</h4>
				<p class="desc">
					기술주기는해당분야에서개별기술의평균적인유효기간을의미합니다.기술주기가짧을수록기술변화속도가높은분야로 판단할수있습니다.
					<table class="tbl_simple">
						<colgroup>
							<col width="150px">
						</colgroup>
						<tr>
							<th><strong>5.8</strong>년</th>
							<td>[반도체]시장에서개별기술의평균적인유효기간입니다.<br/>
							기술주기가 짧을수록기술변화속도가빠르다고볼수있습니다.</td>
						</tr>
					</table>
				</p>
				<div class="bx_chart">
					차트
				</div>
				<h3 id="u4">4. 주요기업현황</h3>
				<h4>1) 주요기업 특허보유 현황</h4>
				<p class="desc">
					해당분야에서 활동하는주요기업 중특허를많이 보유하고있는순서입니다.<br/>
					특허수가많을수록이 분야의 R&D 활동이 활발하고기술경쟁력이 높다고볼수있습니다.
				</p>
				<div class="bx_chart">
					차트
				</div>
				<h4>2) 주요 기업 R&D 활동 현황</h4>
				<p class="desc">
					해당분야기술에 연도별로얼 D fl.f특허 출원을했는지를살펴보면 각기업들이 그분야에 얼 D fl.f많은 R&D 활동을하였으며 죄근까지 그활동이 지속되고있는지를알아볼수있습니다.
				</p>
				<div class="bx_chart">
					차트
				</div>
				<h3 id="u5">5. 투자매력도 상위 종특 TOPS</h3>
				<h4 class="caption">반도체</h4>
				<table class="tbl">
						<colgroup>
							<col width="">
						</colgroup>
						<tr>
							<th>기업명</th>
							<th>기술투자지수</th>
							<th>기술력점수<br/>(TSS)</th>
							<th>기술경쟁력<br/>등급<br/>(TCG)</th>
							<th>특가평가<br/>평균점수<br/>(APES)</th>
							<th>특허등록<br/>건수</th>
							<th>시가총액<br/>(억원)</th>
							<th>기업가치추정</th>
						</tr>
						<tr>
							<td>아모텍</td>
							<td>9.6</td>
							<td>254.4</td>
							<td>A</td>
							<td>65.01</td>
							<td>446</td>
							<td>75434</td>
							<td>적정</td>
						</tr>
					</table>
					<h4>기술투자지수 [시가총액/TSS접수] </h4>
					<p class="desc">
						기술투자지수란 기업의 시가총액을TSS접수(위즈도메인이 개발한통계기법으로산출)로Lfl;,굽t입니다<br/>
						보유한기술력대비 주가가 어느정 도인지 가늠하는수지로동종기술로분류된 테마내에서 상대비교를통해 . 기업의 가치를평가할수있는 보조지표입니다.<br/>
						즉, 기술투자지수가 기술투자지수가낮다면기업이낮을수록"기술력대비 보유한기술력저평가" 보되어있어 다주 기술력관점에서 투자매력도가높습니다입니다. 
					</p>
					<h4>TCG</h4>
					<p class="desc">
						기술투자지수란 기업의 시가총액을TSS접수(위즈도메인이 개발한통계기법으로산출)로Lfl;,굽t입니다<br/>
						보유한기술력대비 주가가 어느정 도인지 가늠하는수지로동종기술로분류된 테마내에서 상대비교를통해 . 기업의 가치를평가할수있는 보조지표입니다.<br/>
						즉, 기술투자지수가 기술투자지수가낮다면기업이낮을수록"기술력대비 보유한기술력저평가" 보되어있어 다주 기술력관점에서 투자매력도가높습니다입니다. 
					</p>
			</article>
		</section>
	</div>
</template> 
<script>

export default ({
	data() {
		return {
			isLoading:true,
		}
	},
	methods: {
		moveTarget(e){
			const id = e.target.getAttribute("data-id");
			const target = document.getElementById(id);
			// const targetTop = target.getBoundingClientRect().top;
			const abTop = window.pageYOffset + target.getBoundingClientRect().top - 120;
			window.scrollTo({top:abTop, behavior:'smooth'});
		}
	},
})
</script>
