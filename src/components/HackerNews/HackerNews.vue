<template>
	<div id="hacker-news">
		<div class="card-title">
            <span class="left">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM21.2 229.2H21c.1-.1.2-.3.3-.4 0 .1 0 .3-.1.4zm218 53.9V384h-31.4V281.3L128 128h37.3c52.5 98.3 49.2 101.2 59.3 125.6 12.3-27 5.8-24.4 60.6-125.6H320l-80.8 155.1z"></path></svg>
                <span>Hacker News</span>
            </span>
			<span class="right">
                <a href="https://news.ycombinator.com/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"></path></svg>
                </a>
            </span>
		</div>
		<div class="card-body">
			<HackerNewsRow
					v-for="(value, index) in data"
					:key="index"
					:data="value">
			</HackerNewsRow>
		</div>
	</div>
</template>

<script lang="ts">
	import {Component, Vue} from 'vue-property-decorator';
	import HackerNewsRow from "./HackerNewsRow.vue";

	@Component<HackerNews>({
		components: {
			HackerNewsRow,
		},
	})
	export default class HackerNews extends Vue {
		data: Array<object> = [];

		updateData() {
			fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
				.then(response => {
					return response.json();
				})
				.then(ids => {
					return ids.slice(0, 30);
				})
				.then(ids => {
					ids.map((v:string) => {
						fetch("https://hacker-news.firebaseio.com/v0/item/"+v+".json")
							.then(response => {
								return response.json();
							})
							.then(json => {
								json.parsedUrl = "oui";//new URL(json.url).hostname.replace(/^ww.\./, '');
								return this.data.push(json);
							});
					})
				})
		}

		created() {
			this.updateData();
		}
	}
</script>

<style scoped>
	#hacker-news {
		background-color: #31363e;
		color: #c5c8ca;
        height: 49%;
	}

	#hacker-news > .card-title {
		color: rgb(254, 101, 1);
	}
</style>