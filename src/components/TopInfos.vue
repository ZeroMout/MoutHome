<template>
    <div id="top-infos">
        <span id="time">{{ time }}</span>
        <span id="date">{{ date }}</span>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import moment from 'moment';

  @Component<TopInfos>({})
  export default class TopInfos extends Vue {
      time: string = moment().format('A hh:mm');
      date: string = moment().format('dddd, MMMM DD');

      async updateTime() {
          this.time = moment().format('A hh:mm');
      }

      async updateDate() {
          this.date = moment().format('dddd, MMMM DD');
      }

      created() {
          setInterval(() => {
              this.updateTime();
              this.updateDate();
          }, 1000);
      }
  }
</script>

<style scoped>
    #top-infos {
        color: #949494;
        display: flex;
        flex-direction: row;
        font-size: 32px;
        font-weight: 100;
        justify-content: space-between;
        margin: 25px;
    }
</style>