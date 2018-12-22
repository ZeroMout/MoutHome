<template>
  <div id="app">
    <TopInfos></TopInfos>
    <div id="middle-infos">
      <div>
        <Github></Github>
      </div>
      <div>
        <HackerNews></HackerNews>
        <ProductHunt></ProductHunt>
      </div>
    </div>
    <BottomBar></BottomBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Github from "./components/Github/Github.vue";
import HackerNews from "./components/HackerNews/HackerNews.vue";
import TopInfos from "./components/TopInfos.vue";
import ProductHunt from "./components/ProductHunt/ProductHunt.vue";
import BottomBar from "./components/BottomBar.vue";

@Component({
  components: {
    BottomBar,
    ProductHunt,
    TopInfos,
    HackerNews,
    Github,
  },
})
export default class App extends Vue {}
</script>

<style>
  ::-webkit-scrollbar {
    background-color: #5a5f67;
    width:.5rem;
  }

  ::-webkit-scrollbar-thumb        {
    background-color: #191c24;
  }

  body {
    background-color: #25292f;
    margin: 0;
  }

  svg {
    margin: -4px 8px -4px 0;
    white-space: nowrap;
  }

  a {
    color: inherit;
    text-decoration: none;
    text-decoration-color: initial;
    text-decoration-style: solid;
  }

  a:hover {
    text-decoration: underline;
  }

  .card-title {
    display: flex;
    flex-direction: row;
    font-weight: 600;
    justify-content: space-between;
    padding: 12px;
  }

  .card-title > .left svg {
    font-size: 32px;
    height: 1em;
    vertical-align: middle;
    width: 1em;
  }

  .card-title > .right svg {
    width: 1em;
    font-size: 16px;
    vertical-align: middle;
  }

  .card-body {
    height: calc(100% - 49px);
    overflow-y: auto;
    padding: 0 16px;
  }

  #app {
    font-family: Segoe UI,Helvetica,Arial,sans-serif;
    padding: 0 5%;
    overflow: hidden;
  }

  #middle-infos {
    display: flex;
    flex-direction: row;
    height: 80vh;
    justify-content: space-between;
  }

  #middle-infos > div {
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    width:49%;
  }
</style>
