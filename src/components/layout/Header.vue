<template>
	<div class="hwrap">
		<header>
			<div class="inner">
				<router-link to="/10bagger" class="logo">10bagger - 상장</router-link>
				<div class="right">
					<div class="bx_search">
						<input type="text" placeholder="종목명 또는 종목코드를 입력하십시오."/>
						<button type="button">검색</button>
					</div>
					<div class="btns">
						<button type="button">로그인</button>
						<button type="button">회원가입</button>
					</div>
				</div>
			</div>
		</header>
		<nav class="gnb" @mouseleave="offMenu">
			<ul class="inner">
				<li>
					<strong class="menu" @mouseover="onMenu">섹터/테마 기술랭킹</strong>
					<ul class="dep">
						<li><router-link to="/10bagger/sectorRanking" class="smenu">섹터분석</router-link></li>
						<li><router-link to="/10bagger/themeRanking" class="smenu">테마분석</router-link></li>
					</ul>
				</li>
				<li>
					<strong class="menu" @mouseover="onMenu">투자마이닝</strong>
					<ul class="dep">
						<li><router-link to="/10bagger/keywordMining" class="smenu">키워드 검색</router-link></li>
						<li><router-link to="/10bagger/trendMining" class="smenu">트렌드 검색</router-link></li>
					</ul>
				</li>
				<li>
					<strong class="menu" @mouseover="onMenu">AI기술종목분석</strong>
					<ul class="dep">
						<li><router-link to="/10bagger/ready" class="smenu">추천 종목분석</router-link></li>
					</ul>
				</li>
				<li>
					<strong class="menu" @mouseover="onMenu">매매신호서비스</strong>
					<ul class="dep">
						<li><router-link to="/10bagger/ready" class="smenu">기술기반 매매신호</router-link></li>
					</ul>
				</li>
				<li>
					<strong class="menu" @mouseover="onMenu">테마포착</strong>
					<ul class="dep">
						<li><router-link to="/10bagger/ready" class="smenu">기술테마 이슈포착</router-link></li>
					</ul>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		methods:{
			onMenu: () => {
				document.getElementsByTagName("nav")[0].classList.add("on");
			},
			offMenu: () => {
				document.getElementsByTagName("nav")[0].classList.remove("on");
			},
		}
	}
</script>