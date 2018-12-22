<template>
	<div class="github-item">
		<div class="github-repo">
			<a class="github-url" :href="data.url">
				<span class="github-author">{{ data.author }}</span> /
				<span class="github-name">{{ data.name }}</span></a></div>
		<p class="github-desc">{{ data.description }}</p>
		<span class="github-sub">
		<span>
			<span class="github-lang-color"
					:style="langBackgroundColor"
					v-if="data.language">
			</span>
			<span class="github-lang" v-if="data.language">{{ data.language }}</span>
			<a class="github-stars" :href="data.url+'/stargazers'">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
					<path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
				</svg>
				<span>{{ data.stars.toLocaleString() }}</span>
			</a>
			<a class="github-forks" :href="data.url+'/network'">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
					<path fill="currentColor" d="M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z"></path>
				</svg>
				<span>{{ data.forks.toLocaleString() }}</span>
			</a>
		</span>
		<span>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
				<path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
			</svg>
			<span class="github-stars-today">{{ data.currentPeriodStars }} stars today</span>
		</span>
	</span>
	</div>
</template>

<script lang="ts">
	import {Component, Vue, Prop} from 'vue-property-decorator';

	interface DataInterface extends Object {
		url: string,
		author: string,
		name: string,
		description: string,
		language: string,
		languageColor: string,
		stars: number,
		forks: number,
		currentPeriodStars: number
	}

	@Component<GithubRow>({})
	export default class GithubRow extends Vue {
		@Prop(Object) data!: DataInterface;

		get langBackgroundColor() {
			return 'background-color: '+this.data.languageColor;
		}
	}
</script>

<style scoped>
	.github-item {
		border-bottom: 1px solid rgba(223,227,232,.66);
		padding: 16px 0;
	}

	.github-item:last-of-type {
		border:none;
	}

	.github-url {
		color: #7aace4;
		word-wrap: break-word;
	}

	.github-name {
		font-weight: 600;
	}

	.github-desc {
		word-wrap: break-word;
	}

	.github-desc, .github-sub {
		color: #999999;
	}

	.github-sub {
		display: flex;
		flex-direction: row;
		font-size: 12px;
		justify-content: space-between;
	}

	.github-sub svg {
		height: 1em;
		margin-right: 4px;
		vertical-align: 20%;
		width: 1.125em;
	}

	.github-lang-color {
		border-radius: 50%;
		display: inline-block;
		height: 12px;
		margin-right: 4px;
		vertical-align: -10%;
		width: 12px;
	}

	.github-lang, .github-stars {
		margin-right: 16px;
	}
</style>