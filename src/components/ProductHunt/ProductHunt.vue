<template>
    <div id="product-hunt">
        <div class="card-title">
            <span class="left">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z"></path></svg>
                <span>Product Hunt</span>
            </span>
            <span class="right">
                <a href="https://www.producthunt.com/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"></path></svg>
                </a>
            </span>
        </div>
        <div class="card-body">
            <ProductHuntRow v-for="(value, index) in data"
                            :key="index"
                            :data="value">
            </ProductHuntRow>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import ProductHuntRow from './ProductHuntRow.vue';

    @Component<ProductHunt>({
        components: {
            ProductHuntRow,
        },
    })
    export default class ProductHunt extends Vue {
        data: Array<object> = [];

        updateData() {
            fetch("https://devo.burakkarakan.com/api/producthunt")
                .then(response => {
                    return response.json();
                })
                .then(json => {
                    this.data = json.data;
                });
        }

        created() {
            this.updateData();
        }
    }
</script>

<style scoped>
    #product-hunt {
        background-color: #31363e;
        color: #c5c8ca;
        height: 49%;
    }

    #product-hunt > .card-title {
        background-color: rgb(49, 54, 62);
        color: rgb(218, 84, 48);
    }
</style>