import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
		redirect: '/sectorRanking',
  },
	{
		path: '/sectorRanking',
		name: 'SectorRanking',
		component: () => import(/* webpackChunkName: "sector" */ '@/views/ranking/Sector.vue')
	},
	{
		path: '/themeRanking',
		name: 'ThemeRanking',
		component: () => import(/* webpackChunkName: "home" */ '@/views/ranking/Theme.vue')
	},
	{
		path: '/keywordMining',
		name: 'Keyword',
		component: () => import(/* webpackChunkName: "home" */ '@/views/mining/Keyword.vue')
	},
	{
		path: '/trendMining',
		name: 'Trend',
		component: () => import(/* webpackChunkName: "home" */ '@/views/mining/Trend.vue')
	},
	{
		path: '/ready',
		name: 'Ready',
		component: () => import(/* webpackChunkName: "etc" */ '@/views/etc/Ready.vue')
	},
	{
		path: "*",
		redirect: '/sectorRanking',
	},
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
