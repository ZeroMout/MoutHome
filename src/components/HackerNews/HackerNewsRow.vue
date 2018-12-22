<template>
	<div class="hacker-news-item">
		<div class="hacker-news-top">
			<div class="hacker-news-title">
				<a :href="data.url">{{ data.title }}</a>
			</div>
			<div class="hacker-news-link">
				<a :href="'https://'+data.parsedUrl">({{ data.parsedUrl }})</a>
			</div>
		</div>
		<div class="hacker-news-sub">
			<span>{{ data.score }} points by </span>
			<a :href="'https://news.ycombinator.com/user?id='+data.by">{{ data.by }}</a>
			<span> | {{ data.time | fromNow }} | </span>
			<a :href="'https://news.ycombinator.com/item?id='+data.id">{{ data.descendants }} comments</a>
		</div>
	</div>
</template>

<script lang="ts">
	import {Component, Vue, Prop} from 'vue-property-decorator';
	import {unix} from 'moment';

	interface DataInterface extends Object {
		title: string,
		parsedUrl: string,
		score: number,
		by: string,
		time: number,
		descendants: number,
	}

	@Component<HackerNewsRow>({
		filters: {
			fromNow: function (timestamp) {
				return unix(timestamp).fromNow();
			},
		},
	})
	export default class HackerNewsRow extends Vue {
		@Prop(Object) data!:DataInterface;
	}
</script>

<style scoped>
	.hacker-news-item {
		border-bottom: 1px solid rgba(223,227,232,.66);
		padding: 8px 0;
	}

	.hacker-news-item:last-of-type {
		border:none;
	}

	.hacker-news-top {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	.hacker-news-title {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.hacker-news-link {
        color: #828282;
        float: right;
        font-size: .7em;
        margin-top: 3px;
        padding-left: 4px;
        white-space: nowrap;
	}

	.hacker-news-sub {
		color: #828282;
		font-size: .6em;
		padding-top: 3px;
	}
</style>