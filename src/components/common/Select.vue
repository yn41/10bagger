<template>
	<div class="slct">
		<div class="slct_tit" @click="toggleSlct">{{tit}}</div>
		<ul class="slct_cont">
			<li v-for="(item, index) in options" :class="{select : item.select === true}" :key="index" :data-id="index" @click="onClickItem">{{item.name}}</li>
		</ul>
	</div>
</template>
<script>
export default {
	props: ['list'],
	data() {
		return {
			tit: "",
			on: false,
			options: this.list,
		}
	},
	methods: {
		toggleSlct(e) {
			const slctList = document.getElementsByClassName("slct");
			const target = e.target.parentNode;
			const onState = target.classList.contains("on") ? true : false;
			Array.prototype.forEach.call(slctList, item => item.classList.remove("on"));
			if (!onState) target.classList.add("on");
			else target.classList.remove("on");
		},
		onClickItem(e) {
			const id = e.target.getAttribute("data-id");
			const target = e.target.parentNode.parentNode;
			this.options.map((item, index) => {
				item.select = false;
				if (index == id) {
					item.select = true; 
					this.tit = item.name;
					this.on = false;
				}
			});
			target.classList.remove("on");
		}
	},
	created() {
		document.addEventListener("click", e => {
			const slctList = document.getElementsByClassName("slct");
			if(slctList.length > 0){
				console.log();
				const temp = e.target.className.split(" ");
				const target = e.target.className !== "" ? slctList[0].querySelector("." + temp[0]) : null;
				if (target === null) {
					Array.prototype.forEach.call(slctList, item => item.classList.remove("on"));
				}
			}
		});
	},
  mounted() {
		this.options.map(item => {
			if (item.select === true) {
				this.tit = item.name;
				return;
			}
		});
  }
}
</script>