<template>
	<div class="container">
		<div class="inner">
			<div class="top">
				<h1>TOP5 상위테마 분석</h1>
				<span class="desc">현재기준 인기있는 상위테마를 기준으로 한 분석을 제공합니다.</span>
			</div>
			<RankingTheme v-for="item in arr_temp" :key="item" :id="item"/>
			<div class="top">
				<h1>기업 기술력 분석 리포트</h1>
			</div>
			<Report/> 
		</div>
	</div>
</template>

<script>
import RankingTheme from '@/components/item/RankingTheme.vue';
import Report from '@/components/report/Sector.vue';

export default {
	name: 'Theme',
	data() {
		return {
			arr_temp: [1,2,3,4,5],
		}
	},
	components: {
		RankingTheme,
		Report,
	},
	beforeCreate() {
		document.getElementsByTagName("html")[0].className = "p_ranking";
	},
	metaInfo: {
		title: '테마분석 | 10bagger',
	}
}
</script>
