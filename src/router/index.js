import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/10bagger/',
		redirect: '/sectorRanking',
  },
	{
		path: '/10bagger/sectorRanking',
		name: 'SectorRanking',
		component: () => import(/* webpackChunkName: "sector" */ '@/views/ranking/Sector.vue')
	},
	{
		path: '/10bagger/themeRanking',
		name: 'ThemeRanking',
		component: () => import(/* webpackChunkName: "home" */ '@/views/ranking/Theme.vue')
	},
	{
		path: '/10bagger/keywordMining',
		name: 'Keyword',
		component: () => import(/* webpackChunkName: "home" */ '@/views/mining/Keyword.vue')
	},
	{
		path: '/10bagger/trendMining',
		name: 'Trend',
		component: () => import(/* webpackChunkName: "home" */ '@/views/mining/Trend.vue')
	},
	{
		path: '/10bagger/ready',
		name: 'Ready',
		component: () => import(/* webpackChunkName: "etc" */ '@/views/etc/Ready.vue')
	},
	{
		path: "*",
		redirect: '/10bagger/sectorRanking',
	},
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
