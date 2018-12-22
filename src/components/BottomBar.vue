<template>
    <div id="bottom-bar">
        <div class="box">
            <span class="label">URL</span>
            <span>{{ data.address }}</span>
        </div>
        <div class="box">
            <span class="label">PEERS</span>
            <span>{{ data.peers }}</span>
        </div>
        <div class="box">
            <span class="label">SIZE</span>
            <span>{{ data.settings.size | toHumanReadableSize }}</span>
        </div>
        <div class="box">
            <span class="label">UPDATE</span>
            <span>{{ data.content.modified | fromNow }}</span>
        </div>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import ZeroFrame from 'zeroframe/dist/zeroframe.js';
  import {unix} from 'moment';

  @Component<BottomBar>({
      filters: {
          toHumanReadableSize: (size:number) => {
              if (size === -1) return 'N/a';
              const i = size===0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
              return (size / Math.pow(1024, i)).toFixed(2) + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
          },
          fromNow: function (timestamp:number) {
              if (timestamp === -1) return 'N/a';
              return unix(timestamp).fromNow();
          },
      }
  })
  export default class BottomBar extends Vue {
      data: object = {
          address: '1PbGEh5F1wBybGjA4bAvpSEPNL5huFKVAZ',
          peers: 'N/a',
          settings: {
              size: -1,
          },
          content: {
              modified: -1,
          }
      };

      Zero;

      updateData() {
          this.Zero.cmd("siteInfo", {}, (info:object) => {
              this.data = info;
          });
      }

      created() {
          this.Zero = new ZeroFrame("");

          this.Zero.onOpenWebsocket = () => {
              setInterval(this.updateData, 60000);
              this.updateData();
          };

          this.Zero.onRequest = (cmd:string, msg:object) => {
              if (cmd === 'siteInfo') {
                  this.data = msg;
              }
          };
      }
  }
</script>

<style scoped>
    #bottom-bar {
        background-color: #31363e;
        bottom: 0;
        color: #999;
        display: flex;
        flex-direction: row;
        font-size: .9em;
        justify-content: center;
        left: 0;
        position: fixed;
        width: 100%;
    }

    .box {
        border-left: 1px solid #555;
        display: inline-block;
        padding: .5rem 1rem;
    }

    .box:last-of-type {
        border-right: 1px solid #555;
    }

    .label {
        color: #aaa;
        font-size: .7em;
        font-weight: bold;
        margin-right: .5em;
    }
</style>